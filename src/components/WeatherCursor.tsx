
import React, { useEffect, useState } from "react";
import { Sun, CloudRain, Cloud, CloudSnow, CloudLightning } from "lucide-react";

interface WeatherCursorProps {
  weatherCondition: string;
}

const WeatherCursor: React.FC<WeatherCursorProps> = ({ weatherCondition }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    document.addEventListener('mousemove', updateCursorPosition);
    
    // Add CSS to hide default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.body.style.cursor = 'auto';
    };
  }, []);
  
  const getCursorIcon = () => {
    const condition = weatherCondition.toLowerCase();
    
    if (condition.includes("rain")) {
      return <CloudRain size={24} className="text-blue-400" />;
    } else if (condition.includes("cloud")) {
      return <Cloud size={24} className="text-gray-400" />;
    } else if (condition.includes("snow")) {
      return <CloudSnow size={24} className="text-white" />;
    } else if (condition.includes("thunder") || condition.includes("lightning")) {
      return <CloudLightning size={24} className="text-yellow-400" />;
    } else {
      return <Sun size={24} className="text-yellow-400" />;
    }
  };
  
  return (
    <div 
      className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      {getCursorIcon()}
    </div>
  );
};

export default WeatherCursor;

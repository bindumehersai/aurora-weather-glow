
import React from "react";

interface WeatherAnimationsProps {
  condition: string;
}

const WeatherAnimations: React.FC<WeatherAnimationsProps> = ({ condition }) => {
  const lowerCondition = condition.toLowerCase();
  const dropCount = 50;
  const particleCount = 15;
  
  const renderRainDrops = () => {
    return Array.from({ length: dropCount }).map((_, i) => {
      const left = `${Math.random() * 100}%`;
      const animationDuration = `${Math.random() * 1 + 0.5}s`;
      const animationDelay = `${Math.random() * 2}s`;
      
      return (
        <div 
          key={`rain-${i}`}
          className="absolute bg-blue-400 dark:bg-blue-300 w-[1px] h-[10px] opacity-70 rounded-full"
          style={{
            left,
            top: '-10px',
            animation: `fall ${animationDuration} linear infinite`,
            animationDelay
          }}
        />
      );
    });
  };
  
  const renderSnowflakes = () => {
    return Array.from({ length: particleCount }).map((_, i) => {
      const left = `${Math.random() * 100}%`;
      const animationDuration = `${Math.random() * 3 + 2}s`;
      const animationDelay = `${Math.random() * 2}s`;
      const size = `${Math.random() * 5 + 5}px`;
      
      return (
        <div 
          key={`snow-${i}`}
          className="absolute bg-white dark:bg-slate-200 rounded-full opacity-80"
          style={{
            left,
            top: '-10px',
            width: size,
            height: size,
            animation: `snowfall ${animationDuration} linear infinite`,
            animationDelay
          }}
        />
      );
    });
  };
  
  const renderClouds = () => {
    return Array.from({ length: 6 }).map((_, i) => {
      const left = `${i * 20}%`;
      const top = `${Math.random() * 15 + 5}%`;
      const animationDuration = `${Math.random() * 100 + 50}s`;
      const scale = Math.random() * 0.5 + 0.5;
      const opacity = Math.random() * 0.3 + 0.1;
      
      return (
        <div 
          key={`cloud-${i}`}
          className="absolute bg-white dark:bg-slate-300 rounded-full w-32 h-16 before:content-[''] before:absolute before:top-[-15px] before:left-[10px] before:w-20 before:h-20 before:rounded-full before:bg-white dark:before:bg-slate-300 after:content-[''] after:absolute after:top-[-10px] after:left-[30px] after:w-16 after:h-16 after:rounded-full after:bg-white dark:after:bg-slate-300"
          style={{
            left,
            top,
            transform: `scale(${scale})`,
            opacity,
            animation: `driftHorizontal ${animationDuration} linear infinite`,
            animationDelay: `${i * 10}s`
          }}
        />
      );
    });
  };
  
  const renderSunRays = () => {
    return (
      <div className="absolute top-10 right-10 opacity-70">
        <div className="w-32 h-32 bg-yellow-300 rounded-full animate-pulse-subtle" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-200 rounded-full opacity-30 animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-100 rounded-full opacity-20 animate-pulse-subtle" />
      </div>
    );
  };
  
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {lowerCondition.includes("rain") && renderRainDrops()}
      {lowerCondition.includes("snow") && renderSnowflakes()}
      {lowerCondition.includes("cloud") && renderClouds()}
      {lowerCondition.includes("sunny") && renderSunRays()}
    </div>
  );
};

export default WeatherAnimations;

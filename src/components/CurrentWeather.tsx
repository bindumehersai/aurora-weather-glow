
import React from "react";
import { 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  CloudLightning, 
  CloudDrizzle,
  Sun,
  Moon,
  Wind,
  Thermometer
} from "lucide-react";

interface CurrentWeatherProps {
  data: {
    location: string;
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    time: string;
    iconCode: string;
  };
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
  // Get the weather icon based on condition
  const getWeatherIcon = () => {
    const condition = data.condition.toLowerCase();
    
    if (condition.includes("rain")) {
      return <CloudRain className="current-weather-icon text-blue-400 dark:text-blue-300 animate-float" />;
    } else if (condition.includes("cloud")) {
      return <Cloud className="current-weather-icon text-gray-400 dark:text-gray-300 animate-float" />;
    } else if (condition.includes("snow")) {
      return <CloudSnow className="current-weather-icon text-white animate-float" />;
    } else if (condition.includes("thunder") || condition.includes("lightning")) {
      return <CloudLightning className="current-weather-icon text-yellow-400 animate-float" />;
    } else if (condition.includes("drizzle")) {
      return <CloudDrizzle className="current-weather-icon text-blue-300 dark:text-blue-200 animate-float" />;
    } else if (condition.includes("clear") && data.time.includes("night")) {
      return <Moon className="current-weather-icon text-slate-300 dark:text-slate-100 animate-float" />;
    } else {
      return <Sun className="current-weather-icon text-yellow-400 dark:text-yellow-300 animate-float" />;
    }
  };

  return (
    <div className="weather-card dark:weather-card-dark p-6 md:p-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-2">{data.location}</h2>
          <p className="text-xl md:text-2xl text-white/90 dark:text-white/90 mb-4">{data.condition}</p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <div className="flex items-center bg-white/10 dark:bg-slate-700/50 rounded-full px-4 py-2">
              <Thermometer className="w-5 h-5 text-white dark:text-white mr-2" />
              <span className="text-white dark:text-white">Humidity: {data.humidity}%</span>
            </div>
            <div className="flex items-center bg-white/10 dark:bg-slate-700/50 rounded-full px-4 py-2">
              <Wind className="w-5 h-5 text-white dark:text-white mr-2" />
              <span className="text-white dark:text-white">Wind: {data.windSpeed} km/h</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          {getWeatherIcon()}
          <h3 className="text-5xl font-bold text-white dark:text-white mt-2">{data.temperature}°C</h3>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

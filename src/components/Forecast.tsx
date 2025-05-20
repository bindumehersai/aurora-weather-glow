
import React from "react";
import { 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  CloudLightning, 
  Sun,
  Moon 
} from "lucide-react";

interface ForecastDay {
  date: string;
  day: string;
  temperature: {
    min: number;
    max: number;
  };
  condition: string;
}

interface ForecastProps {
  forecast: ForecastDay[];
}

const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
  const getWeatherIcon = (condition: string) => {
    const lowerCondition = condition.toLowerCase();
    
    if (lowerCondition.includes("rain")) {
      return <CloudRain className="weather-icon text-blue-400 dark:text-blue-300" />;
    } else if (lowerCondition.includes("cloud")) {
      return <Cloud className="weather-icon text-gray-400 dark:text-gray-300" />;
    } else if (lowerCondition.includes("snow")) {
      return <CloudSnow className="weather-icon text-white" />;
    } else if (lowerCondition.includes("thunder") || lowerCondition.includes("lightning")) {
      return <CloudLightning className="weather-icon text-yellow-400" />;
    } else if (lowerCondition.includes("night") || lowerCondition.includes("clear night")) {
      return <Moon className="weather-icon text-slate-300 dark:text-slate-100" />;
    } else {
      return <Sun className="weather-icon text-yellow-400 dark:text-yellow-300" />;
    }
  };

  return (
    <div className="weather-card dark:weather-card-dark p-4 md:p-6 animate-fade-in">
      <h2 className="text-xl md:text-2xl font-semibold text-white dark:text-white mb-4">5-Day Forecast</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4">
        {forecast.map((day, index) => (
          <div
            key={day.date}
            className="forecast-item border border-white/10 dark:border-slate-700 rounded-xl text-center p-3"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <p className="text-sm font-medium text-white dark:text-white">{day.day}</p>
            <div className="my-2">{getWeatherIcon(day.condition)}</div>
            <p className="text-sm text-white/80 dark:text-white/80">{day.condition}</p>
            <div className="flex justify-center gap-2 mt-1">
              <span className="text-white dark:text-white font-medium">{day.temperature.max}°</span>
              <span className="text-white/70 dark:text-white/70">{day.temperature.min}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;

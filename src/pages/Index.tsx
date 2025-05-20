
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CurrentWeather from "@/components/CurrentWeather";
import Forecast from "@/components/Forecast";
import Footer from "@/components/Footer";
import WeatherAnimations from "@/components/WeatherAnimations";
import WeatherCursor from "@/components/WeatherCursor";
import { mockCurrentWeather, mockForecast, getWeatherBackground } from "@/utils/mockWeatherData";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [currentWeather, setCurrentWeather] = useState({
    ...mockCurrentWeather,
    location: "New Delhi, India", // Set default location to India
    condition: "Sunny", // Set a default condition
  });
  const [forecast, setForecast] = useState(mockForecast);
  const [loading, setLoading] = useState(true);
  const [bgClass, setBgClass] = useState("bg-sunny");
  const { toast } = useToast();
  
  // Check if dark mode is enabled to set appropriate background
  // Default to light mode
  useEffect(() => {
    // Make sure we're using light mode by default
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    
    // Initial fetch for India's weather
    handleSearch("New Delhi, India");
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // Set background based on current weather
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    const newBgClass = getWeatherBackground(currentWeather.condition, isDarkMode);
    setBgClass(newBgClass);
  }, [currentWeather.condition]);

  // Listen for dark mode changes
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          const newBgClass = getWeatherBackground(currentWeather.condition, isDark);
          setBgClass(newBgClass);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, [currentWeather.condition]);

  const handleSearch = (query: string) => {
    setLoading(true);
    
    // In a real app, this would be an API call
    // For now, we'll simulate a delay and use mock data
    setTimeout(() => {
      // Randomly select a condition to demonstrate background changes
      const conditions = ["Sunny", "Cloudy", "Rainy", "Stormy", "Snowy"];
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
      
      // Update with mock data but change the location and condition
      setCurrentWeather({
        ...mockCurrentWeather,
        location: query,
        condition: randomCondition,
        temperature: Math.floor(Math.random() * 30) + 5, // Random temp between 5 and 35
      });
      
      // Update forecast with random temperatures
      const updatedForecast = forecast.map(day => ({
        ...day,
        temperature: {
          min: Math.floor(Math.random() * 15) + 10,
          max: Math.floor(Math.random() * 15) + 20
        }
      }));
      
      setForecast(updatedForecast);
      setLoading(false);
      
      toast({
        title: "Weather updated!",
        description: `Weather data for ${query} loaded successfully.`
      });
    }, 1000);
  };

  return (
    <div className={`min-h-screen flex flex-col bg-transition ${bgClass}`}>
      {/* Custom cursor based on weather condition */}
      <WeatherCursor weatherCondition={currentWeather.condition} />
      
      {/* Weather animations based on condition */}
      <WeatherAnimations condition={currentWeather.condition} />
      
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 flex-grow flex flex-col">
        <Header />
        
        <main className="flex-grow flex flex-col py-8 md:py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
              Weather Vista
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
              Get accurate weather forecasts for any location worldwide
            </p>
          </div>
          
          <SearchBar onSearch={handleSearch} />
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="space-y-6">
              <CurrentWeather data={currentWeather} />
              <Forecast forecast={forecast} />
            </div>
          )}
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;

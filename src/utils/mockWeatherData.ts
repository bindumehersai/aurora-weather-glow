
// Mock weather data for initial display and when API is not available

export const mockCurrentWeather = {
  location: "New Delhi, India",
  temperature: 28,
  condition: "Sunny",
  humidity: 65,
  windSpeed: 12,
  time: "day",
  iconCode: "02d"
};

export const mockForecast = [
  {
    date: "2025-05-21",
    day: "Wed",
    temperature: {
      min: 21,
      max: 29
    },
    condition: "Sunny"
  },
  {
    date: "2025-05-22",
    day: "Thu",
    temperature: {
      min: 22,
      max: 30
    },
    condition: "Partly Cloudy"
  },
  {
    date: "2025-05-23",
    day: "Fri",
    temperature: {
      min: 20,
      max: 28
    },
    condition: "Rainy"
  },
  {
    date: "2025-05-24",
    day: "Sat",
    temperature: {
      min: 19,
      max: 26
    },
    condition: "Cloudy"
  },
  {
    date: "2025-05-25",
    day: "Sun",
    temperature: {
      min: 21,
      max: 30
    },
    condition: "Sunny"
  }
];

export const getWeatherBackground = (condition: string, isDark: boolean) => {
  const lowercaseCondition = condition.toLowerCase();
  
  if (lowercaseCondition.includes("cloud")) {
    return isDark 
      ? "bg-gradient-to-b from-slate-800 to-slate-900" 
      : "bg-gradient-to-b from-blue-300 to-blue-100";
  } else if (lowercaseCondition.includes("rain") || lowercaseCondition.includes("drizzle")) {
    return isDark 
      ? "bg-gradient-to-b from-slate-900 to-blue-900" 
      : "bg-gradient-to-b from-blue-500 to-blue-300";
  } else if (lowercaseCondition.includes("snow")) {
    return isDark 
      ? "bg-gradient-to-b from-slate-800 to-blue-950" 
      : "bg-gradient-to-b from-sky-200 to-white";
  } else if (lowercaseCondition.includes("thunder") || lowercaseCondition.includes("storm")) {
    return isDark 
      ? "bg-gradient-to-b from-gray-900 to-slate-950" 
      : "bg-gradient-to-b from-yellow-600 to-gray-700";
  } else if (lowercaseCondition.includes("night") || lowercaseCondition.includes("clear night")) {
    return "bg-night";
  } else {
    // Sunny
    return isDark 
      ? "bg-gradient-to-b from-slate-800 to-blue-900" 
      : "bg-gradient-to-b from-yellow-400 to-orange-300";
  }
};

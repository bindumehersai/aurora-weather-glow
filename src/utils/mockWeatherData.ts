
// Mock weather data for initial display and when API is not available

export const mockCurrentWeather = {
  location: "New York, US",
  temperature: 24,
  condition: "Partly Cloudy",
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
      min: 18,
      max: 26
    },
    condition: "Sunny"
  },
  {
    date: "2025-05-22",
    day: "Thu",
    temperature: {
      min: 19,
      max: 28
    },
    condition: "Partly Cloudy"
  },
  {
    date: "2025-05-23",
    day: "Fri",
    temperature: {
      min: 17,
      max: 25
    },
    condition: "Rainy"
  },
  {
    date: "2025-05-24",
    day: "Sat",
    temperature: {
      min: 15,
      max: 22
    },
    condition: "Cloudy"
  },
  {
    date: "2025-05-25",
    day: "Sun",
    temperature: {
      min: 18,
      max: 24
    },
    condition: "Sunny"
  }
];

export const getWeatherBackground = (condition: string, isDark: boolean) => {
  const lowercaseCondition = condition.toLowerCase();
  
  if (lowercaseCondition.includes("cloud")) {
    return isDark ? "bg-gradient-to-b from-slate-800 to-slate-900" : "bg-cloudy";
  } else if (lowercaseCondition.includes("rain") || lowercaseCondition.includes("drizzle")) {
    return isDark ? "bg-gradient-to-b from-slate-900 to-blue-900" : "bg-rainy";
  } else if (lowercaseCondition.includes("snow")) {
    return isDark ? "bg-gradient-to-b from-slate-800 to-blue-950" : "bg-snowy";
  } else if (lowercaseCondition.includes("thunder") || lowercaseCondition.includes("storm")) {
    return isDark ? "bg-gradient-to-b from-gray-900 to-slate-950" : "bg-stormy";
  } else if (lowercaseCondition.includes("night") || lowercaseCondition.includes("clear night")) {
    return "bg-night";
  } else {
    return isDark ? "bg-gradient-to-b from-slate-800 to-blue-900" : "bg-sunny";
  }
};

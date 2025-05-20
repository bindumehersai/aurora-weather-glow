
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialDarkMode = storedTheme === "dark" || (!storedTheme && prefersDark);
    setIsDarkMode(initialDarkMode);
    
    if (initialDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  
  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      toast({
        title: "Dark mode activated",
        description: "Your eyes will thank you later!"
      });
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      toast({
        title: "Light mode activated",
        description: "Bright and sunny, just like the weather!"
      });
    }
  };
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white/20 dark:bg-slate-800/50 backdrop-blur-md hover:bg-white/30 dark:hover:bg-slate-700/50 transition-colors"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-yellow-300 animate-pulse-subtle" />
      ) : (
        <Moon className="w-5 h-5 text-slate-900 animate-pulse-subtle" />
      )}
    </button>
  );
}

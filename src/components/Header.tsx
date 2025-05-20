
import React from "react";
import { ThemeToggle } from "./ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="w-full flex justify-between items-center py-4 px-6 md:px-8">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          WeatherVista
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;

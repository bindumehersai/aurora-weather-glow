
import React, { useState } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full max-w-xl mx-auto mb-8 relative animate-fade-in"
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Search for a city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full glass-input dark:glass-input-dark transition-all duration-300"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/30 dark:bg-slate-700/50 hover:bg-white/50 dark:hover:bg-slate-600/50 transition-all duration-300"
        >
          <Search className="w-5 h-5 text-white dark:text-slate-200" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

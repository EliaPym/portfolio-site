"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "dark" | "light" | "high-contrast";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Get the initial theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState<Theme>("dark");
  
  // Effect to sync theme with localStorage and <html> element
  useEffect(() => {
    // Get saved theme from localStorage or use system preference
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    } 
    // Check for high contrast mode preference
    else if (window.matchMedia('(prefers-contrast: more)').matches) {
      setTheme("high-contrast");
    }
  }, []);
  
  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "light" : "dark");
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Update the DOM when theme changes
  useEffect(() => {
    // Update data-theme attribute on the document element
    document.documentElement.setAttribute("data-theme", theme);
    
    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  
  return context;
}
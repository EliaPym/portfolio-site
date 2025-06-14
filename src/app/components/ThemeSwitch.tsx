import React from "react";
import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@/../../public/icons/icons";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const isLightMode = theme === "light";

  const toggleTheme = () => {
    setTheme(isLightMode ? "dark" : "light");
  };

  return (
    <div className="flex items-center justify-end w-full h-full">
      <button className={`border border-transparent hover:border-base-content p-1 rounded-full`}>
        {isLightMode ? (
          <SunIcon
            className="w-6 h-6 text-base-content fill-black"
            onClick={toggleTheme}
          />
        ) : (
          <MoonIcon
            className="w-6 h-6 text-base-content fill-base-content"
            onClick={toggleTheme}
          />
        )}
      </button>
    </div>
  );
}

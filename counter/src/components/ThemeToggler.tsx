import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import "../styles/ThemeToggler.css"

const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggler-container">
      <div className="icon-container">
        {theme === "light" ? (
          <FaSun size={24} className="icon sun-icon" />
        ) : (
          <FaMoon size={24} className="icon moon-icon" />
        )}
      </div>
      <div className="slider-container">
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default ThemeToggler;

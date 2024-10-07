import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ThemeSwitcher = () => {
  const { darkMode, setDarkMode } = useContext(Context);

  const handleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      className={`dark-mode-btn ${
        darkMode ? "text-for-dark-mode" : "dark-mode-text "
      }`}
      aria-label="Light mode / Dark mode"
      onClick={handleTheme}
    >
      {darkMode ? (
       <span><Brightness7Icon className="theme-icon" />
         Light Mode</span> 
      ) : (
       <span><DarkModeOutlinedIcon className="theme-icon" />Dark Mode</span> 
      )}
     
    </button>
  );
};

export default ThemeSwitcher;

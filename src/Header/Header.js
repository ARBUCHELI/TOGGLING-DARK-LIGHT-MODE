import React from "react";
import { useTheme } from '../hooks/useTheme.js';

const Header = () => {
  const { onToggleTheme, isDarkTheme} = useTheme();
  return (
    <header className="header">
      <h2>Activities</h2>
      <section className="actionsContainer">
        <button
          onClick={() => onToggleTheme()}
        >
           {isDarkTheme ? "Switch to 🌞 mode" : "Switch to 🌚 mode"}
        </button>
      </section>
    </header>
  );
};

export default Header;
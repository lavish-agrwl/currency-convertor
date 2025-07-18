import React, { createContext, useContext, useEffect, useState } from "react";

// Create the ThemeContext
const ThemeContext = createContext();

// ThemeContextProvider component
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const h = document.getElementById("root");
    if (theme === "dark") {
      h.classList.remove("light");
      h.classList.add("dark");
    } else {
      h.classList.remove("dark");
      h.classList.add("light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useThemeContext = () => useContext(ThemeContext);

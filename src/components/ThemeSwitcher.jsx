import { useThemeContext } from "../context/useThemeContext";

function ThemeSwitcher() {
  const { theme, setTheme } = useThemeContext();
  return (
    <>
      <button
        className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-2 rounded-md shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "🌞" : " 🌜"}
      </button>
    </>
  );
}

export default ThemeSwitcher;

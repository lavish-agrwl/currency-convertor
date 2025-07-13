/**
 * Main entry point for the Currency Converter React application
 * Sets up the React root and renders the App component
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Create the React root and render the application
// StrictMode helps catch common bugs during development
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

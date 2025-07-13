import { useEffect, useState } from "react";

// Cache key for storing exchange rate data in session storage
const CACHE_KEY = "currency_exchange_rates";

/**
 * Custom React hook for fetching and caching currency exchange rates
 * Implements session-based caching to avoid unnecessary API calls
 *
 * @returns {Object} Currency exchange rate data from the API
 */
function useCurrency() {
  const [data, setData] = useState({});

  /**
   * Fetches currency exchange rate data from the API
   * First checks session storage for cached data to avoid redundant API calls
   * If no valid cache exists, makes a fresh API request and caches the result
   */
  const fetchCurrencyData = async () => {
    // Check if data exists in sessionStorage
    const cachedData = sessionStorage.getItem(CACHE_KEY);

    if (cachedData) {
      try {
        const parsedData = JSON.parse(cachedData);
        setData(parsedData);
        console.log("Using cached currency data");
        return;
      } catch (error) {
        console.error("Error parsing cached data:", error);
        // If cached data is invalid, remove it and fetch fresh data
        sessionStorage.removeItem(CACHE_KEY);
      }
    }

    // Fetch fresh data if no valid cache exists
    const url = `https://api.exchangerate.host/live?access_key=${
      import.meta.env.VITE_CURRENCY_API_KEY
    }`;

    try {
      console.log("Fetching fresh currency data from API");
      const response = await fetch(url);
      const result = await response.json();

      // Store in sessionStorage for future use during this session
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(result));
      setData(result);
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  };

  // Fetch currency data when component mounts
  useEffect(() => {
    fetchCurrencyData();
  }, []);

  return data;
}
export default useCurrency;

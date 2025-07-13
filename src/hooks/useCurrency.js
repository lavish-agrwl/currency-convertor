import { useEffect, useState } from "react";

const CACHE_KEY = "currency_exchange_rates";

function useCurrency() {
  const [data, setData] = useState({});

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
    let url = `https://api.exchangerate.host/live?access_key=${
      import.meta.env.VITE_CURRENCY_API_KEY
    }`;
    try {
      console.log("Fetching fresh currency data from API");
      const response = await fetch(url);
      const result = await response.json();

      // Store in sessionStorage for future use
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(result));
      setData(result);
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  };

  useEffect(() => {
    fetchCurrencyData();
  }, []);

  return data;
}
export default useCurrency;

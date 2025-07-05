import { useEffect, useState } from "react";

function useCurrency(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/${currency}.json`;
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // Process the currency data
          setData(data[currency]);
        });
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  }, [currency]);
  return data;
}
export default useCurrency;

import { useState } from "react";
import CurrencyCard from "./components/CurrencyCard";
import useCurrency from "./hooks/useCurrency";
import backgroundImage from "./assets/backgroundImage.png";

/**
 * Main App component for the Currency Converter application
 * Handles currency conversion logic and UI state management
 */
const App = () => {
  // State management for conversion values and selected currencies
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  // Fetch currency exchange rates data using custom hook
  const data = useCurrency();

  /**
   * Calculates the converted amount based on current exchange rates
   * Uses USD as base currency for all conversions
   */
  function calculateConvertedAmount() {
    if (data && data.quotes) {
      // Get exchange rates for both currencies (relative to USD)
      const fromRate = data.quotes[`USD${from}`] || 1;
      const toRate = data.quotes[`USD${to}`] || 1;

      // Convert: (amount / fromRate) * toRate
      const result = (amount / fromRate) * toRate;
      setConvertedAmount(result);
    }
  }

  /**
   * Swaps the 'from' and 'to' currencies and their respective amounts
   * Useful for quick reverse conversion
   */
  function swap() {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="w-full">
        {/* Main converter container with backdrop blur and semi-transparent background */}
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          {/* App title */}
          <h1 className="text-center text-2xl font-bold mb-4 text-gray-800">
            Currency Converter
          </h1>

          {/* Form wrapper to prevent page refresh on submit */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {/* From Currency Input Card */}
            <div className="w-full mb-1">
              <CurrencyCard
                label={from}
                onAmountChange={(value) => {
                  setAmount(value);
                }}
                onCurrencyChange={(value) => {
                  setFrom(value);
                }}
                amount={amount}
                selectCurrency={from}
                isAmountDisabled={false}
                isCurrencyDisabled={false}
                className=""
              />
            </div>

            {/* Swap Button Container */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-700 transition-colors"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            {/* To Currency Output Card */}
            <div className="w-full mt-1 mb-4">
              <CurrencyCard
                label={to}
                onCurrencyChange={(value) => {
                  setTo(value);
                }}
                amount={convertedAmount}
                selectCurrency={to}
                isAmountDisabled={true} // Disable input as this is output only
                isCurrencyDisabled={false}
                className=""
              />
            </div>

            {/* Convert Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              onClick={calculateConvertedAmount}
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;

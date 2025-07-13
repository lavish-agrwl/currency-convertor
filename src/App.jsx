import { useState } from "react";
import CurrencyCard from "./components/CurrencyCard";
import useCurrency from "./hooks/useCurrency";

const App = () => {
  let [amount, setAmount] = useState(0);
  let [convertedAmount, setConvertedAmount] = useState(0);
  let [from, setFrom] = useState("USD");
  let [to, setTo] = useState("INR");

  const data = useCurrency();

  function calculateConvertedAmount() {
    if (data && data.quotes) {
      const fromRate = data.quotes[`USD${from}`] || 1;
      const toRate = data.quotes[`USD${to}`] || 1;
      const result = (amount / fromRate) * toRate;
      setConvertedAmount(result);
    }
  }

  function swap() {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
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
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <CurrencyCard
                label={to}
                onCurrencyChange={(value) => {
                  setTo(value);
                }}
                amount={convertedAmount}
                selectCurrency={to}
                isAmountDisabled={true}
                isCurrencyDisabled={false}
                className=""
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
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

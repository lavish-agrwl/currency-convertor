import { useState } from "react";
import { currencyOptions } from "./currencyOptions";

/**
 * CurrencyCard Component
 * Reusable component for currency input/output with currency selection and search
 */
const CurrencyCard = ({
  label,
  onAmountChange,
  onCurrencyChange,
  amount,
  selectCurrency = "USD",
  isAmountDisabled = false,
  isCurrencyDisabled = false,
  className = "",
}) => {
  // State for search input
  const [search, setSearch] = useState("");
  // Dropdown open state for custom select
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Filter currency options based on search input
  const filteredOptions = currencyOptions.filter((cur) =>
    cur.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`bg-white p-4 rounded-lg text-sm flex ${className}`}>
      {/* Amount Input Section */}
      <div className="w-1/2">
        <label className="font-medium mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={isAmountDisabled}
        />
      </div>
      {/* Combined Searchable Dropdown for Currency Selection */}
      <div className="w-1/2 flex flex-wrap justify-end text-right relative">
        <p className="font-medium mb-3 w-full">Currency Type</p>
        <input
          type="text"
          className="rounded-lg px-4 py-1 mb-2 w-full bg-gray-100 outline-none"
          placeholder="Search or select currency"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          disabled={isCurrencyDisabled}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
        />
        {/* Dropdown list for filtered options */}
        {dropdownOpen && filteredOptions.length > 0 && (
          <ul className="absolute z-10 top-16 left-0 w-full max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg">
            {filteredOptions.map((cur) => (
              <li
                key={cur}
                className={`px-3 py-2 cursor-pointer hover:bg-blue-100 text-left ${
                  cur === selectCurrency ? "bg-blue-50 font-bold" : ""
                }`}
                onMouseDown={() => {
                  onCurrencyChange && onCurrencyChange(cur);
                  setSearch(cur);
                  setDropdownOpen(false);
                }}
              >
                {cur}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CurrencyCard;

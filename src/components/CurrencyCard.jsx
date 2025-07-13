/**
 * List of supported currency codes for the currency converter
 * Based on ISO 4217 standard currency codes
 */
const currencyOptions = [
  "AED",
  "AFN",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "BTC",
  "BTN",
  "BWP",
  "BYN",
  "BYR",
  "BZD",
  "CAD",
  "CDF",
  "CHF",
  "CLF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CUC",
  "CUP",
  "CVE",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EEK",
  "EGP",
  "ERN",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "GBP",
  "GEL",
  "GGP",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "IMP",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JEP",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KMF",
  "KPW",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LTL",
  "LVL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRO",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SHP",
  "SLL",
  "SOS",
  "SRD",
  "STD",
  "SVC",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "USD",
  "UYU",
  "UZS",
  "VEF",
  "VND",
  "VUV",
  "WST",
  "XAF",
  "XAG",
  "XAU",
  "XCD",
  "XDR",
  "XOF",
  "XPF",
  "YER",
  "ZAR",
  "ZMK",
  "ZMW",
  "ZWL",
];

/**
 * CurrencyCard Component
 * Reusable component for currency input/output with currency selection
 *
 * @param {Object} props - Component properties
 * @param {string} props.label - Label displayed for the currency card
 * @param {function} props.onAmountChange - Callback when amount value changes
 * @param {function} props.onCurrencyChange - Callback when currency selection changes
 * @param {number} props.amount - Current amount value
 * @param {string} props.selectCurrency - Currently selected currency code
 * @param {boolean} props.isAmountDisabled - Whether amount input is disabled
 * @param {boolean} props.isCurrencyDisabled - Whether currency selection is disabled
 * @param {string} props.className - Additional CSS classes
 */

const CurrencyCard = ({
  label,
  onAmountChange,
  onCurrencyChange,
  amount,
  selectCurrency = "usd",
  isAmountDisabled = false,
  isCurrencyDisabled = false,
  className = "",
}) => {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      {/* Amount Input Section */}
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => {
            // Call the onChange callback if provided, converting string to number
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
          disabled={isAmountDisabled}
        />
      </div>

      {/* Currency Selection Section */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => {
            // Call the onChange callback if provided
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={isCurrencyDisabled}
        >
          {/* Map through all available currency options */}
          {currencyOptions.map((cur) => (
            <option value={cur} key={cur}>
              {cur}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyCard;

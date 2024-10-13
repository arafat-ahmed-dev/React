import React, { useState } from "react";
import InputBox from "./Component/Input";
import CurrencyConverterImage from "/assets/Currency-Converter.jpeg";
import UseCurrencyInfo from "./CustomHook/UseCurrencyInfo";

function App() {
  const [store, setStore] = useState(0);
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("BDT");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const Currency = UseCurrencyInfo(from);
  const countrys = Currency.conversion_rates || {};
  const options = Object.keys(countrys);

  const convert = () => {
    const rate = Currency.conversion_rates[to.toUpperCase()];
    const converted = (amount * rate).toFixed(2);
    setConvertedAmount(converted);

  };
  const swapLabel = () => {
    setFrom(to);
    setTo(from);
  };
  
  
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${CurrencyConverterImage}')`,
      }}
    >
      <div className="w-full min-w-12 px-3">
        <div
          className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm 
              bg-white/30"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                currencyOptions={options}
                onCurrencyChange={(Currency) => setFrom(Currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrencey={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={swapLabel}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md
                bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                currencyOptions={options}
                amountDisable={true}
                amount={convertedAmount}
                onCurrencyChange={(Currency) => setTo(Currency)}
                selectCurrencey={to}
              />
            </div>
            <button
              onClick={convert}
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

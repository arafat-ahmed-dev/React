import React, { useId } from "react";
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrencey,
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputID = useId();

  return (
    <div className={`w-full bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputID}
          className="text-black mb-2 inline-block text-3xl"
        >
          {label}
        </label>
        <input
          disabled={amountDisable}
          id={amountInputID}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          value={amount}
          className="outline-none w-full bg-transparent py-1.5 text-black text-[20px]"
          type="number"
          placeholder="Amount"
        />
      </div>
      <div className="w-1/2 flex flex-wrap items-center justify-end text-right">
        <select
          value={selectCurrencey}
          className="rounded-lg px-2 h-fit py-2 bg-gray-100 cursor-pointer outline-none"
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((item, index) => {
            return (
              <option value={item} key={index} className="text-2xl text-black">
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

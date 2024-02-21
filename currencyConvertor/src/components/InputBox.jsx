import React, { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = ""
}) {

  const amountInputId = useId()
  return (
    <div className={` bg-white p-3 rounded-lg text-sm flex ${className}`} >
      <div className="w-1/2">
        <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block ">
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex fex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="rounded-lg py-1 px-1 bg-gray-100 cursor-pointer outline-none"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}

        </select>
      </div>
    </div >
  )
}

export default InputBox
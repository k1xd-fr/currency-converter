import React from "react";
import "./App.css";

interface CurrencyRowProps {
  currencyOptions: string[];
  selectCurrency: string;
  onChangeCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  amount: number;
}

export default function CurencyRow({
  currencyOptions,
  selectCurrency,
  onChangeCurrency,
  onChangeAmount,
  amount,
}: CurrencyRowProps) {
  return (
    <div className="currency-row">
      <input
        className="currency-input"
        type="number"
        value={amount}
        onChange={onChangeAmount}
      />
      <select
        className="currency-selector"
        value={selectCurrency}
        onChange={onChangeCurrency}
      >
        {currencyOptions.map((options) => (
          <option key={options} value={options}>
            {options}
          </option>
        ))}
      </select>
    </div>
  );
}

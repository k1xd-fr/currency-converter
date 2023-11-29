import { useEffect, useState } from "react";
import axios from "axios";
import CurencyRow from "./CurencyRow";
import "./App.css";

const BASE_GET_ALL_URL =
  "https://api.fastforex.io/fetch-all?api_key=e973a46489-27dcffa04b-s4vf7y";
const BASE_CONVERT_URL =
  "https://api.fastforex.io/convert?api_key=e973a46489-27dcffa04b-s4vf7y";

const App: React.FC = () => {
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string>("");
  const [toCurrency, setToCurrency] = useState<string>("");
  const [exchangeRate, setExchangeRate] = useState<number>(1);
  const [amount, setAmount] = useState<number>(1);
  const [amountInFromCurrency, setAmountInFromCurrency] =
    useState<boolean>(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    axios.get(BASE_GET_ALL_URL).then((response) => {
      const data = response.data;
      const firstCurrency = Object.keys(data.results)[0];
      setCurrencyOptions([data.base, ...Object.keys(data.results)]);
      setFromCurrency(data.base);
      setToCurrency(firstCurrency);
      setExchangeRate(data.results[firstCurrency]);
    });
  }, []);

  useEffect(() => {
    if (fromCurrency !== "" && toCurrency !== "") {
      axios
        .get(
          `${BASE_CONVERT_URL}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
        )
        .then((response) => setExchangeRate(response.data.result[toCurrency]));
    }
  }, [fromCurrency, toCurrency, amount]);

  function handleFromAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAmount(+e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAmount(+e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <div className="container">
      <h1>Convert</h1>
      <div className="row-container">
        <CurencyRow
          currencyOptions={currencyOptions}
          selectCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
        />
        <div className="equals">=</div>
        <CurencyRow
          currencyOptions={currencyOptions}
          selectCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
        />
      </div>
    </div>
  );
};

export default App;

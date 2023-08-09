import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencies } from "./redux/asyncThunks";
import { Navbar, MarketInfoHeader, CurrencyCard } from "./components";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { currencies } = useSelector((state) => state.currenciesReducer);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(getCurrencies(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <div className="App">
      <Navbar />
      <MarketInfoHeader />
      <section className="currencies-container">
        <table className="currencies-table">
          <thead>
            <tr className="currency-card table-head">
              <td className="currency-type">Rank</td>
              <td className="currency-type currency-name-heading">Name</td>
              <td className="currency-type">Price</td>
              <td className="currency-type">Market Cap</td>
              <td className="currency-type">VWAP (24Hr)</td>
              <td className="currency-type">Supply</td>
              <td className="currency-type">Volume (24Hr)</td>
              <td className="currency-type">Change (24Hr)</td>
            </tr>
          </thead>
          <tbody>
            {currencies.map((currency) => (
              <CurrencyCard key={currency.id} {...currency} />
            ))}
          </tbody>
        </table>
        <button
          className="btn-primary btn-page"
          onClick={() => setPageNumber((prev) => prev + 1)}
        >
          View More
        </button>
      </section>
    </div>
  );
}

export default App;

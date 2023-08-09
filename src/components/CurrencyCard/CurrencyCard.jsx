import numeral from "numeral";
import { getChangeIn24Hr } from "../../utils";
import "./CurrencyCard.css";

const CurrencyCard = ({
  rank,
  name,
  symbol,
  priceUsd,
  marketCapUsd,
  vwap24Hr,
  supply,
  volumeUsd24Hr,
  changePercent24Hr,
}) => {
  const marketCap = numeral(Number(marketCapUsd)).format("($0.00a)");
  const vWap = numeral(Number(vwap24Hr)).format("$0,0.00");
  const price = numeral(Number(priceUsd)).format("$0,0.00");
  const supplyCurr = numeral(Number(supply)).format("($0.00a)");
  const volume = numeral(Number(volumeUsd24Hr)).format("($0.00a)");

  return (
    <tr className="currency-card">
      <td className="currency-type">{rank}</td>
      <td className="currency-type currency-name-img">
        <img
          src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
          alt="eth"
          className="currency-img"
        />
        <div className="currency-name">
          <span>{name}</span>
          <span>{symbol}</span>
        </div>
      </td>
      <td className="currency-type">{price}</td>
      <td className="currency-type">{marketCap}</td>
      <td className="currency-type">{vWap}</td>
      <td className="currency-type">{supplyCurr}</td>
      <td className="currency-type">{volume}</td>
      <td className="currency-type">{getChangeIn24Hr(changePercent24Hr)}</td>
    </tr>
  );
};

export { CurrencyCard };

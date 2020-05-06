import React from "react";
import Chart from "./Chart";
import { Route } from "react-router-dom"

const Charts = ({ coinData }) => {
  return (
    <div className="charts">
      {coinData.map(coin => (
        <Route path={`/${coin.id}`}>
          <div className="chart__container" key={coin.name}>
            <h2 className="coin__title">{coin.name}</h2>
            <h4 className="coin__symbol">{coin.symbol}</h4>
            <div className="coin__logo">
              <img src={coin.image} height="40" alt={coin.name} />
            </div>
            <Chart sparklineData={coin.sparkline_in_7d.price} />
          </div>
        </Route>
      ))}
    </div>
  );
};
export default Charts;

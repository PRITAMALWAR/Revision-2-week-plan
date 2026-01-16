import { useEffect, useState } from "react";

const initialStocks = [
  { id: 1, name: "AAPL", price: 150 },
  { id: 2, name: "GOOG", price: 2800 },
  { id: 3, name: "MSFT", price: 310 },
  { id: 4, name: "AMZN", price: 3400 },
  { id: 5, name: "TSLA", price: 900 }
];

function StockTicker() {
  const [stocks, setStocks] = useState(initialStocks);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setStocks((prevStocks) =>
          prevStocks.map((stock) => {
            const change = (Math.random() - 0.5).toFixed(2);
            const newPrice = +(stock.price + Number(change)).toFixed(2);

            return {
              ...stock,
              previousPrice: stock.price,
              price: newPrice
            };
          })
        );
      }, 2000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div style={{ width: "300px", margin: "40px auto" }}>
      <h2>Stock Price Ticker</h2>

      {stocks.map((stock) => {
        const diff = stock.price - (stock.previousPrice ?? stock.price);
        const percentChange = stock.previousPrice
          ? ((diff / stock.previousPrice) * 100).toFixed(2)
          : "0.00";

        return (
          <div
            key={stock.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: diff > 0 ? "green" : diff < 0 ? "red" : "black"
            }}
          >
            <span>{stock.name}</span>
            <span>
              ${stock.price} ({percentChange}%)
            </span>
          </div>
        );
      })}

      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Stop Updates" : "Start Updates"}
      </button>
    </div>
  );
}

export default StockTicker;

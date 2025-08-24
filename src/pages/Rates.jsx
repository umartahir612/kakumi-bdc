import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./Rates.css";

const rates = [
  { currency: "USD", buy: 1540, sell: 1550 },
  { currency: "GBP", buy: 2050, sell: 2080 },
  { currency: "EUR", buy: 1760, sell: 1790 },
  { currency: "CFA", buy: 2600, sell: 2640 },
];

const historyData = [
  { day: "Mon", usd: 1550 },
  { day: "Tue", usd: 1552 },
  { day: "Wed", usd: 1548 },
  { day: "Thu", usd: 1545 },
  { day: "Fri", usd: 1543 },
  { day: "Sat", usd: 1540 },
  { day: "Sun", usd: 1547 },
];

export default function RatePage() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const convertToNGN = () => {
    const usdRate = rates.find(r => r.currency === "USD")?.sell || 0;
    setResult(amount * usdRate);
  };

  return (
    <div className="rate-page">
      {/* Banner */}
      <div className="rate-banner">
        📢 Today’s market rate: 1 USD = ₦1540
      </div>

      {/* Rate Table */}
      <table className="rate-table">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Buy</th>
            <th>Sell</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((r, i) => (
            <tr key={i}>
              <td>{r.currency}</td>
              <td className="buy">₦{r.buy}</td>
              <td className="sell">₦{r.sell}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Converter */}
      <div className="converter-box">
        <h2>🔄 Quick Converter</h2>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Enter USD amount"
        />
        <button onClick={convertToNGN}>Convert to NGN</button>
        {result !== null && (
          <p>💵 {amount} USD = ₦{result.toLocaleString()}</p>
        )}
      </div>

      {/* Chart */}
      <div className="chart-box">
        <h2>📊 USD/NGN Trend (7 Days)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={historyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="usd" stroke="#2563eb" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

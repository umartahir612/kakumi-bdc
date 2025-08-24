import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./Services.css";

const Services = () => {
  const [rates, setRates] = useState({ USD: 0, GBP: 0, EUR: 0 });
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState("USD");
  const [converted, setConverted] = useState(0);
  const [history, setHistory] = useState([]);

  // Fetch live rates
  useEffect(() => {
    fetch("https://api.exchangerate.host/latest?base=USD&symbols=NGN,GBP,EUR")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.rates) {
          setRates({
            USD: data.rates.NGN.toFixed(2),
            GBP: (data.rates.NGN / data.rates.GBP).toFixed(2),
            EUR: (data.rates.NGN / data.rates.EUR).toFixed(2),
          });
        }
      })
      .catch((err) => console.error("Error fetching rates:", err));
  }, []);

  // Conversion
  useEffect(() => {
    if (rates[currency]) {
      setConverted((amount * rates[currency]).toFixed(2));
    }
  }, [amount, currency, rates]);

  // Fetch history (last 7 days USD/NGN)
  useEffect(() => {
    const today = new Date();
    const past = new Date();
    past.setDate(today.getDate() - 7);

    const start = past.toISOString().split("T")[0];
    const end = today.toISOString().split("T")[0];

    fetch(
      `https://api.exchangerate.host/timeseries?start_date=${start}&end_date=${end}&base=USD&symbols=NGN`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.rates) {
          const chartData = Object.keys(data.rates).map((date) => ({
            date,
            rate: data.rates[date].NGN,
          }));
          setHistory(chartData);
        }
      })
      .catch((err) => console.error("Error fetching history:", err));
  }, []);

  return (
    <div className="services-page">
      <h1 className="title">Our Services</h1>
      <p className="intro">
        At <b>KAKUMI BDC LTD</b>, we provide trusted and secure currency
        exchange services for individuals and businesses in Abuja.
      </p>

      {/* Rates + Converter Side by Side */}
      <div className="top-section">
        <div className="card">
          <h2>💱 Live Exchange Rates (NGN)</h2>
          <div className="rates-grid">
            <div className="rate-card">
              <h3>USD → NGN</h3>
              <p>{rates.USD || "..."}</p>
            </div>
            <div className="rate-card">
              <h3>GBP → NGN</h3>
              <p>{rates.GBP || "..."}</p>
            </div>
            <div className="rate-card">
              <h3>EUR → NGN</h3>
              <p>{rates.EUR || "..."}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>🔢 Currency Converter</h2>
          <div className="converter-box">
            <input
              type="number"
              value={amount}
              min="1"
              onChange={(e) => setAmount(e.target.value)}
            />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <p className="result">
            {amount} {currency} = <b>{converted} NGN</b>
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="card chart-container">
        <h2>📊 7-Day USD/NGN Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={history}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="#004080"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Services Grid */}
      <h2 className="section-title">Our Core Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <img
            src="https://img.icons8.com/color/96/us-dollar-circled.png"
            alt="Currency Exchange"
          />
          <h3>Currency Exchange</h3>
          <p>Buy and sell major world currencies at competitive rates.</p>
        </div>
        <div className="service-card">
          <img
            src="https://img.icons8.com/color/96/money-transfer.png"
            alt="Funds Transfer"
          />
          <h3>Funds Transfer</h3>
          <p>Secure international and local fund transfers.</p>
        </div>
        <div className="service-card">
          <img
            src="https://img.icons8.com/color/96/handshake.png"
            alt="Corporate Services"
          />
          <h3>Corporate Forex Solutions</h3>
          <p>Tailored forex services for importers & businesses.</p>
        </div>
        <div className="service-card">
          <img
            src="https://img.icons8.com/color/96/lock.png"
            alt="Secure Transactions"
          />
          <h3>Secure Transactions</h3>
          <p>Strict security measures to keep your money safe.</p>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h2>Need a Currency Exchange Today?</h2>
        <a
          href="https://wa.me/2347064819086"
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 Contact Us on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Services;

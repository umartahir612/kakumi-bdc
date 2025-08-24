import React from 'react';

const rates = [
  { currency: 'USD', buy: 1500, sell: 1520 },
  { currency: 'GBP', buy: 1900, sell: 1925 },
  { currency: 'EUR', buy: 1600, sell: 1620 }
];

function RateTable() {
  return (
    <table className="table table-bordered">
      <thead className="table-dark">
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
            <td>{r.buy}</td>
            <td>{r.sell}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RateTable;

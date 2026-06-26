"use client";

type Trade = {
  ticket: number;
  symbol: string;
  type: number;
  volume: number;
  price: number;
  profit: number;
  time: number;
};

type Props = {
  trades: Trade[];
};

export default function TradesTable({ trades }: Props) {
  return (
    <div
      style={{
        marginTop: "40px",
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Recent Trades</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th align="left">Date</th>
            <th align="left">Time</th>
            <th align="left">Symbol</th>
            <th align="left">Type</th>
            <th align="left">Volume</th>
            <th align="left">Price</th>
            <th align="left">Profit</th>
          </tr>
        </thead>

        <tbody>
          {trades.map((trade) => {
            const date = new Date(trade.time * 1000);

            return (
              <tr key={trade.ticket}>
                <td>{date.toLocaleDateString()}</td>

                <td>{date.toLocaleTimeString()}</td>

                <td>{trade.symbol}</td>

                <td>{trade.type === 0 ? "Buy" : "Sell"}</td>

                <td>{trade.volume}</td>

                <td>{trade.price}</td>

                <td
                  style={{
                    color: trade.profit >= 0 ? "#22c55e" : "#ef4444",
                    fontWeight: "bold",
                  }}
                >
                  {trade.profit.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
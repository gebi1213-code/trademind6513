"use client";

import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import StatsCard from "./components/StatsCard";
import TradesTable from "./components/TradesTable";

type Trade = {
  ticket: number;
  symbol: string;
  type: number;
  volume: number;
  price: number;
  profit: number;
  time: number;
};

export default function Home() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [tradeType, setTradeType] = useState("all");

  const loadTrades = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/trades");
      const data = await res.json();
      setTrades(data);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadTrades();
  }, []);

  const filteredTrades = trades.filter((trade) => {
    const symbolMatch = trade.symbol
      .toLowerCase()
      .includes(search.toLowerCase());

    const typeMatch =
      tradeType === "all" ||
      (tradeType === "buy" && trade.type === 0) ||
      (tradeType === "sell" && trade.type !== 0);

    return symbolMatch && typeMatch;
  });

  const totalTrades = filteredTrades.length;

  const totalProfit = filteredTrades.reduce(
    (sum, trade) => sum + trade.profit,
    0
  );

  const wins = filteredTrades.filter(
    (trade) => trade.profit > 0
  ).length;

  const winRate =
    totalTrades === 0
      ? "0"
      : ((wins / totalTrades) * 100).toFixed(1);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        <h1 style={{ marginBottom: "30px" }}>
          Dashboard
        </h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <StatsCard
            title="Total Trades"
            value={totalTrades.toString()}
          />

          <StatsCard
            title="Win Rate"
            value={`${winRate}%`}
          />

          <StatsCard
            title="Profit"
            value={`$${totalProfit.toFixed(2)}`}
          />
        </div>

        <input
          type="text"
          placeholder="Search Symbol..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "300px",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "1px solid #334155",
            background: "#1e293b",
            color: "white",
            fontSize: "16px",
          }}
        />

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={() => setTradeType("all")}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              background:
                tradeType === "all"
                  ? "#2563eb"
                  : "#1e293b",
              color: "white",
            }}
          >
            All
          </button>

          <button
            onClick={() => setTradeType("buy")}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              background:
                tradeType === "buy"
                  ? "#22c55e"
                  : "#1e293b",
              color: "white",
            }}
          >
            Buy
          </button>

          <button
            onClick={() => setTradeType("sell")}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              background:
                tradeType === "sell"
                  ? "#ef4444"
                  : "#1e293b",
              color: "white",
            }}
          >
            Sell
          </button>
        </div>

        <TradesTable trades={filteredTrades} />

        <button
          onClick={loadTrades}
          style={{
            marginTop: "30px",
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "15px 30px",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {loading
            ? "Importing..."
            : "Import MT5 Trades"}
        </button>
      </main>
    </div>
  );
}
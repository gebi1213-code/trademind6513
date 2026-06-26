export default function Sidebar() {
  return (
    <aside
      style={{
        width: "240px",
        background: "#111827",
        padding: "20px",
        borderRight: "1px solid #1f2937",
        color: "white",
      }}
    >
      <h2>📈 TradeMind</h2>

      <hr style={{ margin: "20px 0", borderColor: "#374151" }} />

      <p>🏠 Dashboard</p>
      <p>📊 Trades</p>
      <p>📝 Journal</p>
      <p>📸 Screenshots</p>
      <p>⚙️ Settings</p>
    </aside>
  );
}
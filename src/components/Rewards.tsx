export default function Rewards({ onContinue }: { onContinue(): void }) {
  return (
    <div style={{ 
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
      minHeight: "calc(100vh - 80px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }}>
      <div className="card celebration" style={{ 
        textAlign: "center", 
        padding: 50,
        maxWidth: 500,
        transform: "scale(1)"
      }}>
        <div style={{ fontSize: 80, marginBottom: 20 }}>🎉</div>
        <h1 style={{ 
          fontSize: 36, 
          marginBottom: 10,
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          Amazing Work!
        </h1>
        <p style={{ fontSize: 18, color: "#64748b", marginBottom: 20 }}>
          You earned <strong style={{ color: "#f59e0b" }}>+50 XP</strong> and unlocked progress!
        </p>
        <div style={{ marginBottom: 30 }}>
          <div style={{ fontSize: 48 }}>⭐ 🏆 ⚡</div>
        </div>
        <button 
          className="accent" 
          onClick={onContinue}
          style={{ fontSize: 18, padding: "16px 32px" }}
        >
          Continue Learning 🚀
        </button>
      </div>
    </div>
  );
}

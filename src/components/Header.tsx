export default function Header({ onParent }: { onParent(): void }) {
  return (
    <header style={{ 
      padding: "12px 16px", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between",
      background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
      backdropFilter: "blur(10px)",
      borderBottom: "2px solid rgba(99,102,241,0.1)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      gap: 12,
      flexWrap: "wrap"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div className="mascot" style={{ fontSize: "clamp(24px, 6vw, 28px)" }}>🐍</div>
        <div>
          <div style={{ 
            fontWeight: 900, 
            fontSize: "clamp(18px, 4.5vw, 24px)", 
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)", 
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent" 
          }}>
            KidsPython
          </div>
          <div style={{ fontSize: "clamp(10px, 2.5vw, 13px)", color: "#64748b", fontWeight: 600 }}>
            Let's Learn Python! ✨
          </div>
        </div>
      </div>
      <button className="secondary" onClick={onParent} style={{ fontSize: 12, padding: "8px 12px" }}>
        👨‍👩‍👧‍👦 Parent
      </button>
    </header>
  );
}

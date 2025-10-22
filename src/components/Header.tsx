import React from "react";

export default function Header({ onParent }: { onParent(): void }) {
  return (
    <header style={{ 
      padding: "16px 24px", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between",
      background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
      backdropFilter: "blur(10px)",
      borderBottom: "2px solid rgba(99,102,241,0.1)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div className="mascot">🐍</div>
        <div>
          <div style={{ fontWeight: 900, fontSize: 24, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            KidsPython
          </div>
          <div style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}>Let's Learn Python Together! ✨</div>
        </div>
      </div>
      <button className="secondary" onClick={onParent} style={{ fontSize: 14 }}>
        👨‍👩‍👧‍👦 Parent Login
      </button>
    </header>
  );
}

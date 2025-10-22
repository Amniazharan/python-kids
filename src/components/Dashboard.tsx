import { defaultProgress } from "../lib/gamification";
import { lessons } from "../lib/lessons";

type Props = {
onStartLesson(id: string): void;
progress?: ReturnType<typeof defaultProgress>;
};

export default function Dashboard({ onStartLesson, progress }: Props) {
const p = progress ?? defaultProgress();

const phases = [
{ num: 1, title: "Python Basics", emoji: "🐍", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
{ num: 2, title: "Turtle Graphics", emoji: "🐢", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
{ num: 3, title: "Logic & Decisions", emoji: "🤔", gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
{ num: 4, title: "Functions & Power", emoji: "⚡", gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
{ num: 5, title: "Big Projects", emoji: "🚀", gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
];

return (
<div style={{ position: "relative", background: "var(--bg)", minHeight: "100vh", padding: "16px", paddingBottom: 40 }}>
{/* Built-by badge (top-right) */}
<div
style={{
position: "absolute",
top: 10,
right: 12,
zIndex: 50,
display: "inline-flex",
alignItems: "center",
gap: 8,
padding: "6px 10px",
borderRadius: 999,
fontSize: 11,
fontWeight: 700,
color: "#334155",
background: "rgba(255,255,255,0.78)",
backdropFilter: "blur(8px)",
border: "1px solid rgba(148,163,184,0.35)",
boxShadow: "0 6px 18px rgba(2,6,23,0.08)"
}}
title="Made with ❤️"
>
<span
style={{
width: 8,
height: 8,
borderRadius: 999,
background: "linear-gradient(135deg,#16a34a,#22c55e)",
boxShadow: "0 0 0 3px rgba(34,197,94,0.2)"
}}
/>
<span style={{ letterSpacing: 0.3 }}>Built by</span>
<span
style={{
background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
WebkitBackgroundClip: "text",
WebkitTextFillColor: "transparent",
fontWeight: 900
}}
>
Amni Azharan
</span>
</div>
  <div className="card celebration" style={{ marginBottom: 16 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
      <div style={{ fontSize: "clamp(40px, 10vw, 60px)" }}>🧒</div>
      <div style={{ flex: 1 }}>
        <div style={{ 
          fontWeight: 900, 
          fontSize: "clamp(20px, 5vw, 28px)", 
          background: "linear-gradient(135deg, #667eea, #764ba2)", 
          WebkitBackgroundClip: "text", 
          WebkitTextFillColor: "transparent" 
        }}>
          Nik Toha 
        </div>
        <div style={{ fontSize: "clamp(12px, 3vw, 16px)", marginTop: 4, display: "flex", flexWrap: "wrap", gap: 6 }}>
          <span style={{ background: "#fef3c7", padding: "4px 8px", borderRadius: 8, fontSize: "clamp(11px, 2.5vw, 14px)" }}>
            ⚡ {p.xp} XP
          </span>
          <span style={{ background: "#dbeafe", padding: "4px 8px", borderRadius: 8, fontSize: "clamp(11px, 2.5vw, 14px)" }}>
            🏆 Lvl {p.level}
          </span>
          <span style={{ background: "#fee2e2", padding: "4px 8px", borderRadius: 8, fontSize: "clamp(11px, 2.5vw, 14px)" }}>
            🔥 {p.streak}d
          </span>
        </div>
      </div>
    </div>
  </div>

  {phases.map(phase => {
    const phaseLessons = lessons.filter(l => l.phase === phase.num);
    return (
      <div key={phase.num} style={{ marginBottom: 20 }}>
        <div className="phase-header" style={{ background: phase.gradient }}>
          <div style={{ fontSize: "clamp(24px, 6vw, 32px)", marginBottom: 4 }}>{phase.emoji}</div>
          <div style={{ fontSize: "clamp(16px, 4vw, 22px)", fontWeight: 900 }}>
            Phase {phase.num}: {phase.title}
          </div>
          <div style={{ fontSize: "clamp(11px, 2.5vw, 14px)", opacity: 0.9, marginTop: 4 }}>
            {phaseLessons.length} lessons
          </div>
        </div>

        <div className="grid" style={{ 
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
          gap: 12 
        }}>
          {phaseLessons.map(ls => (
            <div key={ls.id} className="lesson-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 8 }}>
                <div style={{ 
                  background: phase.gradient,
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: 8,
                  fontWeight: 800,
                  fontSize: 12
                }}>
                  Week {ls.week}
                </div>
                <div style={{ fontSize: 20 }}>{phase.emoji}</div>
              </div>
              
              <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 4, color: "#1e293b" }}>
                {ls.title}
              </div>
              
              <div style={{ fontSize: 12, color: "#64748b", marginBottom: 12, lineHeight: 1.4 }}>
                {ls.instructions}
              </div>
              
              <button 
                onClick={() => onStartLesson(ls.id)} 
                style={{ width: "100%", fontSize: 13 }}
              >
                Start →
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  })}

  <div className="card" style={{ marginTop: 20 }}>
    <h3 style={{ marginBottom: 12, fontSize: "clamp(16px, 4vw, 22px)" }}>🏆 Badges</h3>
    <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 140px), 1fr))" }}>
      {p.badges.map((b, i) => (
        <div key={i} className="card lesson-card" style={{ textAlign: "center", padding: 14 }}>
          <div style={{ fontSize: "clamp(32px, 8vw, 48px)", marginBottom: 6 }}>{b.earned ? "🏆" : "🔒"}</div>
          <div style={{ fontWeight: 800, fontSize: 13, marginBottom: 2 }}>{b.name}</div>
          <div style={{ 
            fontSize: 11, 
            color: b.earned ? "#10b981" : "#64748b",
            fontWeight: 600
          }}>
            {b.earned ? "✅ Earned" : "🔒 Locked"}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
);
}

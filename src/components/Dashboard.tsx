import React from "react";
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
    <div style={{ background: "var(--bg)", minHeight: "calc(100vh - 80px)", padding: 20 }}>
      <div className="card celebration" style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ fontSize: 60 }}>🧒</div>
            <div>
              <div style={{ fontWeight: 900, fontSize: 28, background: "linear-gradient(135deg, #667eea, #764ba2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Alex
              </div>
              <div style={{ fontSize: 16, marginTop: 4, color: "#64748b", fontWeight: 600 }}>
                <span style={{ background: "#fef3c7", padding: "4px 10px", borderRadius: 8, marginRight: 8 }}>
                  ⚡ {p.xp} XP
                </span>
                <span style={{ background: "#dbeafe", padding: "4px 10px", borderRadius: 8, marginRight: 8 }}>
                  🏆 Level {p.level}
                </span>
                <span style={{ background: "#fee2e2", padding: "4px 10px", borderRadius: 8 }}>
                  🔥 {p.streak} Day Streak
                </span>
              </div>
            </div>
          </div>
          <div className="badge" style={{ fontSize: 15, padding: "10px 18px" }}>
            📚 24 Week Journey
          </div>
        </div>
      </div>

      {phases.map(phase => {
        const phaseLessons = lessons.filter(l => l.phase === phase.num);
        return (
          <div key={phase.num} style={{ marginBottom: 24 }}>
            <div className="phase-header" style={{ background: phase.gradient }}>
              <div style={{ fontSize: 32, marginBottom: 6 }}>{phase.emoji}</div>
              <div style={{ fontSize: 22, fontWeight: 900 }}>
                Phase {phase.num}: {phase.title}
              </div>
              <div style={{ fontSize: 14, opacity: 0.9, marginTop: 4 }}>
                {phaseLessons.length} lessons • Complete all to unlock next phase
              </div>
            </div>

            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
              {phaseLessons.map(ls => (
                <div key={ls.id} className="lesson-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 10 }}>
                    <div style={{ 
                      background: phase.gradient,
                      color: "white",
                      padding: "6px 12px",
                      borderRadius: 10,
                      fontWeight: 800,
                      fontSize: 13
                    }}>
                      Week {ls.week}
                    </div>
                    <div style={{ fontSize: 24 }}>{phase.emoji}</div>
                  </div>
                  
                  <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6, color: "#1e293b" }}>
                    {ls.title}
                  </div>
                  
                  <div style={{ fontSize: 13, color: "#64748b", marginBottom: 14 }}>
                    {ls.instructions[0]}
                  </div>
                  
                  <button 
                    onClick={() => onStartLesson(ls.id)} 
                    style={{ width: "100%", fontSize: 14 }}
                  >
                    Start Lesson →
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div className="card" style={{ marginTop: 24 }}>
        <h3 style={{ marginBottom: 16, fontSize: 22 }}>🏆 Your Badge Collection</h3>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
          {p.badges.map((b, i) => (
            <div key={i} className="card lesson-card" style={{ textAlign: "center", padding: 20 }}>
              <div style={{ fontSize: 48, marginBottom: 8 }}>{b.earned ? "🏆" : "🔒"}</div>
              <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{b.name}</div>
              <div style={{ 
                fontSize: 12, 
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

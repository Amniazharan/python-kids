import React, { useMemo, useState, useRef, useEffect } from "react";
import { lessons } from "../lib/lessons";
import { runPython } from "../lib/pyRunner";

export default function CodeLesson({ 
  id, 
  onDone, 
  onBack 
}: { 
  id: string; 
  onDone(xpEarned: number): void;
  onBack(): void;
}) {
  const lesson = useMemo(() => lessons.find(l => l.id === id)!, [id]);
  const [code, setCode] = useState(lesson.codeStarter);
  const [out, setOut] = useState("");
  const [err, setErr] = useState("");
  const [showChallenge, setShowChallenge] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Check if lesson uses turtle
  const usesTurtle = useMemo(() => {
    return code.includes("import turtle") || code.includes("from turtle");
  }, [code]);

  useEffect(() => {
    setShowCanvas(usesTurtle);
  }, [usesTurtle]);

  const run = async () => {
    setIsRunning(true);
    setOut("🔄 Loading Python...");
    setErr("");
    
    try {
      const res = await runPython(code, canvasRef.current);
      setOut(res.stdout || "✅ Code ran successfully! (No output)");
      setErr(res.stderr || "");
      
      if (res.isTurtle) {
        setShowCanvas(true);
      }
    } catch (error) {
      const e = error as Error;
      setOut("");
      setErr("❌ Error: " + (e?.message || String(error)));
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div style={{ background: "var(--bg)", minHeight: "calc(100vh - 80px)" }}>
      <div style={{ padding: 16 }}>
        <button className="back" onClick={onBack} style={{ marginBottom: 16 }}>
          ← Back to Learning
        </button>
      </div>

      <div className="grid" style={{ 
        padding: "0 16px 16px 16px", 
        gridTemplateColumns: showCanvas ? "1fr 1fr 1fr" : "1fr 1.2fr",
        gap: 20 
      }}>
        {/* Instructions Panel */}
        <div className="card" style={{ overflowY: "auto", maxHeight: "82vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div className="badge">Week {lesson.week}</div>
            <div className="badge" style={{ background: "linear-gradient(135deg, #fef3c7, #fde68a)" }}>
              Phase {lesson.phase}
            </div>
          </div>
          
          <h2 style={{ 
            marginTop: 0, 
            marginBottom: 12, 
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: 22
          }}>
            {lesson.title}
          </h2>
          
          <div style={{ 
            background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)", 
            padding: 16, 
            borderRadius: 16, 
            marginBottom: 16,
            border: "2px solid #93c5fd"
          }}>
            <div style={{ fontWeight: 800, marginBottom: 10, fontSize: 14, color: "#1e40af" }}>
              📚 Instructions:
            </div>
            {lesson.instructions.map((line, i) => (
              <div key={i} style={{ margin: "5px 0", fontSize: 13, lineHeight: 1.5 }}>
                {line}
              </div>
            ))}
          </div>

          {lesson.challenge && (
            <div style={{ marginBottom: 16 }}>
              <button 
                className="accent" 
                style={{ width: "100%", fontSize: 14 }}
                onClick={() => setShowChallenge(!showChallenge)}
              >
                {showChallenge ? "🙈 Hide" : "💪 Show"} Challenge
              </button>
              {showChallenge && (
                <div className="celebration" style={{ 
                  background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)", 
                  padding: 14, 
                  borderRadius: 14, 
                  marginTop: 10,
                  border: "2px solid #fbbf24"
                }}>
                  <div style={{ fontWeight: 800, marginBottom: 4, color: "#92400e", fontSize: 13 }}>
                    🎯 Challenge:
                  </div>
                  <div style={{ fontSize: 13, lineHeight: 1.5, color: "#78350f" }}>
                    {lesson.challenge}
                  </div>
                </div>
              )}
            </div>
          )}

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button 
              onClick={run} 
              style={{ flex: 1, minWidth: 120, fontSize: 14 }}
              disabled={isRunning}
            >
              {isRunning ? "⏳ Running..." : "▶ Run Code"}
            </button>
            <button 
              className="secondary" 
              onClick={() => onDone(50)} 
              style={{ flex: 1, minWidth: 120, fontSize: 14 }}
            >
              ✅ Complete
            </button>
          </div>
        </div>

        {/* Code Editor Panel */}
        <div className="card">
          <div style={{ 
            marginBottom: 10, 
            fontWeight: 800, 
            display: "flex", 
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 15
          }}>
            <span>💻 Code Editor</span>
            {usesTurtle && <span style={{ fontSize: 11, color: "#10b981" }}>🐢 Turtle Active</span>}
          </div>
          <textarea
            className="input"
            style={{ 
              height: showCanvas ? 300 : 420, 
              fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
              fontSize: 13,
              lineHeight: 1.5,
              resize: "vertical"
            }}
            value={code}
            onChange={e => setCode(e.target.value)}
            placeholder="Type your Python code here..."
          />
          
          <div style={{ marginTop: 12 }}>
            <div style={{ fontWeight: 800, marginBottom: 8, fontSize: 15 }}>📺 Output</div>
            <div className="output-panel" style={{ minHeight: showCanvas ? 120 : 180 }}>
              <pre style={{ margin: 0, whiteSpace: "pre-wrap", fontSize: 12 }}>
                {out || "👉 Click 'Run Code' to see output..."}
              </pre>
              {err && (
                <pre style={{ color: "#fca5a5", marginTop: 10, whiteSpace: "pre-wrap", fontSize: 12 }}>
                  {err}
                </pre>
              )}
            </div>
          </div>
        </div>

        {/* Turtle Canvas Panel */}
        {showCanvas && (
          <div className="card">
            <div style={{ fontWeight: 800, marginBottom: 12, fontSize: 15 }}>
              🐢 Turtle Graphics
            </div>
            <canvas
              ref={canvasRef}
              width={400}
              height={400}
              style={{
                border: "2px solid #e5e7eb",
                borderRadius: 12,
                background: "white",
                width: "100%",
                height: "auto",
                maxHeight: "600px"
              }}
            />
            <div style={{ fontSize: 11, color: "#64748b", marginTop: 8, textAlign: "center" }}>
              Graphics will appear here when you run turtle code
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

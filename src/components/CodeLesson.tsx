import { useMemo, useState, useRef, useEffect } from "react";
import { lessons } from "../lib/lessons";
import { runPython } from "../lib/pyRunner";
import Calculator from "./Calculator";
import QuizGame from "./QuizGame";
import FireworkViewer from "./FireworkViewer";

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

    // Check if this lesson has special interactive component
  const hasInteractive = ["w21", "w23", "w24"].includes(lesson.id);
  const showCodeEditor = !hasInteractive || lesson.id === "w21" || lesson.id === "w23" || lesson.id === "w24";


  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", paddingBottom: 20 }}>
      <div style={{ padding: "12px 16px" }}>
        <button className="back" onClick={onBack}>
          ← Back
        </button>
      </div>

      {/* Mobile: Stack vertically */}
      <div style={{ padding: "0 16px" }}>
        {/* Instructions */}
        <div className="card" style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
            <div className="badge">Pelajaran {lesson.week}</div>
            <div className="badge" style={{ background: "linear-gradient(135deg, #fef3c7, #fde68a)" }}>
              Phase {lesson.phase}
            </div>
          </div>
          
          <h2 style={{ 
            marginTop: 0, 
            marginBottom: 10, 
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "clamp(18px, 5vw, 22px)"
          }}>
            {lesson.title}
          </h2>
          
          <div style={{ 
            background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)", 
            padding: 12, 
            borderRadius: 12, 
            marginBottom: 12,
            border: "2px solid #93c5fd"
          }}>
            <div style={{ fontWeight: 800, marginBottom: 8, fontSize: 13, color: "#1e40af" }}>
              📚 Instructions:
            </div>
            {lesson.instructions.map((line, i) => (
              <div key={i} style={{ margin: "4px 0", fontSize: 12, lineHeight: 1.5 }}>
                {line}
              </div>
            ))}
          </div>

          {lesson.challenge && (
            <div style={{ marginBottom: 12 }}>
              <button 
                className="accent" 
                style={{ width: "100%", fontSize: 13 }}
                onClick={() => setShowChallenge(!showChallenge)}
              >
                {showChallenge ? "🙈 Hide" : "💪 Show"} Challenge
              </button>
              {showChallenge && (
                <div className="celebration" style={{ 
                  background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)", 
                  padding: 12, 
                  borderRadius: 12, 
                  marginTop: 8,
                  border: "2px solid #fbbf24"
                }}>
                  <div style={{ fontWeight: 800, marginBottom: 4, color: "#92400e", fontSize: 12 }}>
                    🎯 Challenge:
                  </div>
                  <div style={{ fontSize: 12, lineHeight: 1.5, color: "#78350f" }}>
                    {lesson.challenge}
                  </div>
                </div>
              )}
            </div>
          )}

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button 
              onClick={run} 
              style={{ flex: 1, minWidth: "120px", fontSize: 13 }}
              disabled={isRunning || hasInteractive}
            >
              {isRunning ? "⏳ Running..." : hasInteractive ? "📱 Use Interactive" : "▶ Run"}
            </button>
            <button 
              className="secondary" 
              onClick={() => onDone(50)} 
              style={{ flex: 1, minWidth: "120px", fontSize: 13 }}
            >
              ✅ Done
            </button>
          </div>
        </div>

        {/* Code Editor - Hide for interactive lessons */}
        {showCodeEditor && (
          <div className="card" style={{ marginBottom: 16 }}>
            <div style={{ 
              marginBottom: 10, 
              fontWeight: 800, 
              display: "flex", 
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 14
            }}>
              <span>💻 Code Editor</span>
              {usesTurtle && <span style={{ fontSize: 10, color: "#10b981" }}>🐢 Turtle</span>}
            </div>
            <textarea
              className="input"
              style={{ 
                height: 250, 
                fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
                fontSize: 12,
                lineHeight: 1.5,
                resize: "vertical"
              }}
              value={code}
              onChange={e => setCode(e.target.value)}
              placeholder="Type your Python code here..."
            />
          </div>
        )}

                {/* Output - Only show if NOT interactive */}
        {!hasInteractive && (

          <div className="card" style={{ marginBottom: showCanvas ? 16 : 0 }}>
            <div style={{ fontWeight: 800, marginBottom: 8, fontSize: 14 }}>📺 Output</div>
            <div className="output-panel" style={{ minHeight: 120 }}>
              <div style={{ margin: 0, whiteSpace: "pre-wrap", fontFamily: "monospace", fontSize: 11, lineHeight: 1.6 }}>
  {out.split('\n').map((line, i) => (
    <div key={i}>{line || '\u00A0'}</div>
  ))}
  {!out && "👉 Click 'Run' to see output..."}
</div>

              {err && (
                <pre style={{ color: "#fca5a5", marginTop: 10, whiteSpace: "pre-wrap", fontSize: 11 }}>
                  {err}
                </pre>
              )}
            </div>
          </div>
        )}

        {/* Turtle Canvas */}
        {showCanvas && !hasInteractive && (
          <div className="card">
            <div style={{ fontWeight: 800, marginBottom: 10, fontSize: 14 }}>
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
                maxWidth: "400px",
                display: "block",
                margin: "0 auto"
              }}
            />
            <div style={{ fontSize: 10, color: "#64748b", marginTop: 8, textAlign: "center" }}>
              Graphics appear here when you run turtle code
            </div>
          </div>
        )}

        {/* Interactive Components */}
        {lesson.id === "w21" && (
          <div style={{ marginTop: 16 }}>
            <Calculator />
          </div>
        )}

        {lesson.id === "w23" && (
          <div style={{ marginTop: 16 }}>
            <QuizGame />
          </div>
        )}

        {lesson.id === "w24" && (
          <div style={{ marginTop: 16 }}>
            <FireworkViewer />
          </div>
        )}
      </div>
    </div>
  );
}

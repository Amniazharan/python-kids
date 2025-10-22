import { useState } from "react";

const questions = [
  {
    soalan: "Berapa 5 + 3?",
    pilihan: ["6", "7", "8", "9"],
    jawapan: "8",
  },
  {
    soalan: "Apa ibu negara Malaysia?",
    pilihan: ["Penang", "Johor", "Kuala Lumpur", "Melaka"],
    jawapan: "Kuala Lumpur",
  },
  {
    soalan: "Berapa hari dalam seminggu?",
    pilihan: ["5", "6", "7", "8"],
    jawapan: "7",
  },
  {
    soalan: "Apa warna langit?",
    pilihan: ["Merah", "Biru", "Hijau", "Kuning"],
    jawapan: "Biru",
  },
  {
    soalan: "Berapa 10 × 2?",
    pilihan: ["15", "20", "25", "30"],
    jawapan: "20",
  },
];

export default function QuizGame() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (answer: string) => {
    setSelected(answer);
    setShowResult(true);
    if (answer === questions[currentQ].jawapan) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
    setFinished(false);
  };

  if (finished) {
    const percentage = (score / questions.length) * 100;
    return (
      <div className="card" style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <h2>🎯 Quiz Selesai!</h2>
        <div style={{ fontSize: 48, margin: "20px 0" }}>
          {percentage === 100 ? "🏆" : percentage >= 80 ? "⭐" : percentage >= 60 ? "👍" : "💪"}
        </div>
        <h3>
          Score: {score}/{questions.length}
        </h3>
        <p style={{ fontSize: 18, margin: "16px 0" }}>
          {percentage === 100
            ? "PERFECT! Genius!"
            : percentage >= 80
            ? "Excellent!"
            : percentage >= 60
            ? "Good job!"
            : "Keep trying!"}
        </p>
        <button onClick={handleRestart} style={{ marginTop: 16 }}>
          Cuba Lagi
        </button>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="card" style={{ maxWidth: 600, margin: "0 auto" }}>
      <div style={{ marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>
          Soalan {currentQ + 1}/{questions.length}
        </h3>
        <div className="badge">Score: {score}</div>
      </div>

      <div
        style={{
          background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
          padding: 20,
          borderRadius: 16,
          marginBottom: 20,
          border: "2px solid #93c5fd",
        }}
      >
        <h2 style={{ margin: 0, fontSize: 20 }}>{q.soalan}</h2>
      </div>

      <div style={{ display: "grid", gap: 12 }}>
        {q.pilihan.map((pilihan, i) => {
          const isSelected = selected === pilihan;
          const isCorrect = pilihan === q.jawapan;
          const showFeedback = showResult && isSelected;

          return (
            <button
              key={i}
              onClick={() => !showResult && handleAnswer(pilihan)}
              disabled={showResult}
              style={{
                padding: 16,
                fontSize: 16,
                textAlign: "left",
                background: showFeedback
                  ? isCorrect
                    ? "linear-gradient(135deg, #10b981, #059669)"
                    : "linear-gradient(135deg, #ef4444, #dc2626)"
                  : "linear-gradient(135deg, #f8fafc, #ffffff)",
                color: showFeedback ? "white" : "#1e293b",
                border: `2px solid ${showFeedback ? (isCorrect ? "#10b981" : "#ef4444") : "#e2e8f0"}`,
              }}
            >
              {String.fromCharCode(65 + i)}. {pilihan}{" "}
              {showFeedback && (isCorrect ? "✅" : "❌")}
            </button>
          );
        })}
      </div>

      {showResult && (
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <div
            style={{
              padding: 12,
              borderRadius: 12,
              background: selected === q.jawapan ? "#d1fae5" : "#fee2e2",
              marginBottom: 12,
            }}
          >
            {selected === q.jawapan ? (
              <span style={{ color: "#065f46", fontWeight: 700 }}>✅ Betul! Good job!</span>
            ) : (
              <span style={{ color: "#991b1b", fontWeight: 700 }}>
                ❌ Salah! Jawapan: {q.jawapan}
              </span>
            )}
          </div>
          <button onClick={handleNext}>{currentQ < questions.length - 1 ? "Soalan Seterusnya →" : "Lihat Keputusan"}</button>
        </div>
      )}
    </div>
  );
}

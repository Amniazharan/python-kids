import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [previous, setPrevious] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);

  const handleNumber = (num: string) => {
    if (display === "0") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperation = (op: string) => {
    const current = parseFloat(display);
    if (previous === null) {
      setPrevious(current);
    } else if (operation) {
      const result = calculate(previous, current, operation);
      setPrevious(result);
      setDisplay(result.toString());
    }
    setOperation(op);
    setDisplay("0");
  };

  const calculate = (a: number, b: number, op: string): number => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "×":
        return a * b;
      case "÷":
        return b !== 0 ? a / b : 0;
      default:
        return b;
    }
  };

  const handleEquals = () => {
    if (previous !== null && operation) {
      const current = parseFloat(display);
      const result = calculate(previous, current, operation);
      setDisplay(result.toString());
      setPrevious(null);
      setOperation(null);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPrevious(null);
    setOperation(null);
  };

  const handleDelete = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  };

  const buttons = [
    ["7", "8", "9", "÷"],
    ["4", "5", "6", "×"],
    ["1", "2", "3", "-"],
    ["C", "0", "=", "+"],
  ];

  return (
    <div className="card" style={{ maxWidth: 400, margin: "0 auto" }}>
      <h3 style={{ marginBottom: 16, textAlign: "center" }}>🧮 Calculator</h3>
      
      {/* Display */}
      <div
        style={{
          background: "#1e293b",
          color: "#e2e8f0",
          padding: 20,
          borderRadius: 12,
          fontSize: 32,
          fontWeight: 700,
          textAlign: "right",
          fontFamily: "monospace",
          marginBottom: 16,
          minHeight: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {display}
      </div>

      {/* Buttons */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
        {buttons.flat().map((btn, i) => (
          <button
            key={i}
            onClick={() => {
              if (btn === "C") handleClear();
              else if (btn === "=") handleEquals();
              else if (["+", "-", "×", "÷"].includes(btn)) handleOperation(btn);
              else handleNumber(btn);
            }}
            style={{
              padding: "20px 0",
              fontSize: 20,
              fontWeight: 700,
              background:
                btn === "="
                  ? "linear-gradient(135deg, #10b981, #059669)"
                  : btn === "C"
                  ? "linear-gradient(135deg, #ef4444, #dc2626)"
                  : ["+", "-", "×", "÷"].includes(btn)
                  ? "linear-gradient(135deg, #f59e0b, #d97706)"
                  : "linear-gradient(135deg, #6366f1, #4f46e5)",
            }}
          >
            {btn}
          </button>
        ))}
      </div>

      <button
        onClick={handleDelete}
        style={{
          width: "100%",
          marginTop: 10,
          background: "linear-gradient(135deg, #64748b, #475569)",
        }}
      >
        ⌫ Delete
      </button>
    </div>
  );
}

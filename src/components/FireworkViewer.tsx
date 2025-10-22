import { useRef, useEffect, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  update(): boolean;
  draw(ctx: CanvasRenderingContext2D): void;
}

interface Firework {
  x: number;
  y: number;
  targetY: number;
  speed: number;
  color: string;
  update(): boolean;
  draw(ctx: CanvasRenderingContext2D): void;
  explode(particles: Particle[]): void;
}

export default function FireworkViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [nama, setNama] = useState("Coder");
  const [score, setScore] = useState(24);
  const [lines, setLines] = useState(700);
  const [proj, setProj] = useState("Turtle Graphics");
  const [showCongrats, setShowCongrats] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    canvas.width = 600;
    canvas.height = 400;

    const fireworks: Firework[] = [];
    const particles: Particle[] = [];

    class FireworkImpl implements Firework {
      x: number;
      y: number;
      targetY: number;
      speed: number;
      color: string;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = canvasHeight;
        this.targetY = Math.random() * (canvasHeight / 2);
        this.speed = 3 + Math.random() * 2;
        this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
      }

      update(): boolean {
        this.y -= this.speed;
        if (this.y <= this.targetY) {
          this.explode(particles);
          return false;
        }
        return true;
      }

      draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      explode(particles: Particle[]): void {
        for (let i = 0; i < 30; i++) {
          particles.push(new ParticleImpl(this.x, this.y, this.color));
        }
      }
    }

    class ParticleImpl implements Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1.5;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.color = color;
      }

      update(): boolean {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.08;
        this.alpha -= 0.017;
        return this.alpha > 0;
      }

      draw(ctx: CanvasRenderingContext2D): void {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = "rgba(0,0,0,0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.07) {
        fireworks.push(new FireworkImpl(canvas.width, canvas.height));
      }

      for (let i = fireworks.length - 1; i >= 0; i--) {
        if (!fireworks[i].update()) {
          fireworks.splice(i, 1);
        } else {
          fireworks[i].draw(ctx);
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        if (!particles[i].update()) {
          particles.splice(i, 1);
        } else {
          particles[i].draw(ctx);
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="card" style={{ textAlign: "center", maxWidth: 650, margin: "0 auto" }}>
      <h2 style={{ marginBottom: 10 }}>🎓 Graduation Celebration</h2>
      
      <canvas
        ref={canvasRef}
        style={{
          background: "#000",
          borderRadius: 12,
          width: "100%",
          maxWidth: 600,
          height: 280,
          display: "block",
          margin: "0 auto"
        }}
      />

      <div style={{ margin: "16px 0", display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
        <input
          className="input"
          value={nama}
          onChange={e => setNama(e.target.value)}
          placeholder="Nama"
          style={{ width: 120, padding: "8px 10px", fontSize: 13 }}
        />
        <input
          className="input"
          value={score}
          onChange={e => setScore(parseInt(e.target.value) || 0)}
          type="number"
          min={0}
          max={24}
          placeholder="Markah"
          style={{ width: 80, padding: "8px 10px", fontSize: 13 }}
        />
        <input
          className="input"
          value={lines}
          onChange={e => setLines(parseInt(e.target.value) || 0)}
          type="number"
          min={0}
          placeholder="Lines Kod"
          style={{ width: 100, padding: "8px 10px", fontSize: 13 }}
        />
        <input
          className="input"
          value={proj}
          onChange={e => setProj(e.target.value)}
          placeholder="Projek Fav"
          style={{ width: 140, padding: "8px 10px", fontSize: 13 }}
        />
        <button
          style={{
            padding: "8px 16px",
            fontSize: 16,
            background: "linear-gradient(135deg, #10b981, #059669)",
            fontWeight: 700
          }}
          onClick={() => setShowCongrats(true)}
        >
          🎉 Celebrate!
        </button>
      </div>

      {showCongrats && (
        <div
          className="celebration"
          style={{
            marginTop: 18,
            background: "linear-gradient(135deg, #fef3c7, #fde68a)",
            borderRadius: 16,
            padding: 20,
            border: "2px solid #fbbf24"
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: 12 }}>👏 Syabas, {nama}! 👏</h2>
          <div style={{ fontSize: 16, lineHeight: 1.8 }}>
            <div><b>Markah Tamat:</b> {score}/24 ✅</div>
            <div><b>Lines Kod Ditulis:</b> {lines}+ 💻</div>
            <div><b>Projek Terbaik:</b> {proj} 🚀</div>
          </div>
          <div style={{ fontSize: 36, marginTop: 12 }}>🎆 🎉 🎆</div>
          <p style={{ marginTop: 12, fontSize: 14, color: "#92400e" }}>
            Teruskan belajar dan buat projek awesome! 🌟
          </p>
        </div>
      )}

      {!showCongrats && (
        <div style={{ marginTop: 13, fontSize: 14, color: "#64748b" }}>
          Isi nama, markah, kod, projek kegemaran & tekan 🎉
        </div>
      )}
    </div>
  );
}

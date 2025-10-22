export class TurtleCanvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private x: number;
  private y: number;
  private angle: number;
  private penDown: boolean;
  private penColor: string;
  private penSize: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Could not get canvas context');
    }
    this.ctx = context;
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.penDown = true;
    this.penColor = 'black';
    this.penSize = 2;
    this.reset();
  }

  reset(): void {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.angle = 0; // Start facing right (standard coordinate system)
    this.penDown = true;
    this.penColor = 'black';
    this.penSize = 2;
    
    // Draw center point
    this.ctx.fillStyle = 'green';
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 4, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  forward(distance: number): void {
    const startX = this.x;
    const startY = this.y;
    
    // Convert angle to radians
    // Angle 0 = East, 90 = South (because Y increases downward in canvas)
    const radians = (this.angle * Math.PI) / 180;
    this.x += distance * Math.cos(radians);
    this.y += distance * Math.sin(radians);
    
    if (this.penDown) {
      this.ctx.strokeStyle = this.penColor;
      this.ctx.lineWidth = this.penSize;
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';
      this.ctx.beginPath();
      this.ctx.moveTo(startX, startY);
      this.ctx.lineTo(this.x, this.y);
      this.ctx.stroke();
    }
  }

  backward(distance: number): void {
    this.forward(-distance);
  }

  right(degrees: number): void {
    this.angle += degrees;
  }

  left(degrees: number): void {
    this.angle -= degrees;
  }

  penup(): void {
    this.penDown = false;
  }

  pendown(): void {
    this.penDown = true;
  }

  setColor(color: string): void {
    this.penColor = color;
  }

  setPenSize(size: number): void {
    this.penSize = size;
  }

  goto(x: number, y: number): void {
    if (this.penDown) {
      this.ctx.strokeStyle = this.penColor;
      this.ctx.lineWidth = this.penSize;
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    }
    this.x = x;
    this.y = y;
  }

  circle(radius: number): void {
    this.ctx.strokeStyle = this.penColor;
    this.ctx.lineWidth = this.penSize;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
    this.ctx.stroke();
  }
}

export function executeTurtleCode(code: string, canvas: HTMLCanvasElement): string {
  const turtle = new TurtleCanvas(canvas);
  let output = "🐢 Turtle Graphics\n";
  output += "━".repeat(30) + "\n\n";

  try {
    const lines = code.split('\n');
    const commands: string[] = [];
    
    let i = 0;
    while (i < lines.length) {
      const line = lines[i].trim();
      
      if (!line || line.startsWith('#')) {
        i++;
        continue;
      }
      
      if (line.includes('import turtle') || line.includes('from turtle') || 
          line.includes('turtle.Turtle()') || line.includes('turtle.done()')) {
        i++;
        continue;
      }
      
      // Handle for loops
      if (line.startsWith('for ')) {
        const rangeMatch = line.match(/range\((\d+)\)/);
        if (rangeMatch) {
          const loopCount = parseInt(rangeMatch[1]);
          const loopCommands: string[] = [];
          
          i++;
          while (i < lines.length && (lines[i].startsWith('    ') || lines[i].startsWith('\t'))) {
            const loopLine = lines[i].trim();
            if (loopLine && !loopLine.startsWith('#')) {
              loopCommands.push(loopLine);
            }
            i++;
          }
          
          // Add loop info to output
          output += `🔁 Loop ${loopCount} times:\n`;
          
          for (let j = 0; j < loopCount; j++) {
            for (const cmd of loopCommands) {
              commands.push(cmd);
            }
          }
          output += "\n";
          continue;
        }
      }
      
      if (line.startsWith('t.') || line.includes('print(')) {
        commands.push(line);
      }
      
      i++;
    }
    
    // Execute commands with better output formatting
    let commandCount = 0;
    for (const cmd of commands) {
      if (cmd.includes('print(')) {
        continue;
      }
      
      if (cmd.includes('.forward(')) {
        const match = cmd.match(/\.forward\((\d+)\)/);
        if (match) {
          const dist = parseInt(match[1]);
          turtle.forward(dist);
          commandCount++;
          output += `${commandCount}. → Forward ${dist}px\n`;
        }
      }
      else if (cmd.includes('.backward(')) {
        const match = cmd.match(/\.backward\((\d+)\)/);
        if (match) {
          const dist = parseInt(match[1]);
          turtle.backward(dist);
          commandCount++;
          output += `${commandCount}. ← Backward ${dist}px\n`;
        }
      }
      else if (cmd.includes('.right(')) {
        const match = cmd.match(/\.right\((\d+)\)/);
        if (match) {
          const deg = parseInt(match[1]);
          turtle.right(deg);
          commandCount++;
          output += `${commandCount}. ↻ Turn right ${deg}°\n`;
        }
      }
      else if (cmd.includes('.left(')) {
        const match = cmd.match(/\.left\((\d+)\)/);
        if (match) {
          const deg = parseInt(match[1]);
          turtle.left(deg);
          commandCount++;
          output += `${commandCount}. ↺ Turn left ${deg}°\n`;
        }
      }
      else if (cmd.includes('.pencolor(')) {
        const match = cmd.match(/\.pencolor\(['"](.*?)['"]\)/);
        if (match) {
          turtle.setColor(match[1]);
          commandCount++;
          output += `${commandCount}. 🎨 Color: ${match[1]}\n`;
        }
      }
      else if (cmd.includes('.pensize(')) {
        const match = cmd.match(/\.pensize\((\d+)\)/);
        if (match) {
          const size = parseInt(match[1]);
          turtle.setPenSize(size);
          commandCount++;
          output += `${commandCount}. ✏️ Pen size: ${size}\n`;
        }
      }
      else if (cmd.includes('.penup(')) {
        turtle.penup();
        commandCount++;
        output += `${commandCount}. ⬆️ Pen up\n`;
      }
      else if (cmd.includes('.pendown(')) {
        turtle.pendown();
        commandCount++;
        output += `${commandCount}. ⬇️ Pen down\n`;
      }
      else if (cmd.includes('.circle(')) {
        const match = cmd.match(/\.circle\((\d+)\)/);
        if (match) {
          const radius = parseInt(match[1]);
          turtle.circle(radius);
          commandCount++;
          output += `${commandCount}. ⭕ Circle radius ${radius}\n`;
        }
      }
    }
    
    output += "\n" + "━".repeat(30) + "\n";
    output += "✅ Drawing complete!\n";
    output += `📊 Commands executed: ${commandCount}\n`;
    
  } catch (error) {
    const e = error as Error;
    output += `\n❌ Error: ${e.message}\n`;
  }

  return output;
}

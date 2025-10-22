import { executeTurtleCode } from './turtleCanvas';

interface PyodideInterface {
  runPythonAsync(code: string): Promise<unknown>;
  setStdout(options: { batched: (output: string) => void }): void;
  setStderr(options: { batched: (output: string) => void }): void;
  globals: {
    get(name: string): unknown;
    set(name: string, value: unknown): void;
  };
}

interface WindowWithPyodide extends Window {
  pyodide?: PyodideInterface;
  loadPyodide?: (config: { indexURL: string }) => Promise<PyodideInterface>;
}

declare const window: WindowWithPyodide;

let pyodidePromise: Promise<PyodideInterface> | null = null;

export async function loadPyodideOnce(): Promise<PyodideInterface> {
  if (!pyodidePromise) {
    pyodidePromise = (async () => {
      try {
        if (window.pyodide) {
          return window.pyodide;
        }

        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js";
        document.head.appendChild(script);
        
        await new Promise<void>((resolve, reject) => {
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("Failed to load Pyodide. Check internet connection."));
        });

        if (!window.loadPyodide) {
          throw new Error("Pyodide failed to load properly");
        }

        const py = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
        });

        window.pyodide = py;
        return py;
      } catch (error) {
        pyodidePromise = null;
        throw error;
      }
    })();
  }
  return pyodidePromise;
}

export async function runPython(
  code: string, 
  canvas?: HTMLCanvasElement | null
): Promise<{ stdout: string; stderr: string; isTurtle: boolean }> {
  let stdout = "";
  let stderr = "";
  let isTurtle = false;

  // Check for turtle code
  if ((code.includes("import turtle") || code.includes("from turtle")) && canvas) {
    isTurtle = true;
    try {
      stdout = executeTurtleCode(code, canvas);
    } catch (error) {
      const e = error as Error;
      stderr = `❌ Turtle Error: ${e.message}`;
    }
    return { stdout, stderr, isTurtle };
  }

  // Check for input() - replace with mock input
  let modifiedCode = code;
  if (code.includes("input(")) {
    // Replace input() with pre-defined values (or prompt user)
    const inputMatches = code.match(/input\(['"](.*?)['"]\)/g);
    if (inputMatches) {
      stderr += "⚠️ Note: input() detected. Using mock values.\n";
      stderr += "For real input, app will show popup dialog.\n\n";
      
      // For now, replace with empty string - can be enhanced with prompt()
      modifiedCode = code.replace(/input\(['"](.*?)['"]\)/g, '""');
    }
  }

  try {
    const py = await loadPyodideOnce();
    
    py.setStdout({ batched: (s: string) => { stdout += s; } });
    py.setStderr({ batched: (s: string) => { stderr += s; } });

    await py.runPythonAsync(modifiedCode);

    if (!stdout && !stderr) {
      stdout = "✅ Code executed successfully!\n(No output to display)";
    }

  } catch (error) {
    const e = error as Error;
    const errorMsg = e?.message ?? String(error);
    
    if (errorMsg.includes("input")) {
      stderr += "❌ Error: input() is not fully supported.\n";
      stderr += "💡 Tip: Modify code to use variables instead!\n";
    } else {
      stderr += "❌ Error:\n" + errorMsg + "\n";
    }
  }

  return { stdout, stderr, isTurtle };
}

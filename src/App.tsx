import { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import CodeLesson from "./components/CodeLesson";
import Rewards from "./components/Rewards";
import ParentDashboard from "./components/ParentDashboard";
import { defaultProgress, addXP } from "./lib/gamification";

type Screen = "home" | "lesson" | "rewards" | "parent";

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [currentLesson, setCurrentLesson] = useState<string | null>(null);
  const [progress, setProgress] = useState(defaultProgress());

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header onParent={() => setScreen("parent")} />
      
      {screen === "home" && (
        <Dashboard
          onStartLesson={(id) => {
            setCurrentLesson(id);
            setScreen("lesson");
          }}
          progress={progress}
        />
      )}

      {screen === "lesson" && currentLesson && (
        <CodeLesson
          id={currentLesson}
          onBack={() => setScreen("home")}
          onDone={(xp) => {
            const p = { ...progress, badges: [...progress.badges] };
            addXP(p, xp);
            setProgress(p);
            setScreen("rewards");
          }}
        />
      )}

      {screen === "rewards" && <Rewards onContinue={() => setScreen("home")} />}

      {screen === "parent" && <ParentDashboard onBack={() => setScreen("home")} />}
    </div>
  );
}

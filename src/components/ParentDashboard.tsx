import React from "react";

export default function ParentDashboard({ onBack }: { onBack(): void }) {
return (
<div className="grid" style={{ padding: 16 }}>
<div className="card">
<h2>Parent Dashboard 👨‍👩‍👧‍👦</h2>
<div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))" }}>
<div className="card">Lessons Completed: 6/24</div>
<div className="card">Time This Week: 3.5 hours</div>
<div className="card">Current Streak: 5 days</div>
<div className="card">Badges Earned: 4</div>
</div>
<div style={{ marginTop: 16 }}>
<button onClick={onBack}>Back to Learning</button>
</div>
</div>
</div>
);
}
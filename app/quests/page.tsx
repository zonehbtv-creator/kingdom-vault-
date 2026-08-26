"use client";

import { useState } from "react";
import Link from "next/link";

const QUESTS = [
  {
    id: 1,
    title: "Pray for someone in your city by name",
    description: "Ask the Lord for one person. Call or send them a short encouraging message after praying.",
    difficulty: "Easy",
    points: 15,
  },
  {
    id: 2,
    title: "Bless a stranger with unexpected kindness",
    description: "Buy a meal, pay for someone’s transport, or leave an anonymous gift. Do it quietly.",
    difficulty: "Medium",
    points: 25,
  },
  {
    id: 3,
    title: "Intercede for a nation in the news",
    description: "Choose one nation facing crisis. Spend at least 10 focused minutes praying Scripture over it.",
    difficulty: "Easy",
    points: 15,
  },
];

export default function QuestsPage() {
  const [completed, setCompleted] = useState<number[]>([]);

  const markComplete = (id: number) => {
    if (!completed.includes(id)) {
      setCompleted([...completed, id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0520] text-white">
      <header className="border-b border-yellow-500/10 px-6 py-4 flex items-center justify-between max-w-4xl mx-auto">
        <Link href="/dashboard" className="text-yellow-300 text-sm">← Back to Vault</Link>
        <span className="font-bold text-yellow-400 text-lg">Kingdom Quests</span>
        <div className="text-sm text-yellow-100/50">{completed.length} done</div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="text-center mb-10">
          <div className="text-4xl mb-3">⚔️</div>
          <h1 className="text-3xl font-bold mb-2">
            Today’s <span className="text-yellow-400">Kingdom Quests</span>
          </h1>
          <p className="text-yellow-100/60 max-w-lg mx-auto">
            Fresh assignments to grow in obedience and release practical love.
          </p>
        </div>

        <div className="space-y-4">
          {QUESTS.map((quest) => (
            <div
              key={quest.id}
              className={`bg-purple-900/50 border border-yellow-500/20 rounded-xl p-5 ${
                completed.includes(quest.id) ? "opacity-60" : ""
              }`}
            >
              <h3 className="font-semibold text-white mb-1">{quest.title}</h3>
              <p className="text-sm text-yellow-100/60 mb-3">{quest.description}</p>
              <div className="flex items-center justify-between">
                <div className="text-xs text-yellow-100/40">
                  {quest.difficulty} · +{quest.points} pts
                </div>
                <button
                  onClick={() => markComplete(quest.id)}
                  disabled={completed.includes(quest.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
                    completed.includes(quest.id)
                      ? "bg-green-600/30 text-green-300"
                      : "bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#1a0b2e]"
                  }`}
                >
                  {completed.includes(quest.id) ? "Completed ✓" : "Mark Complete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

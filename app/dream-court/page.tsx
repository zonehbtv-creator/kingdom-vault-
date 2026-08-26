"use client";

import { useState } from "react";
import Link from "next/link";

export default function DreamCourtPage() {
  const [dreamText, setDreamText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDraft, setShowDraft] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dreamText.trim()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setShowDraft(true);
  };

  return (
    <div className="min-h-screen bg-[#0f0520] text-white">
      <header className="border-b border-yellow-500/10 px-6 py-4 flex items-center justify-between max-w-4xl mx-auto">
        <Link href="/dashboard" className="text-yellow-300 text-sm">← Back to Vault</Link>
        <span className="font-bold text-yellow-400 text-lg">Dream Court</span>
        <div className="w-16"></div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        {!showDraft ? (
          <>
            <div className="text-center mb-10">
              <div className="text-4xl mb-4">🌙</div>
              <h1 className="text-3xl font-bold mb-3">
                Bring Your Dream <span className="text-yellow-400">Before the Court</span>
              </h1>
              <p className="text-yellow-100/60 max-w-xl mx-auto">
                Write the dream as accurately as you remember it. A Scripture-rooted interpretation will be prepared.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-purple-900/50 border border-yellow-500/20 rounded-2xl p-6">
              <label className="block text-sm font-medium text-yellow-300 mb-3">
                Describe your dream
              </label>
              <textarea
                value={dreamText}
                onChange={(e) => setDreamText(e.target.value)}
                placeholder="Write everything you remember — people, places, feelings, colors, actions..."
                className="w-full h-48 bg-[#1a0b2e] border border-yellow-500/20 rounded-xl px-4 py-3 text-white placeholder:text-yellow-100/30 focus:outline-none focus:border-yellow-500/50 resize-none"
                required
              />
              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting || !dreamText.trim()}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#1a0b2e] px-6 py-2.5 rounded-full text-sm font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? "Preparing..." : "Submit to Dream Court"}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-sm mb-4">
                Draft Ready
              </div>
              <h1 className="text-2xl font-bold">Scripture-Based Interpretation</h1>
            </div>

            <div className="bg-purple-900/50 border border-yellow-500/20 rounded-2xl p-6 space-y-4">
              <div>
                <h3 className="text-yellow-400 font-medium mb-2">Your Dream</h3>
                <p className="text-yellow-100/70 text-sm whitespace-pre-wrap">
                  {dreamText.slice(0, 300)}{dreamText.length > 300 ? "..." : ""}
                </p>
              </div>
              <hr className="border-yellow-500/15" />
              <div>
                <h3 className="text-yellow-400 font-medium mb-2">Interpretation</h3>
                <p className="text-yellow-100/70 text-sm leading-relaxed">
                  This is a placeholder for the AI-generated Scripture-only interpretation (Joseph & Daniel model). 
                  In the full version, a detailed prophetic word with Bible references and suggested prayers will appear here.
                </p>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => { setShowDraft(false); setDreamText(""); }}
                className="border border-yellow-500/40 text-yellow-300 px-6 py-2.5 rounded-full text-sm"
              >
                Edit Dream
              </button>
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#1a0b2e] px-6 py-2.5 rounded-full text-sm font-semibold">
                Send to Community
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

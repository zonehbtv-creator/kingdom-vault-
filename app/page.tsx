import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f0520] text-white">
      <header className="w-full px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg">
            <span className="text-[#1a0b2e] font-bold text-lg">✝</span>
          </div>
          <span className="text-xl font-bold text-yellow-400 tracking-wide">
            KINGDOM VAULT
          </span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-10 pb-20 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-purple-900/40 text-yellow-300 text-sm">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
            Store up treasures in heaven
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            <span className="text-yellow-400">Your Sacred Vault</span>
            <br />
            <span className="text-white/90">for Dreams, Words & Kingdom Impact</span>
          </h1>

          <p className="text-lg text-yellow-100/70 max-w-2xl mx-auto leading-relaxed">
            Capture prophetic dreams. Receive Scripture-rooted interpretations. 
            Complete daily Kingdom Quests. Watch real giving change lives.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/dashboard"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#1a0b2e] px-8 py-3.5 rounded-full text-base font-semibold shadow-lg"
            >
              Open Your Vault
            </Link>
          </div>
        </div>

        <div className="mt-20 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-900/50 border border-yellow-500/20 rounded-2xl p-6 text-left">
            <div className="text-3xl mb-3">🌙</div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">Dream Court</h3>
            <p className="text-sm text-yellow-100/60">
              Submit your dream. Receive a pure Scripture-based interpretation with community and ministerial covering.
            </p>
          </div>

          <div className="bg-purple-900/50 border border-yellow-500/20 rounded-2xl p-6 text-left">
            <div className="text-3xl mb-3">⚔️</div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">Kingdom Quests</h3>
            <p className="text-sm text-yellow-100/60">
              Daily Spirit-led challenges to grow your faith and release practical love.
            </p>
          </div>

          <div className="bg-purple-900/50 border border-yellow-500/20 rounded-2xl p-6 text-left">
            <div className="text-3xl mb-3">🌱</div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">Giving Impact</h3>
            <p className="text-sm text-yellow-100/60">
              Real stories of how Kingdom resources are changing lives on the field.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-yellow-500/10 py-8 px-6 text-center text-sm text-yellow-100/40">
        <p>Kingdom Vault • Store up treasures that never fade</p>
      </footer>
    </div>
  );
}

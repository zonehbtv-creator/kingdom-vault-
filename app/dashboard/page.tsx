import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0f0520] text-white">
      <header className="border-b border-yellow-500/10 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
            <span className="text-[#1a0b2e] font-bold">✝</span>
          </div>
          <span className="font-bold text-yellow-400">KINGDOM VAULT</span>
        </Link>
        <div className="text-sm text-yellow-100/60">Welcome, Believer</div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-2">
          Your <span className="text-yellow-400">Vault</span>
        </h1>
        <p className="text-yellow-100/60 mb-10">
          Everything God has entrusted to you, stored in one sacred place.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Dreams Stored", value: "0" },
            { label: "Quests Completed", value: "0" },
            { label: "Vault Points", value: "0" },
            { label: "Impact Stories", value: "0" },
          ].map((stat) => (
            <div key={stat.label} className="bg-purple-900/50 border border-yellow-500/20 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-yellow-400">{stat.value}</div>
              <div className="text-xs text-yellow-100/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/dream-court" className="bg-purple-900/50 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition block">
            <div className="text-3xl mb-3">🌙</div>
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">Dream Court</h2>
            <p className="text-sm text-yellow-100/60">Submit a new dream or review interpretations.</p>
          </Link>

          <Link href="/quests" className="bg-purple-900/50 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition block">
            <div className="text-3xl mb-3">⚔️</div>
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">Kingdom Quests</h2>
            <p className="text-sm text-yellow-100/60">Receive and complete your daily assignment.</p>
          </Link>

          <Link href="/impact" className="bg-purple-900/50 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition block">
            <div className="text-3xl mb-3">🌱</div>
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">Impact Stories</h2>
            <p className="text-sm text-yellow-100/60">See how the Kingdom is moving through giving.</p>
          </Link>

          <Link href="/vault" className="bg-purple-900/50 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition block">
            <div className="text-3xl mb-3">🏦</div>
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">My Vault</h2>
            <p className="text-sm text-yellow-100/60">View everything stored: dreams, quests, points.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

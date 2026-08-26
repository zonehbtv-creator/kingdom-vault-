import Link from "next/link";

export default function VaultPage() {
  return (
    <div className="min-h-screen bg-[#0f0520] text-white">
      <header className="border-b border-yellow-500/10 px-6 py-4 flex items-center justify-between max-w-4xl mx-auto">
        <Link href="/dashboard" className="text-yellow-300 text-sm">← Back to Dashboard</Link>
        <span className="font-bold text-yellow-400 text-lg">My Vault</span>
        <div className="w-20"></div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">🏦</div>
          <h1 className="text-3xl font-bold mb-2">
            Your Personal <span className="text-yellow-400">Kingdom Vault</span>
          </h1>
          <p className="text-yellow-100/60">
            Every dream sealed, every quest completed, every impact story — stored here.
          </p>
        </div>

        <div className="bg-purple-900/50 border border-yellow-500/20 rounded-2xl p-10 text-center mb-10">
          <p className="text-yellow-100/50 mb-6">
            Your vault is currently empty. Start filling it by submitting a dream or completing a quest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dream-court" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#1a0b2e] px-6 py-2.5 rounded-full text-sm font-semibold">
              Submit a Dream
            </Link>
            <Link href="/quests" className="border border-yellow-500/40 text-yellow-300 px-6 py-2.5 rounded-full text-sm font-semibold">
              View Quests
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-purple-900/40 border border-yellow-500/10 rounded-xl p-5 text-center opacity-70">
            <div className="text-2xl mb-2">🌙</div>
            <div className="text-sm font-medium text-yellow-300">Sealed Dreams</div>
            <div className="text-xs text-yellow-100/40 mt-1">0 stored</div>
          </div>
          <div className="bg-purple-900/40 border border-yellow-500/10 rounded-xl p-5 text-center opacity-70">
            <div className="text-2xl mb-2">⚔️</div>
            <div className="text-sm font-medium text-yellow-300">Completed Quests</div>
            <div className="text-xs text-yellow-100/40 mt-1">0 completed</div>
          </div>
          <div className="bg-purple-900/40 border border-yellow-500/10 rounded-xl p-5 text-center opacity-70">
            <div className="text-2xl mb-2">🌱</div>
            <div className="text-sm font-medium text-yellow-300">Impact Touched</div>
            <div className="text-xs text-yellow-100/40 mt-1">0 stories</div>
          </div>
        </div>
      </main>
    </div>
  );
}

import Link from "next/link";

const STORIES = [
  {
    id: 1,
    title: "Clean water reaches 40 families in rural Benue",
    location: "Otukpo, Nigeria",
    summary: "A new borehole was completed. Children no longer walk hours for water. The community gathered to give thanks.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    title: "Young mother receives business seed capital",
    location: "Lagos, Nigeria",
    summary: "After Kingdom entrepreneurship training, Grace received a small grant. Her food business now employs two other women.",
    date: "1 month ago",
  },
  {
    id: 3,
    title: "Medical outreach treats 180 people in one day",
    location: "Idoma territory",
    summary: "Christian doctors and nurses ran a free clinic. Medicines, prayer, and follow-up care were given.",
    date: "3 weeks ago",
  },
];

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-[#0f0520] text-white">
      <header className="border-b border-yellow-500/10 px-6 py-4 flex items-center justify-between max-w-4xl mx-auto">
        <Link href="/dashboard" className="text-yellow-300 text-sm">← Back to Vault</Link>
        <span className="font-bold text-yellow-400 text-lg">Giving Impact</span>
        <div className="w-16"></div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="text-center mb-10">
          <div className="text-4xl mb-3">🌱</div>
          <h1 className="text-3xl font-bold mb-3">
            Kingdom <span className="text-yellow-400">Impact Stories</span>
          </h1>
          <p className="text-yellow-100/60 max-w-xl mx-auto">
            Real fruit from real giving. Living testimonies of how resources released through the body of Christ are changing lives.
          </p>
        </div>

        <div className="space-y-6">
          {STORIES.map((story) => (
            <div key={story.id} className="bg-purple-900/50 border border-yellow-500/20 rounded-xl p-5">
              <div className="text-xs text-yellow-100/40 mb-2">{story.location} · {story.date}</div>
              <h3 className="font-semibold text-white mb-2">{story.title}</h3>
              <p className="text-sm text-yellow-100/60 leading-relaxed">{story.summary}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

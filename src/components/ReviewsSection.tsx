const REVIEWS = [
  { name: "Rahul Sharma", role: "Swing Trader", text: "Stocks City made technical analysis click for me. The structured lessons and live sessions are unmatched." },
  { name: "Priya Verma", role: "Investor", text: "Finally a platform that teaches real-world price action without the hype. Highly recommended." },
  { name: "Aman Gupta", role: "Intraday Trader", text: "Rajeev sir's risk management lessons saved my capital. Best decision I made this year." },
  { name: "Neha Kulkarni", role: "Beginner", text: "Started from zero. Now I read charts confidently. The community is super supportive." },
  { name: "Vikram Singh", role: "Options Trader", text: "The options fundamentals module is gold. Clear, practical, no fluff." },
  { name: "Sneha Iyer", role: "Long-term Investor", text: "Loved the market research framework. Helped me build a solid portfolio." },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#C9A84C]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="bg-[#0a0a0a] px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="rounded-full border border-[#C9A84C]/40 px-4 py-1 text-xs font-bold tracking-widest text-[#C9A84C]">
            STUDENT REVIEWS
          </span>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Loved by <span className="bg-gradient-to-r from-[#C9A84C] to-[#F0D080] bg-clip-text text-transparent">32,000+ Learners</span>
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2 text-gray-400">
            <Stars />
            <span className="text-sm">4.9 / 5 average rating</span>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rounded-2xl border border-[#1f1f1f] bg-gradient-to-b from-[#141414] to-[#0a0a0a] p-6 transition hover:border-[#C9A84C]/50">
              <Stars />
              <p className="mt-4 text-sm leading-relaxed text-gray-300">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#C9A84C] to-[#F0D080] text-sm font-black text-[#0a0a0a]">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{r.name}</div>
                  <div className="text-xs text-gray-500">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

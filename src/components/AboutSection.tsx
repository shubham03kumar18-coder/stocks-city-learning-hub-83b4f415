import { SectionNav } from "./SectionNav";

export function AboutSection() {
  return (
    <section className="relative bg-[#0d0d0d] px-4 py-20">
      <SectionNav />
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[auto_1fr]">
        <div className="mx-auto grid h-48 w-48 place-items-center rounded-full border-4 border-[#C9A84C] bg-gradient-to-br from-[#C9A84C] to-[#F0D080] text-6xl font-black text-[#0a0a0a] shadow-2xl">
          RB
        </div>
        <div>
          <h2 className="text-4xl font-black text-white">Rajeev Bair</h2>
          <p className="mt-1 text-[#C9A84C]">Founder — Stocks City Learning Platform</p>
          <p className="mt-2 text-gray-400">9,000+ Students | 40+ Lessons | Trading Expert</p>
          <p className="mt-4 max-w-xl text-gray-300">
            Passionate stock market educator helping traders master technical analysis through structured 200-day
            programs.
          </p>
          <p className="mt-4 text-lg">
            <span className="text-[#FBBF24]">⭐⭐⭐⭐⭐</span>{" "}
            <span className="ml-2 font-semibold text-white">4.9/5 Student Rating</span>
          </p>
        </div>
      </div>
    </section>
  );
}

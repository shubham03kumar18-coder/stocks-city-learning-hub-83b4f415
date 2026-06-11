interface Props { eyebrow?: string; title: string; subtitle?: string }
export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-[#1f1f1f] bg-[#0a0a0a] px-4 py-20 text-center">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 50% 0%, rgba(201,168,76,0.18), transparent 60%)",
      }} />
      <div className="relative mx-auto max-w-4xl">
        {eyebrow && (
          <span className="rounded-full border border-[#C9A84C]/40 px-4 py-1 text-xs font-bold tracking-widest text-[#C9A84C]">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-gray-400">{subtitle}</p>}
      </div>
    </section>
  );
}

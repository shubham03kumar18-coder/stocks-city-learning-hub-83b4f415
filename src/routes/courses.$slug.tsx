import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";
import { COURSES, type Course } from "../data/courses";
import { WHATSAPP_LINK, TELEGRAM_LINK } from "../constants/links";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }): { course: Course } => {
    const course = COURSES.find((c) => c.slug === params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.course;
    const title = c ? `${c.title} — Tradeverse City Course` : "Course — Tradeverse City";
    const desc = c?.tagline ?? "Tradeverse City Trading Course";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <PageHero title="Course not found" subtitle="The course you're looking for doesn't exist." />
    </SiteLayout>
  ),
  component: CourseDetail,
});

function CourseDetail() {
  const { course } = Route.useLoaderData();
  return (
    <SiteLayout>
      <PageHero eyebrow={`COURSE ${course.number}`} title={course.title} subtitle={course.tagline} />
      <section className="bg-[#0a0a0a] px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-10">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-[#C9A84C]/40 bg-[#141414] px-3 py-1 text-xs font-bold text-[#C9A84C]">
              {course.level}
            </span>
            <span className="rounded-full border border-[#1f1f1f] bg-[#141414] px-3 py-1 text-xs font-bold text-gray-300">
              {course.duration}
            </span>
          </div>

          <p className="text-lg leading-relaxed text-gray-300">{course.overview}</p>

          <div className="rounded-2xl border border-[#1f1f1f] bg-[#141414] p-6">
            <h2 className="text-xl font-bold text-[#C9A84C]">Course Modules</h2>
            <ol className="mt-4 space-y-3">
              {course.modules.map((m, i) => (
                <li key={m} className="flex gap-3 text-gray-300">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#C9A84C] to-[#F0D080] text-xs font-black text-[#0a0a0a]">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{m}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-[#1f1f1f] bg-[#141414] p-6">
            <h2 className="text-xl font-bold text-[#C9A84C]">Who This Is For</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {course.whoFor.map((w) => (
                <li key={w} className="flex gap-2 text-gray-300">
                  <span className="text-[#C9A84C]">✓</span><span>{w}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#C9A84C]/40 bg-gradient-to-b from-[#141414] to-[#0a0a0a] p-6 text-center">
            <p className="text-lg font-bold text-white">For full curriculum, batches & enrollment</p>
            <p className="mt-1 text-sm text-gray-400">Talk to our team directly — no forms, no waiting.</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25D366] px-6 py-3 font-bold text-white shadow hover:scale-105 transition">
                Enquire on WhatsApp
              </a>
              <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#229ED9] px-6 py-3 font-bold text-white shadow hover:scale-105 transition">
                Join on Telegram
              </a>
            </div>
          </div>

          <div className="text-center">
            <Link to="/courses" className="text-sm font-semibold text-[#C9A84C] hover:underline">← Back to All Courses</Link>
          </div>
        </div>
      </section>
      <CTASection />
    </SiteLayout>
  );
}

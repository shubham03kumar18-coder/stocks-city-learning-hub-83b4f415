import { SectionNav } from "./SectionNav";
import certCompletion from "../assets/cert-completion.jpeg.asset.json";
import certAppreciation from "../assets/cert-appreciation.jpeg.asset.json";

export function CertificatesSection() {
  return (
    <section className="relative bg-[#0a0a0a] px-4 py-20">
      <SectionNav />
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-4xl font-black text-white">
          Credentials &amp; <span className="text-[#C9A84C]">Achievements</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border-2 border-[#C9A84C]/40 bg-[#141414] shadow-2xl transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(201,168,76,0.2)]">
            <img src={certCompletion.url} alt="Certificate of Completion" className="w-full" />
            <div className="p-5">
              <h3 className="text-lg font-bold text-[#2563EB]">CERTIFICATE OF COMPLETION</h3>
              <p className="mt-1 text-white">Rajeev Bair</p>
              <p className="text-sm text-gray-400">Creative Technology Of Trading · 16 July 2022</p>
              <p className="mt-2 text-xs text-gray-500">
                Signed by Bartholomew Henderson &amp; Rufus Stewart
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border-2 border-[#C9A84C]/40 bg-[#141414] shadow-2xl transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(201,168,76,0.2)]">
            <img src={certAppreciation.url} alt="Certificate of Appreciation" className="w-full" />
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-200">Certificate of Appreciation</h3>
              <p className="mt-1 text-white">Rajeev Bair</p>
              <p className="text-sm text-gray-400">
                Effortless Contribution Towards Company Goals · Month of July
              </p>
              <p className="mt-2 text-xs text-gray-500">
                Director: Pardeep Kumar Gupta | A.T PVT LTD
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

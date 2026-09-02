import Image from "next/image";

const PARTNER_COUNT = 76;
const PARTNERS = Array.from(
  { length: PARTNER_COUNT },
  (_, i) => `/partners/partner-${i + 1}.png`
);

const firstRow = PARTNERS.filter((_, i) => i % 2 === 0);
const secondRow = PARTNERS.filter((_, i) => i % 2 === 1);

export default function TrustedBy() {
  return (
    <section className="bg-white py-20">
      <div className="container-custom">

        <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-[#2563eb]">
          Trusted by 1,000+ Organizations Since 2010
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-slate-900">
          Trusted by Industry Leaders
        </h2>

        <div className="relative mt-10 overflow-hidden rounded-[32px] border border-blue-900/40 bg-gradient-to-r from-[#081c3a] via-[#102a54] to-[#081c3a] px-8 py-12 shadow-[0_10px_60px_rgba(37,99,235,0.15)]">

          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" />

          {/* Row 1 */}
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex min-w-max animate-marquee gap-12">
              {[...firstRow, ...firstRow].map((src, i) => (
                <div
                  key={i}
                  className="flex h-24 w-52 flex-shrink-0 items-center justify-center"
                >
                  <Image
                    src={src}
                    alt="Partner Logo"
                    width={220}
                    height={110}
                    className="h-auto max-h-16 w-auto object-contain opacity-90 transition-all duration-300 hover:scale-105 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex min-w-max animate-marquee-reverse gap-12">
              {[...secondRow, ...secondRow].map((src, i) => (
                <div
                  key={i}
                  className="flex h-24 w-52 flex-shrink-0 items-center justify-center"
                >
                  <Image
                    src={src}
                    alt="Partner Logo"
                    width={220}
                    height={110}
                    className="h-auto max-h-16 w-auto object-contain opacity-90 transition-all duration-300 hover:scale-105 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
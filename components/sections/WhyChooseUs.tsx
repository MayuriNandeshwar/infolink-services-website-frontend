import {
  Wrench,
  ShieldCheck,
  FileText,
  Users,
  Headphones,
  Award,
} from "lucide-react";

const REASONS = [
  {
    icon: Wrench,
    title: "Engineering-First Approach",
    description:
      "Every system is engineered by qualified professionals — not just sold. We design for scalability, security, and longevity.",
  },
  {
    icon: Award,
    title: "13+ Years of Experience",
    description:
      "Since 2010, we've grown from community-driven roots into a full-stack software company trusted across industries.",
  },
  {
    icon: FileText,
    title: "Transparent Process",
    description:
      "No hidden costs or scope surprises. You receive clear timelines, milestones, and pricing from day one.",
  },
  {
    icon: Users,
    title: "1,000+ Business Relationships",
    description:
      "A decade of partnerships gives us a deep understanding of what organizations actually need to succeed.",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    description:
      "From discovery to deployment and beyond, we're a single point of contact throughout your project.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Without Compromise",
    description:
      "Rigorous testing, secure architecture, and maintainable code — quality is non-negotiable at Infolink Services.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-14 md:py-16">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-slate-200/50 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Why Infolink Services
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-[#0B1F3A] md:text-4xl">
            Built on Engineering.
            <span className="block text-[#2563EB]">
              Driven by Trust.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            We combine technical excellence, transparent communication,
            and long-term support to deliver software solutions that
            continue creating value long after launch.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B1F3A] text-white transition-all duration-300 group-hover:bg-[#2563EB] group-hover:scale-110">
                <item.icon className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0B1F3A]">
                {item.title}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
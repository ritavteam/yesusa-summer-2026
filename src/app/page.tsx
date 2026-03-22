import {
  ArrowRight,
  Check,
  Globe2,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";

import { cn } from "@/lib/utils";

const locations = [
  {
    name: "Miami",
    description:
      "Sun, energy, and a global atmosphere for students who want a high-excitement summer experience.",
  },
  {
    name: "New York",
    description:
      "An iconic city setting with strong academic ambition, cultural exposure, and unforgettable scale.",
  },
  {
    name: "Stevens / NYC Access",
    description:
      "A more structured campus-style experience with close access to New York City.",
  },
  {
    name: "Los Angeles / Orange County",
    description:
      "A polished West Coast option blending lifestyle, learning, and international appeal.",
  },
  {
    name: "Boston",
    description:
      "Historic, academic, and ideal for families who value educational credibility.",
  },
];

const tracks = [
  {
    title: "Model UN",
    description:
      "Diplomacy, public speaking, debate, and global perspective for ambitious students.",
  },
  {
    title: "Coding",
    description:
      "Future-facing digital learning for students interested in practical skills and innovation.",
  },
  {
    title: "Young Entrepreneurs",
    description:
      "Leadership, creativity, initiative, and business-minded thinking in a structured summer format.",
  },
];

const included = [
  "Academic and enrichment-led programming",
  "Structured daily schedules and student support",
  "Accommodation coordination",
  "Excursions and destination experiences",
  "Pre-arrival guidance for families and partners",
  "Operational oversight designed for trust and clarity",
];

const audiences = [
  {
    title: "International students",
    description:
      "For ages 12–20 who want a summer that feels exciting, social, safe, and meaningful.",
  },
  {
    title: "Parents",
    description:
      "For families who want visible structure, reassurance, and educational value — not chaos.",
  },
  {
    title: "Agencies & group organizers",
    description:
      "For partners who need a polished, agency-friendly product that feels premium and easy to position.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-white/65 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

function PlaceholderImage({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.22),transparent_30%)]" />
      <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="relative flex h-full min-h-[280px] flex-col justify-between p-6 text-white">
        <div className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.26em] text-white/75">
          Placeholder image
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-white/55">
            Visual direction
          </p>
          <h3 className="mt-3 max-w-sm text-2xl font-semibold leading-tight">
            {label}
          </h3>
        </div>
      </div>
    </div>
  );
}

function LinkButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition-all",
        variant === "primary"
          ? "bg-white text-slate-950 shadow-[0_20px_40px_-22px_rgba(255,255,255,0.25)] hover:bg-slate-100"
          : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
      )}
    >
      {children}
    </a>
  );
}

function SurfaceCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_18%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.22),transparent_24%),linear-gradient(180deg,#07111f_0%,#0a1628_36%,#0d1b2f_100%)] text-white">
      <section className="px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
            <div className="border-b border-white/10 px-6 py-4 sm:px-8 lg:px-10">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white">
                  YES USA
                </div>
                <a
                  href="#final-cta"
                  className="text-sm font-medium text-white/70 transition hover:text-white"
                >
                  Summer 2026 Inquiry
                </a>
              </div>
            </div>

            <div className="grid gap-12 px-6 py-10 sm:px-8 md:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-16">
              <div className="flex flex-col justify-center">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
                  <Sparkles className="size-4" />
                  Premium youth education and study-travel in the USA
                </div>
                <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-balance text-white sm:text-6xl lg:text-7xl">
                  A sharper, more structured Summer 2026 for international students.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                  YES USA combines educational credibility, destination appeal,
                  and parent-ready trust across five major US locations and three
                  signature tracks.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <LinkButton href="#locations">
                    Explore 2026 locations
                    <ArrowRight className="ml-2 size-4" />
                  </LinkButton>
                  <LinkButton href="#tracks" variant="secondary">
                    View signature tracks
                  </LinkButton>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {[
                    ["5", "destinations"],
                    ["3", "signature tracks"],
                    ["12–20", "age range"],
                  ].map(([value, label]) => (
                    <SurfaceCard key={label} className="p-5">
                      <div className="text-2xl font-semibold text-white">{value}</div>
                      <div className="mt-1 text-sm text-white/55">{label}</div>
                    </SurfaceCard>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <PlaceholderImage
                  label="Hero lifestyle image: international students on a premium US campus"
                  className="min-h-[400px]"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <SurfaceCard>
                    <ShieldCheck className="size-5 text-sky-300" />
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      Parent-friendly trust
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      Structured programs, thoughtful operations, and a premium
                      brand designed to reassure.
                    </p>
                  </SurfaceCard>
                  <SurfaceCard>
                    <Users2 className="size-5 text-sky-300" />
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      Agency-ready positioning
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      Clear product framing for partners, group organizers, and
                      international recruitment channels.
                    </p>
                  </SurfaceCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Why YES USA"
            title="Built for families who want more than a generic summer camp."
            description="The page direction is intentionally premium, structured, and international — educational enough for parents, exciting enough for students, and usable for agencies."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                icon: Globe2,
                title: "International appeal",
                description:
                  "Positioned for global students and families looking for a trusted US summer experience.",
              },
              {
                icon: ShieldCheck,
                title: "Visible structure",
                description:
                  "A calm, organized feeling from inquiry to arrival, not a chaotic camp-brand vibe.",
              },
              {
                icon: Sparkles,
                title: "Premium presentation",
                description:
                  "Polished design, concise messaging, and a more aspirational but credible brand tone.",
              },
              {
                icon: Users2,
                title: "Multi-audience clarity",
                description:
                  "Students, parents, agencies, and groups can all see where they fit immediately.",
              },
            ].map((item) => (
              <SurfaceCard key={item.title}>
                <item.icon className="size-5 text-sky-300" />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  {item.description}
                </p>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="grid gap-5">
            {locations.map((location, index) => (
              <SurfaceCard key={location.name} className="sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300/80">
                      0{index + 1}
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                      {location.name}
                    </h3>
                  </div>
                  <MapPin className="mt-1 size-5 shrink-0 text-white/35" />
                </div>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">
                  {location.description}
                </p>
              </SurfaceCard>
            ))}
          </div>

          <div className="lg:sticky lg:top-10">
            <SectionHeader
              eyebrow="2026 Locations"
              title="Five destination options with distinct personality and positioning."
              description="The structure is designed so each city can later expand into its own dedicated conversion section or standalone page."
            />
            <div className="mt-8">
              <PlaceholderImage
                label="Location collage placeholder: Miami, NYC, Stevens, LA/OC, Boston"
                className="min-h-[520px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="tracks" className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SurfaceCard className="overflow-hidden p-0">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                <SectionHeader
                  eyebrow="Signature Tracks"
                  title="Focused pathways for students who want direction, not filler."
                  description="Each track can later become a richer academic or marketing story with outcomes, sample modules, and profile-based targeting."
                />
              </div>
              <div className="grid gap-px bg-white/10 md:grid-cols-3">
                {tracks.map((track) => (
                  <div key={track.title} className="bg-white/[0.035] p-6 sm:p-8">
                    <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/70">
                      Signature Track
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-white">
                      {track.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/65">
                      {track.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SurfaceCard>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="What’s Included"
              title="A more complete and parent-friendly summer package."
              description="For this version, the list stays broad and credible. It can later split by destination or program format once final inclusions are confirmed."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <SurfaceCard key={item} className="flex items-start gap-3 p-4">
                  <div className="mt-0.5 rounded-full bg-sky-400/15 p-1 text-sky-300">
                    <Check className="size-4" />
                  </div>
                  <p className="text-sm leading-6 text-white/72">{item}</p>
                </SurfaceCard>
              ))}
            </div>
          </div>

          <PlaceholderImage
            label="Program lifestyle placeholder: campus, classrooms, excursions, student support"
            className="min-h-[520px]"
          />
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Who It’s For"
            title="Designed to work for three decision-makers at once."
            description="This is one of the big commercial strengths of YES USA: it can be positioned to students, parents, and agencies without feeling confused or diluted."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {audiences.map((audience) => (
              <SurfaceCard key={audience.title} className="sm:p-8">
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {audience.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-white/65">
                  {audience.description}
                </p>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      <section id="final-cta" className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SurfaceCard className="p-0 overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/80">
                  Final CTA
                </p>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Position YES USA as the summer brand families trust and agencies can confidently sell.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                  Premium destinations, structured delivery, and a modern
                  international presentation — now in a stronger, more
                  conversion-ready format.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <SurfaceCard className="p-5">
                    <p className="text-sm font-semibold text-white">For families</p>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      Ask for dates, pricing, destination guidance, and the right
                      track for your student.
                    </p>
                  </SurfaceCard>
                  <SurfaceCard className="p-5">
                    <p className="text-sm font-semibold text-white">For agencies</p>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      Request program sheets, group positioning support, and
                      partnership information for Summer 2026.
                    </p>
                  </SurfaceCard>
                </div>
              </div>

              <div className="bg-white/[0.035] p-6 sm:p-8 lg:p-10">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Inquiry form placeholder
                    </p>
                    <p className="mt-1 text-sm text-white/55">
                      Designed so this can later connect to a real CRM or form
                      backend.
                    </p>
                  </div>
                  <div className="rounded-full bg-sky-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                    V1
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <SurfaceCard className="p-4">
                      <label className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                        I am a
                      </label>
                      <div className="mt-3 flex gap-2 flex-wrap">
                        <span className="rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-950">
                          Parent / Student
                        </span>
                        <span className="rounded-full border border-white/15 px-3 py-2 text-xs font-medium text-white/80">
                          Agency / Group
                        </span>
                      </div>
                    </SurfaceCard>
                    <SurfaceCard className="p-4">
                      <label className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                        Interested in
                      </label>
                      <p className="mt-3 text-sm text-white/72">
                        Miami · New York · Stevens / NYC · LA / OC · Boston
                      </p>
                    </SurfaceCard>
                  </div>

                  <div className="grid gap-3">
                    {[
                      "Full name",
                      "Email address",
                      "Country / agency name",
                      "Message / student profile / group request",
                    ].map((field) => (
                      <div
                        key={field}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/35"
                      >
                        {field}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <LinkButton href="mailto:hello@yesusa.com?subject=YES%20USA%20Summer%202026%20Inquiry">
                    Request information
                  </LinkButton>
                  <LinkButton
                    href="mailto:partners@yesusa.com?subject=YES%20USA%20Agency%20Partnership"
                    variant="secondary"
                  >
                    Agency partnership
                  </LinkButton>
                </div>
              </div>
            </div>
          </SurfaceCard>
        </div>
      </section>

      <footer className="px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.035] px-6 py-6 text-sm text-white/45 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-semibold uppercase tracking-[0.24em] text-white">
              YES USA
            </div>
            <p className="mt-1">
              Premium youth education and study-travel in the USA.
            </p>
          </div>
          <div className="text-left sm:text-right">
            <div>Summer 2026 landing page concept</div>
            <div>Next.js · Tailwind · shadcn/ui</div>
          </div>
        </div>
      </footer>
    </main>
  );
}

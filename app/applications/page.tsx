import Link from "next/link";

export const metadata = {
  title: "RIPS Applications | Housing, Resilience, Mixed-Use",
  description:
    "BP2 RIPS applications: workforce housing, disaster resilience, mixed-use, institutional, and security construction.",
};

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-3 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8">
        <div className="space-y-6">
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            <div className="px-6 py-10 text-center md:px-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Project Types
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Applications
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
                RIPS panels support a wide range of building types. The
                combination of full structural capability, non-combustible
                construction, high thermal mass, and rapid installation creates
                advantages across residential, institutional, and mixed-use
                projects.
              </p>
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-gray-100 shadow-sm">
            <div className="grid gap-6 p-6 md:grid-cols-2 md:p-10">
              <div className="rounded-xl border border-gray-300 bg-white p-8 text-center shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">Affordable & Workforce Housing</h2>
                <p className="mt-4 text-gray-600">
                  Faster delivery timelines combined with durable, low-maintenance
                  construction and strong energy performance. The system supports
                  both single buildings and larger developments where speed and
                  long-term operating costs matter.
                </p>
                <p className="mt-4 text-sm">
                  <Link href="/projects/carson-culver-city" style={{ color: "#3F6FEC" }}>
                    See Carson Street
                  </Link>
                </p>
              </div>

              <div className="rounded-xl border border-gray-300 bg-white p-8 text-center shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">Disaster Recovery & Resilience</h2>
                <p className="mt-4 text-gray-600">
                  Structures engineered to withstand extreme events — high winds,
                  seismic forces, flooding, and fire. Rapid deployment capability
                  makes the system suitable for recovery housing and resilient
                  community facilities.
                </p>
                <p className="mt-4 text-sm">
                  <Link href="/projects/lorenzo-fire-rebuild" style={{ color: "#3F6FEC" }}>
                    See Lorenzo fire rebuild
                  </Link>
                </p>
              </div>

              <div className="rounded-xl border border-gray-300 bg-white p-8 text-center shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">Luxury Homes & Resorts</h2>
                <p className="mt-4 text-gray-600">
                  Superior insulation, acoustic performance, and structural
                  integrity. The system supports high-quality finishes while
                  delivering wildfire resistance and long-term durability in
                  demanding environments.
                </p>
                <p className="mt-4 text-sm">
                  <Link href="/projects/rambla-orienta" style={{ color: "#3F6FEC" }}>
                    See Rambla Orienta
                  </Link>
                  {" · "}
                  <Link href="/projects/rambla-vista" style={{ color: "#3F6FEC" }}>
                    See Rambla Vista
                  </Link>
                </p>
              </div>

              <div className="rounded-xl border border-gray-300 bg-white p-8 text-center shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">Student & Institutional Housing</h2>
                <p className="mt-4 text-gray-600">
                  Fire-rated construction, strong sound isolation between units,
                  and low maintenance requirements. Suitable for dormitories,
                  faculty housing, and similar multi-unit residential uses.
                </p>
              </div>

              <div className="rounded-xl border border-gray-300 bg-white p-8 text-center shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">Urban Infill & Mixed-Use</h2>
                <p className="mt-4 text-gray-600">
                  Non-combustible construction and high acoustic separation remove
                  many of the typical cost and complexity penalties of mid-rise
                  mixed-use development. Supports efficient 3–4 story projects
                  with retail, office, and residential combinations.
                </p>
                <p className="mt-4 text-sm">
                  <Link href="/projects/anheuser-busch-van-nuys" style={{ color: "#3F6FEC" }}>
                    See Anheuser-Busch commercial work
                  </Link>
                </p>
              </div>

              <div className="rounded-xl border border-gray-300 bg-white p-8 text-center shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">Security & Perimeter Walls</h2>
                <p className="mt-4 text-gray-600">
                  Strong, customizable wall systems that deliver security
                  performance without the weight and construction complexity of
                  traditional concrete masonry.
                </p>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            <div className="px-6 py-10 text-center md:px-10">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                One system, multiple project types
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
                Because the same panel system provides structure, insulation, fire
                resistance, and thermal mass, project teams can apply a consistent
                construction logic across different building types. This reduces
                complexity and supports more predictable performance outcomes.
              </p>
              <div className="mt-8">
                <Link
                  href="/platform"
                  className="inline-block rounded-md px-6 py-3 text-sm font-medium text-white hover:opacity-90"
                  style={{ backgroundColor: "#3F6FEC" }}
                >
                  Learn about the Platform
                </Link>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-gray-100 p-6 text-center shadow-sm md:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Discuss your project type
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Tell us about the building type and performance goals. We can help
              evaluate how RIPS and the broader platform approach apply.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block rounded-md px-8 py-3 text-sm font-medium text-white hover:opacity-90"
                style={{ backgroundColor: "#3F6FEC" }}
              >
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function ApplicationsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Project Types
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Applications
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              RIPS panels support a wide range of building types. The
              combination of full structural capability, non-combustible
              construction, high thermal mass, and rapid installation creates
              advantages across residential, institutional, and mixed-use
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-gray-900">
                Affordable & Workforce Housing
              </h2>
              <p className="mt-4 text-gray-600">
                Faster delivery timelines combined with durable, low-maintenance
                construction and strong energy performance. The system supports
                both single buildings and larger developments where speed and
                long-term operating costs matter.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-gray-900">
                Disaster Recovery & Resilience
              </h2>
              <p className="mt-4 text-gray-600">
                Structures engineered to withstand extreme events — high winds,
                seismic forces, flooding, and fire. Rapid deployment capability
                makes the system suitable for recovery housing and resilient
                community facilities.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-gray-900">
                Luxury Homes & Resorts
              </h2>
              <p className="mt-4 text-gray-600">
                Superior insulation, acoustic performance, and structural
                integrity. The system supports high-quality finishes while
                delivering wildfire resistance and long-term durability in
                demanding environments.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-gray-900">
                Student & Institutional Housing
              </h2>
              <p className="mt-4 text-gray-600">
                Fire-rated construction, strong sound isolation between units,
                and low maintenance requirements. Suitable for dormitories,
                faculty housing, and similar multi-unit residential uses.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-gray-900">
                Urban Infill & Mixed-Use
              </h2>
              <p className="mt-4 text-gray-600">
                Non-combustible construction and high acoustic separation remove
                many of the typical cost and complexity penalties of mid-rise
                mixed-use development. Supports efficient 3–4 story projects
                with retail, office, and residential combinations.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-gray-900">
                Security & Perimeter Walls
              </h2>
              <p className="mt-4 text-gray-600">
                Strong, customizable wall systems that deliver security
                performance without the weight and construction complexity of
                traditional concrete masonry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Note */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight">
              One system, multiple project types
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Because the same panel system provides structure, insulation, fire
              resistance, and thermal mass, project teams can apply a consistent
              construction logic across different building types. This reduces
              complexity and supports more predictable performance outcomes.
            </p>
            <div className="mt-8">
              <Link
                href="/platform"
                className="inline-block rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
              >
                Learn about the Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
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
              className="inline-block rounded-md bg-gray-900 px-8 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

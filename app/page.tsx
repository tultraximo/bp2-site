import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              BP2 RIPS Building Systems
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Code-compliant structural panels that deliver a high-performance
              building platform
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Blue Planet RIPS (Reinforced Insulated Panel System) provides full
              structural capability for walls, roofs, and floors while meeting
              IRC and IBC requirements without special engineering reports. The
              resulting airtight, high-mass envelope creates the foundation for
              lower peak loads, greater resilience, and integrated
              high-performance systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/rips"
                className="rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
              >
                Explore the RIPS System
              </Link>
              <Link
                href="/platform"
                className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                High-Performance Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiator */}
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Fully Code Compliant
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Meets IRC & IBC requirements. Follows ACI 318. No special
                Engineering Report required — unlike many other structural
                concrete insulated panels.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Full Structural Capability
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Engineered for the entire building: walls, roofs, and floors.
                Adjustable and designed like conventional concrete structures.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                High-Mass Airtight Envelope
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Isolated concrete shells on every interior surface create
                significant thermal mass and near-zero infiltration — enabling
                lower peak loads and a true thermal flywheel effect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Highlights */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Built for performance and resilience
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              RIPS panels are engineered to outperform conventional methods
              across the metrics that matter most to architects, engineers, and
              owners.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">Non-Combustible</h3>
              <p className="mt-2 text-sm text-gray-600">
                Concrete shells on all sides. Inherent fire resistance supports
                safer mid-rise and mixed-use design.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">High Insulation</h3>
              <p className="mt-2 text-sm text-gray-600">
                Foam core plus concrete layers deliver strong thermal and sound
                performance (typically STC ~50 range).
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">
                Extreme Durability
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Resists hurricanes, tornadoes, earthquakes, floods, mold, pests,
                and more.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">
                Faster Construction
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                30–50% quicker installation than traditional methods while
                delivering a finished structural and insulated assembly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Teaser */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              More than panels — a high-performance building platform
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              The combination of full structural capability, near-zero air
              leakage, and substantial isolated thermal mass on every interior
              surface changes how the building behaves. Peak loads are buffered.
              HVAC can be approached differently. Supporting systems for air
              quality, connectivity, and resilience become natural extensions of
              the envelope rather than afterthoughts.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              This is the foundation for lower operational energy, greater
              comfort stability, and building types (including mid-rise
              mixed-use and occupied rooftop living) that are often penalized in
              conventional construction.
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

      {/* Applications Snapshot */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Where RIPS delivers
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From resilient housing to urban infill, the system supports a wide
              range of project types.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Affordable & Workforce Housing",
                desc: "Faster delivery with lasting durability and lower energy costs.",
              },
              {
                title: "Disaster Recovery & Resilience",
                desc: "Rapid deployment of structures built to withstand extreme events.",
              },
              {
                title: "Luxury & Resort",
                desc: "Superior insulation, wildfire resistance, and structural integrity.",
              },
              {
                title: "Student & Institutional",
                desc: "Low-maintenance, fire-rated, and acoustically strong spaces.",
              },
              {
                title: "Urban Infill & Mixed-Use",
                desc: "Non-combustible construction and high sound isolation support efficient mid-rise development.",
              },
              {
                title: "Security & Perimeter",
                desc: "Strong, customizable wall systems without the weight of traditional concrete block.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-gray-200 p-6"
              >
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/applications"
              className="text-sm font-medium text-gray-900 underline-offset-4 hover:underline"
            >
              View all applications →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Ready to evaluate RIPS for your next project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Architects and engineers — reach out to discuss structural
            performance, envelope behavior, and integration opportunities.
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

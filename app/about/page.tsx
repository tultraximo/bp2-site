import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Company
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              About Blue Planet
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Blue Planet develops and advances panelized building systems
              designed to outperform conventional construction in durability,
              speed, energy behavior, and resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Building systems for higher performance
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Our core product, the RIPS (Reinforced Insulated Panel System),
              provides full structural capability for walls, roofs, and floors
              while meeting national building codes without the special
              engineering reports required by many other structural concrete
              insulated panels.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Beyond the panel itself, we focus on the performance of the
              complete building envelope. The combination of isolated thermal
              mass, near-zero air infiltration, non-combustible construction,
              and rapid installation creates the foundation for lower peak
              loads, greater resilience, and more integrated high-performance
              design.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight">
              A platform approach
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              We view RIPS as more than a component. It is the starting point
              for a high-performance building platform — one in which structure,
              thermal behavior, air and moisture management, and resilience
              measures reinforce each other rather than compete.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              This approach supports a wide range of project types, from
              resilient housing and institutional buildings to urban infill and
              mixed-use development, while giving architects and engineers a
              clearer, more predictable performance path.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Work with us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Whether you are evaluating the system for a current project or
            exploring longer-term collaboration, we welcome the conversation.
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

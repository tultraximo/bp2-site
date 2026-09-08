import Link from "next/link";

export const metadata = {
  title: "BP2 RIPS Technical Specs | IRC, IBC, ACI 318",
  description:
    "Technical overview of BP2 RIPS panels: code compliance, structural capability, thermal mass, airtightness, fire rating, and acoustic performance.",
};

export default function TechnicalPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              For Architects & Engineers
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Technical Resources
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Key performance characteristics and design implications of the BP2
              RIPS system. This page provides a high-level technical overview
              intended to support early project evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Technical Points */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Core technical characteristics
          </h2>

          <div className="mt-10 space-y-8">
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900">
                Code Compliance Path
              </h3>
              <p className="mt-3 text-gray-600">
                RIPS panels are designed to meet IRC and IBC requirements. They
                follow ACI 318 (the official concrete design code) and can be
                adjusted and engineered in a manner consistent with conventional
                concrete structures. In contrast to many other structural
                concrete insulated panels, a special Engineering Report is not
                required for code compliance in typical applications.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900">
                Structural Capability
              </h3>
              <p className="mt-3 text-gray-600">
                The system is engineered for full building structural
                responsibility — walls, roofs, and floors. This allows a
                consistent panelized approach across the primary structural
                elements rather than limiting the system to wall-only
                applications.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900">
                Envelope Performance — Thermal Mass & Airtightness
              </h3>
              <p className="mt-3 text-gray-600">
                Interior concrete shells are thermally isolated from the
                exterior. Every interior surface contributes mass while the
                overall assembly achieves near-zero air infiltration. The
                resulting thermal flywheel effect buffers temperature swings and
                reduces peak loads that mechanical systems must address.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900">
                Fire & Acoustic Performance
              </h3>
              <p className="mt-3 text-gray-600">
                Concrete shells on all sides provide non-combustible
                construction. Sound isolation typically falls in the STC ~50
                range, supporting acoustic separation between units and between
                different program types in mixed-use buildings.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Construction Speed
              </h3>
              <p className="mt-3 text-gray-600">
                Panelized installation is typically 30–50% faster than
                traditional methods while delivering structure and insulation in
                a single assembly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Implications */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Design implications
            </h2>
            <ul className="mt-8 space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="font-bold text-gray-900">•</span>
                <span>
                  Opportunity to right-size mechanical systems because of
                  reduced peak loads from thermal mass and airtightness.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gray-900">•</span>
                <span>
                  Advantages in mid-rise and mixed-use projects where
                  non-combustibility and acoustic performance reduce typical
                  code and detailing complexity.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gray-900">•</span>
                <span>
                  Consistent structural and envelope logic across walls, floors,
                  and roofs supports more predictable detailing and construction
                  sequencing.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gray-900">•</span>
                <span>
                  Platform thinking opens integration paths for ventilation
                  strategy, thermal systems, and resilience measures that work
                  with the envelope rather than against it.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Next steps for project teams
            </h2>
            <p className="mt-6 text-gray-600">
              This page provides a high-level overview. For specific projects we
              recommend direct discussion regarding structural design
              parameters, load conditions, connection details, and integration
              with mechanical and ventilation strategies.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
              >
                Contact for Technical Discussion
              </Link>
              <Link
                href="/rips"
                className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                RIPS System Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

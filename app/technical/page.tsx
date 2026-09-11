import Link from "next/link";

export const metadata = {
  title: "BP2 RIPS Technical Specs | IRC, IBC, ACI 318",
  description:
    "Technical overview of BP2 RIPS panels: code compliance, structural capability, thermal mass, airtightness, fire rating, and acoustic performance.",
};

export default function TechnicalPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-3 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8">
        <div className="space-y-6">
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            <div className="px-6 py-10 text-center md:px-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                For Architects & Engineers
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Technical Resources
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
                Key performance characteristics and design implications of the BP2
                RIPS system. This page provides a high-level technical overview
                intended to support early project evaluation.
              </p>
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-gray-100 shadow-sm">
            <div className="px-6 py-10 md:px-10">
              <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-gray-900">
                Core technical characteristics
              </h2>

              <div className="space-y-4">
                <div className="rounded-xl border border-gray-300 bg-white p-6 text-center shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">Code Compliance Path</h3>
                  <p className="mt-3 text-gray-600">
                    RIPS panels are designed to meet IRC and IBC requirements. They
                    follow ACI 318 (the official concrete design code) and can be
                    adjusted and engineered in a manner consistent with conventional
                    concrete structures. In contrast to many other structural
                    concrete insulated panels, a special Engineering Report is not
                    required for code compliance in typical applications.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-300 bg-white p-6 text-center shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">Structural Capability</h3>
                  <p className="mt-3 text-gray-600">
                    The system is engineered for full building structural
                    responsibility — walls, roofs, and floors. This allows a
                    consistent panelized approach across the primary structural
                    elements rather than limiting the system to wall-only
                    applications.
                  </p>
                  <p className="mt-3 text-sm">
                    <Link href="/projects/carson-culver-city" style={{ color: "#3F6FEC" }}>
                      See Carson Street
                    </Link>
                    {" · "}
                    <Link href="/projects/rambla-orienta" style={{ color: "#3F6FEC" }}>
                      See Rambla Orienta
                    </Link>
                  </p>
                </div>

                <div className="rounded-xl border border-gray-300 bg-white p-6 text-center shadow-sm">
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
                  <p className="mt-3 text-sm">
                    <Link href="/projects/forchelli-driggs" style={{ color: "#3F6FEC" }}>
                      See Forchelli basement
                    </Link>
                  </p>
                </div>

                <div className="rounded-xl border border-gray-300 bg-white p-6 text-center shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">Fire & Acoustic Performance</h3>
                  <p className="mt-3 text-gray-600">
                    Concrete shells on all sides provide non-combustible
                    construction. Sound isolation typically falls in the STC ~50
                    range, supporting acoustic separation between units and between
                    different program types in mixed-use buildings.
                  </p>
                  <p className="mt-3 text-sm">
                    <Link href="/projects/lorenzo-fire-rebuild" style={{ color: "#3F6FEC" }}>
                      See Lorenzo fire rebuild
                    </Link>
                    {" · "}
                    <Link href="/projects/rambla-vista" style={{ color: "#3F6FEC" }}>
                      See Rambla Vista
                    </Link>
                  </p>
                </div>

                <div className="rounded-xl border border-gray-300 bg-white p-6 text-center shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">Construction Speed</h3>
                  <p className="mt-3 text-gray-600">
                    Panelized installation is typically 30–50% faster than
                    traditional methods while delivering structure and insulation in
                    a single assembly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            <div className="px-6 py-10 md:px-10">
              <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
                Design implications
              </h2>
              <div className="mx-auto mt-8 max-w-3xl space-y-4">
                <div className="rounded-xl border border-gray-300 bg-gray-50 p-5 text-center shadow-sm">
                  Opportunity to right-size mechanical systems because of reduced
                  peak loads from thermal mass and airtightness.
                </div>
                <div className="rounded-xl border border-gray-300 bg-gray-50 p-5 text-center shadow-sm">
                  Advantages in mid-rise and mixed-use projects where
                  non-combustibility and acoustic performance reduce typical code
                  and detailing complexity.
                </div>
                <div className="rounded-xl border border-gray-300 bg-gray-50 p-5 text-center shadow-sm">
                  Consistent structural and envelope logic across walls, floors,
                  and roofs supports more predictable detailing and construction
                  sequencing.
                </div>
                <div className="rounded-xl border border-gray-300 bg-gray-50 p-5 text-center shadow-sm">
                  Platform thinking opens integration paths for ventilation
                  strategy, thermal systems, and resilience measures that work
                  with the envelope rather than against it.
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-gray-100 p-6 text-center shadow-sm md:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Next steps for project teams
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-gray-600">
              This page provides a high-level overview. For specific projects we
              recommend direct discussion regarding structural design parameters,
              load conditions, connection details, and integration with mechanical
              and ventilation strategies.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md px-6 py-3 text-sm font-medium text-white hover:opacity-90"
                style={{ backgroundColor: "#3F6FEC" }}
              >
                Contact for Technical Discussion
              </Link>
              <Link
                href="/rips"
                className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-black hover:bg-[#3F6FEC] hover:text-white"
              >
                RIPS System Overview
              </Link>
              <Link
                href="/projects"
                className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-black hover:bg-[#3F6FEC] hover:text-white"
              >
                View projects
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

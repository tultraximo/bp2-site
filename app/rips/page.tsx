import Link from "next/link";

export const metadata = {
  title: "BP2 RIPS vs SCIP | Reinforced Insulated Panel System",
  description:
    "BP2 RIPS is a fully engineered structural concrete insulated panel system. Compare RIPS to other SCIPs, ICFs, and SIPs. IRC, IBC, and ACI 318 code path.",
};

export default function RipsPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-3 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8">
        <div className="space-y-6">
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            <div className="px-6 py-10 text-center md:px-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Core Product
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                The RIPS System
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
                RIPS (Reinforced Insulated Panel System) is Blue Planet’s advanced
                panelized building system. It delivers full structural capability
                for walls, roofs, and floors while meeting national building codes
                without the need for special engineering reports required by many
                other structural concrete insulated panels.
              </p>
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-gray-100 shadow-sm">
            <div className="px-6 py-10 md:px-10">
              <div className="mx-auto mb-8 max-w-3xl rounded-xl border border-gray-300 bg-white px-6 py-5 text-center shadow-sm">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Why RIPS stands apart
                </h2>
                <p className="mt-4 text-gray-600">
                  Most structural concrete insulated panels (SCIPs) require a special
                  Engineering Report (ER) to be used. RIPS is designed to meet IRC and
                  IBC requirements directly and follows ACI 318 — the official
                  concrete design code. The panels can be adjusted and engineered like
                  conventional concrete structures.
                </p>
              </div>

              <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-900">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Capability</th>
                      <th className="px-6 py-4 font-semibold">BP2 RIPS</th>
                      <th className="px-6 py-4 font-semibold">Typical Other SCIPs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Meets IRC & IBC</td>
                      <td className="px-6 py-4 text-gray-700">Yes — built-in</td>
                      <td className="px-6 py-4 text-gray-700">Often requires special ER</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Full Structural Capability</td>
                      <td className="px-6 py-4 text-gray-700">Walls, roofs, and floors</td>
                      <td className="px-6 py-4 text-gray-700">Often limited to walls</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Engineered Like Concrete</td>
                      <td className="px-6 py-4 text-gray-700">Yes (ACI 318)</td>
                      <td className="px-6 py-4 text-gray-700">Limited</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Code Compliance Path</td>
                      <td className="px-6 py-4 text-gray-700">Direct</td>
                      <td className="px-6 py-4 text-gray-700">Special report frequently needed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            <div className="px-6 py-10 md:px-10">
              <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-gray-900">
                Performance characteristics
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-300 bg-gray-50 p-6 text-center shadow-sm">
                  <h3 className="font-semibold text-gray-900">Non-Combustible</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Concrete shells on all sides. This inherent fire resistance is
                    particularly valuable for mid-rise and mixed-use projects where
                    combustibility creates significant code and insurance complexity.
                  </p>
                  <p className="mt-3 text-sm">
                    <Link href="/projects/lorenzo-fire-rebuild" style={{ color: "#3F6FEC" }}>
                      See Lorenzo fire rebuild
                    </Link>
                  </p>
                </div>
                <div className="rounded-xl border border-gray-300 bg-gray-50 p-6 text-center shadow-sm">
                  <h3 className="font-semibold text-gray-900">Thermal & Acoustic Performance</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    The foam core combined with concrete layers provides strong
                    thermal insulation and sound isolation (typically in the STC ~50
                    range), supporting both energy performance and acoustic
                    separation between spaces.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-300 bg-gray-50 p-6 text-center shadow-sm">
                  <h3 className="font-semibold text-gray-900">Durability & Resilience</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Engineered to resist hurricanes, tornadoes, earthquakes, floods,
                    mold, pests, and more. The system is designed for long-term
                    structural integrity under demanding conditions.
                  </p>
                  <p className="mt-3 text-sm">
                    <Link href="/projects/rambla-vista" style={{ color: "#3F6FEC" }}>
                      See Rambla Vista, Malibu
                    </Link>
                  </p>
                </div>
                <div className="rounded-xl border border-gray-300 bg-gray-50 p-6 text-center shadow-sm">
                  <h3 className="font-semibold text-gray-900">Speed of Construction</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Installation is typically 30–50% faster than traditional
                    construction methods while delivering a finished structural and
                    insulated assembly in one step.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-gray-100 shadow-sm">
            <div className="px-6 py-10 text-center md:px-10">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                The high-mass airtight envelope advantage
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
                RIPS panels create isolated concrete shells on the interior of the
                building. Every wall, floor, and ceiling surface contributes
                thermal mass while remaining thermally broken from the exterior.
                Combined with near-zero air infiltration, the result is a building
                envelope with significant thermal flywheel effect.
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">
                This changes how the building responds to temperature swings and
                reduces the peak loads that mechanical systems must handle. It is
                one of the core reasons the RIPS system becomes the foundation for
                a broader high-performance building platform.
              </p>
              <div className="mt-8">
                <Link
                  href="/platform"
                  className="inline-block rounded-md px-6 py-3 text-sm font-medium text-white hover:opacity-90"
                  style={{ backgroundColor: "#3F6FEC" }}
                >
                  Explore the High-Performance Platform
                </Link>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white p-6 text-center shadow-sm md:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Evaluate RIPS for your project
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Architects and engineers — contact us to discuss structural
              performance, code path, envelope behavior, and integration
              opportunities.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-block rounded-md px-8 py-3 text-sm font-medium text-white hover:opacity-90"
                style={{ backgroundColor: "#3F6FEC" }}
              >
                Contact Us
              </Link>
              <Link
                href="/projects"
                className="inline-block rounded-md border border-gray-300 bg-white px-8 py-3 text-sm font-medium text-black hover:bg-[#3F6FEC] hover:text-white"
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

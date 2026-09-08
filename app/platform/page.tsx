import Link from "next/link";

export const metadata = {
  title: "RIPS High-Performance Building Platform | Thermal Mass Envelope",
  description:
    "How BP2 RIPS creates an isolated high-mass airtight envelope that behaves like a thermal battery and supports smaller mechanical systems.",
};

export default function PlatformPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              System Thinking
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              High-Performance Building Platform
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              RIPS panels create more than a structural and insulated enclosure.
              They produce an airtight, high-mass envelope that fundamentally
              changes how a building behaves thermally and how mechanical
              systems can be approached. This is the foundation of a broader
              high-performance platform.
            </p>
          </div>
        </div>
      </section>

      {/* Core Idea */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              The building as a thermal battery
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Because every interior surface (walls, floors, and ceilings)
              delivers isolated concrete mass, the structure itself stores and
              releases thermal energy. Combined with near-zero air infiltration,
              the result is a significant thermal flywheel effect. Peak loads
              are buffered. Temperature swings are moderated. Mechanical systems
              can be designed closer to average conditions rather than extreme
              peaks.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              This is one of the most important performance advantages of the
              RIPS system and the starting point for integrated design.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Layers */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Integrated platform layers
          </h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            The envelope performance created by RIPS naturally supports and
            reinforces several complementary systems.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                1. Structure & Envelope
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Full structural capability, non-combustible construction, high
                insulation, near-zero infiltration, and substantial isolated
                thermal mass on all interior surfaces.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                2. Thermal Systems
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                The high-mass airtight envelope enables lower peak loads and
                opens the door to more efficient hybrid approaches — including
                ground-coupled cooling, solar thermal input, and strategic
                thermal storage.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                3. Air & Moisture Control
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Extremely tight construction requires deliberate fresh-air and
                humidity management. Balanced ventilation and dewpoint-aware
                control become essential parts of the system rather than
                optional add-ons.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                4. Connectivity & Resilience
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                The same construction characteristics that deliver performance
                also influence acoustic isolation and signal behavior. Planned
                infrastructure for communication, controls, and energy systems
                becomes a natural extension of the platform.
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
              Design implications for architects and engineers
            </h2>
            <ul className="mt-8 space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="font-bold text-gray-900">•</span>
                <span>
                  Predictable structural and code path (IRC/IBC compliance
                  without special ER in many cases, ACI 318 alignment).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gray-900">•</span>
                <span>
                  Reduced peak mechanical loads due to thermal mass and
                  airtightness — opportunity for right-sized systems.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gray-900">•</span>
                <span>
                  Strong advantages in mid-rise and mixed-use projects where
                  non-combustibility and acoustic separation remove typical cost
                  and complexity penalties.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gray-900">•</span>
                <span>
                  Support for multi-function roofs and higher-performance
                  envelope strategies that are difficult or expensive in
                  conventional construction.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Discuss platform integration for your project
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            We work with architects and engineers to evaluate how the RIPS
            envelope and platform approach can support structural, thermal, and
            resilience goals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-gray-900 px-8 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Contact Us
            </Link>
            <Link
              href="/rips"
              className="rounded-md border border-gray-300 bg-white px-8 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Back to RIPS System
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

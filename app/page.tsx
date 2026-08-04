import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
<div className="min-h-screen bg-gray-100 px-4 py-3 sm:px-6">      {/* Large outer encapsulating card – off white */}
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8">
        <div className="space-y-6">

          {/* Logo Card */}
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            <div className="flex justify-center px-6 py-10 md:px-10">
              <Image
                src="/logo.png"
                alt="Blue Planet Building Panels"
                width={800}
                height={300}
                className="h-auto w-auto max-w-full"
                priority
              />
            </div>
          </section>

          {/* Hero Text Card */}
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-gray-100 shadow-sm">
            <div className="px-6 py-12 text-center md:px-10">
              <p className="text-3xl font-semibold tracking-wide text-gray-600">
                High-Performance Building Systems
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                BP2 RIPS Building Systems
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-700">
                Code-compliant structural panels that deliver a high-performance building
                platform — full structural capability, exceptional thermal mass, and the
                foundation for lower-energy, resilient buildings.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/rips"
                  className="rounded-md px-6 py-3 text-sm font-medium text-white hover:opacity-90"
                  style={{ backgroundColor: "#3F6FEC" }}
                >
                  The RIPS System
                </Link>
                <Link
                  href="/platform"
                  className="rounded-md border bg-white px-6 py-3 text-sm font-medium hover:bg-gray-50"
                  style={{ borderColor: "#3F6FEC", color: "#3F6FEC" }}
                >
                  High-Performance Platform
                </Link>
              </div>
            </div>
          </section>

          {/* Differentiator card */}
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            <div className="grid gap-6 p-6 md:grid-cols-3 md:p-8">
              <div className="rounded-lg border border-gray-300 bg-gray-100 p-5 text-center shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Fully Code Compliant</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Meets IRC and IBC requirements. Designed to ACI 318. No special Engineering
                  Report required in typical applications.
                </p>
              </div>
              <div className="rounded-lg border border-gray-300 bg-gray-100 p-5 text-center shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Full Structural Capability</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Engineered for walls, roofs, and floors — a complete structural system rather
                  than a wall-only solution.
                </p>
              </div>
              <div className="rounded-lg border border-gray-300 bg-gray-100 p-5 text-center shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">High-Mass Airtight Envelope</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Isolated concrete shells deliver significant thermal mass and near-zero air
                  infiltration — the foundation of a high-performance platform.
                </p>
              </div>
            </div>
          </section>

          {/* Performance section */}
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-gray-100 shadow-sm">
            <div className="px-6 py-10 md:px-10">
              <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
                Built for performance and resilience
              </h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-gray-300 bg-white p-6 text-center shadow-sm">
                  <h3 className="font-semibold text-gray-900">Non-Combustible</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Concrete shells on all sides. Strong advantages for mid-rise and mixed-use
                    projects.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-300 bg-white p-6 text-center shadow-sm">
                  <h3 className="font-semibold text-gray-900">Thermal Insulation</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Foam core + isolated mass deliver strong thermal performance and reduced
                    peak loads.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-300 bg-white p-6 text-center shadow-sm">
                  <h3 className="font-semibold text-gray-900">Sound Insulation</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Standard residential walls typically rate STC 33–36. BP2 panels deliver STC 50
                    as standard — already well above conventional construction. STC 58 (suitable
                    for party walls and secure conference rooms) is readily achievable by adding
                    approximately 2 inch of concrete to the skin.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-300 bg-white p-6 text-center shadow-sm">
                  <h3 className="font-semibold text-gray-900">Extreme Durability</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Engineered to resist hurricanes, earthquakes, fire, floods, mold, and pests.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-300 bg-white p-6 text-center shadow-sm">
                  <h3 className="font-semibold text-gray-900">Faster Construction</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Panelized installation is typically 30–50% faster than traditional methods.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Platform Card */}
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            <div className="px-6 py-12 text-center md:px-10">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                More than panels — a high-performance building platform
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
                RIPS creates an airtight, high-mass envelope that changes how a building
                behaves thermally. Peak loads are buffered. Mechanical systems can be
                right-sized. The structure itself becomes a thermal battery.
              </p>
              <div className="mt-8">
                <Link
                  href="/platform"
                  className="inline-block rounded-md px-6 py-3 text-sm font-medium text-white hover:opacity-90"
                  style={{ backgroundColor: "#3F6FEC" }}
                >
                  Explore the Platform
                </Link>
              </div>
            </div>
          </section>

          {/* Applications section */}
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-gray-100 shadow-sm">
            <div className="px-6 py-10 md:px-10">
              <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
                Where RIPS delivers
              </h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Affordable & Workforce Housing",
                  "Disaster Recovery & Resilience",
                  "Luxury & Resort",
                  "Student & Institutional",
                  "Urban Infill & Mixed-Use",
                  "Security & Perimeter",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-gray-300 bg-white p-6 text-center text-sm font-medium text-gray-900 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/applications"
                  className="text-sm font-medium hover:underline"
                  style={{ color: "#3F6FEC" }}
                >
                  View all applications →
                </Link>
              </div>
            </div>
          </section>

          {/* Final CTA Card */}
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            <div className="px-6 py-12 text-center md:px-10">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Evaluate RIPS for your next project
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-gray-600">
                Architects and engineers — contact us to discuss structural performance,
                code path, envelope behavior, and integration opportunities.
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
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

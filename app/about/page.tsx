import Link from "next/link";

export const metadata = {
  title: "About Blue Planet Building Panels",
  description:
    "Blue Planet develops panelized building systems designed to outperform conventional construction in durability, speed, energy behavior, and resilience.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-3 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8">
        <div className="space-y-6">
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white px-6 py-10 text-center shadow-sm md:px-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Company</p>
            <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">About Blue Planet</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700">
              Blue Planet develops and advances panelized building systems designed
              to outperform conventional construction in durability, speed, energy
              behavior, and resilience.
            </p>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-gray-100 p-6 text-center shadow-sm md:p-10">
            <h2 className="text-2xl font-bold text-gray-900">Building systems for higher performance</h2>
            <p className="mx-auto mt-4 max-w-3xl text-gray-700">
              Our core product, the RIPS (Reinforced Insulated Panel System), provides
              full structural capability for walls, roofs, and floors while meeting
              national building codes without the special engineering reports required
              by many other structural concrete insulated panels.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-gray-700">
              Beyond the panel itself, we focus on the performance of the complete
              building envelope. The combination of isolated thermal mass, near-zero
              air infiltration, non-combustible construction, and rapid installation
              creates the foundation for lower peak loads, greater resilience, and more
              integrated high-performance design.
            </p>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white p-6 text-center shadow-sm md:p-10">
            <h2 className="text-2xl font-bold text-gray-900">A platform approach</h2>
            <p className="mx-auto mt-4 max-w-3xl text-gray-700">
              We view RIPS as more than a component. It is the starting point for a
              high-performance building platform — one in which structure, thermal
              behavior, air and moisture management, and resilience measures reinforce
              each other rather than compete.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-gray-700">
              This approach supports a wide range of project types, from resilient
              housing and institutional buildings to urban infill and mixed-use
              development, while giving architects and engineers a clearer, more
              predictable performance path.
            </p>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-gray-100 p-6 text-center shadow-sm md:p-10">
            <h2 className="text-2xl font-bold text-gray-900">Work with us</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Whether you are evaluating the system for a current project or exploring
              longer-term collaboration, we welcome the conversation.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block rounded-md px-8 py-3 text-sm font-medium text-white"
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

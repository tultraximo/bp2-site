import Link from "next/link";

export const metadata = {
  title: "BP2 RIPS FAQ | Fire Rating, R-40, Code Path",
  description:
    "Answers on BP2 SCIPs and RIPS: fire rating, R-40 performance, STC, codes, comparisons to ICFs and SIPs, and construction details.",
};

export default function FaqPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Questions & Answers
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Clear answers to common questions about the BP2 RIPS system,
              performance, comparisons, and construction details.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 space-y-12">
          {/* System Basics */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
              System Basics
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="font-semibold text-gray-900">
                  What are BP2 SCIPs / RIPS panels?
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  BP2 RIPS (Reinforced Insulated Panel System) panels are
                  prefabricated structural panels made from a welded wire frame
                  with a layer of foam insulation (typically EPS) in the middle.
                  After the panels are set in place, they are coated with
                  pneumatically-placed concrete to form durable interior and
                  exterior shells. The result is a strong, insulated,
                  non-combustible structure that can be used for walls, roofs,
                  and floors.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Are all SCIPs the same?
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  No. Most SCIP manufacturers offer a fixed panel design that
                  engineers must work around. BP2 RIPS panels are fully
                  engineered and customizable. The truss, wire mesh, foam core,
                  and concrete skins can all be adjusted to meet the specific
                  structural requirements of a project.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Do BP2 RIPS panels meet building codes?
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Yes. Because the panels are fully engineered and adjustable,
                  they can be designed to meet IRC, IBC, and other relevant
                  codes. They follow ACI 318 principles and can be configured
                  like conventional concrete structures rather than relying on a
                  special Engineering Report required by many other SCIP
                  systems.
                </p>
              </div>
            </div>
          </div>

          {/* Performance */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
              Performance
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="font-semibold text-gray-900">
                  What is the R-Value / thermal performance?
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  BP2 panels deliver approximately R-40 performance when
                  evaluated using standard methods (ASHRAE / California Title 20
                  approaches). The combination of the foam core, isolated
                  concrete shells, and near-zero air infiltration creates both
                  high insulation and significant thermal mass.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  What about thermal bridging?
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  BP2 panels have very low thermal bridging. The thin truss web
                  wires are small in cross-section and spaced in a way that
                  limits heat transfer through the panel.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  What is the sound rating (STC)?
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  BP2 panels have been tested to achieve an STC rating of
                  approximately 40, suitable for apartment party walls, music
                  rooms, and conference rooms. Higher performance configurations
                  are also possible.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  What is the fire rating?
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  BP2 panels provide at least a 90-minute fire rating and can
                  withstand temperatures up to 1800°F for that duration without
                  loss of structural integrity. The concrete shells on both
                  sides make the assembly non-combustible.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Are the panels disaster / hurricane / tornado / earthquake
                  resistant?
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Yes. The system can be engineered to resist winds over 180 mph
                  (beyond Category 5 hurricane speeds). Buildings have survived
                  EF-3 tornadoes with only minor non-structural damage. Fully
                  panelized structures can be designed for seismic events
                  stronger than magnitude 8.0. The system also performs well
                  against flooding, mold, and pests.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Are BP2 panels “green”?
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  BP2 panels have high recycled content (approximately 40% by
                  weight and 60% by volume) and all manufacturing waste is
                  recyclable. The system’s strong energy performance can
                  significantly reduce heating and cooling loads, supporting
                  lower operating energy and smaller mechanical systems.
                </p>
              </div>
            </div>
          </div>

          {/* Comparisons */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
              Comparisons
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="font-semibold text-gray-900">
                  How do BP2 RIPS compare to ICFs and SIPs?
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  ICFs are typically limited to exterior walls and usually
                  require drywall for fire protection; roofs and interior walls
                  are built with conventional materials. SIPs generally also
                  require drywall for fire safety and are most often used for
                  exterior assemblies. BP2 RIPS panels can be used for exterior
                  walls, interior walls, roofs, and floors with no wood or
                  drywall required for the primary structure.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  How do BP2 RIPS compare to other SCIP systems?
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Most other SCIP systems offer a fixed panel that engineers
                  must adapt on site. BP2 RIPS panels are designed to be fully
                  engineered and adjustable (truss, mesh, core, and skins) so
                  the panel itself can be configured to the project’s structural
                  requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Applications & Details */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
              Applications & Construction Details
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Where can BP2 panels be used?
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Anywhere conventional construction is permitted. The system
                  has been used for residential, multi-family, commercial, light
                  industrial, and institutional projects, including in high
                  seismic and high wind zones. There are no inherent style
                  limitations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Can the panels be used for interior walls, roofs, floors, and
                  basements?
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Yes. BP2 panels are regularly used for all of these
                  applications and provide built-in insulation when used for
                  basements.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  How are doors and windows installed?
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Steel masonry frames or fiberglass frames are recommended and
                  are typically set in place before the concrete skins are
                  applied so they become locked into the structure. Wood bucks
                  are less preferred for long-term durability, high-wind, and
                  fire performance.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Can BP2 panels be used for swimming pools?
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Yes. The system has been used for pools, spas, and fountains.
                  The insulated panels help reduce heat loss through the
                  submerged surfaces.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  How long do BP2 buildings last?
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Concrete structures of this type typically last 50 years at
                  minimum and can exceed 100 years with proper design and
                  maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Still have questions?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Reach out to discuss your specific project or technical
            requirements.
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

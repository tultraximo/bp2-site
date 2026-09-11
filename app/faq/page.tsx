export const metadata = {
  title: "BP2 RIPS FAQ | Codes, STC, Fire, Construction",
  description:
    "Frequently asked questions about BP2 RIPS / SCIP panels: codes, R-value, STC, fire rating, comparisons, and construction details.",
};

const groups = [
  {
    heading: "System Basics",
    items: [
      {
        q: "What are BP2 SCIPs / RIPS panels?",
        a: "BP2 RIPS (Reinforced Insulated Panel System) panels are prefabricated structural panels made from a welded wire frame with a layer of foam insulation (typically EPS) in the middle. After the panels are set in place, they are coated with pneumatically-placed concrete to form durable interior and exterior shells. The result is a strong, insulated, non-combustible structure that can be used for walls, roofs, and floors.",
      },
      {
        q: "Are all SCIPs the same?",
        a: "No. Most SCIP manufacturers offer a fixed panel design that engineers must work around. BP2 RIPS panels are fully engineered and customizable. The truss, wire mesh, foam core, and concrete skins can all be adjusted to meet the specific structural requirements of a project.",
      },
      {
        q: "Do BP2 RIPS panels meet building codes?",
        a: "Yes. Because the panels are fully engineered and adjustable, they can be designed to meet IRC, IBC, and other relevant codes. They follow ACI 318 principles and can be configured like conventional concrete structures rather than relying on a special Engineering Report required by many other SCIP systems.",
      },
    ],
  },
  {
    heading: "Performance",
    items: [
      {
        q: "What is the R-Value / thermal performance?",
        a: "BP2 panels deliver approximately R-40 performance when evaluated using standard methods (ASHRAE / California Title 20 approaches). The combination of the foam core, isolated concrete shells, and near-zero air infiltration creates both high insulation and significant thermal mass.",
      },
      {
        q: "What about thermal bridging?",
        a: "BP2 panels have very low thermal bridging. The thin truss web wires are small in cross-section and spaced in a way that limits heat transfer through the panel.",
      },
      {
        q: "What is the sound rating (STC)?",
        a: "BP2 panels have been tested to achieve an STC rating of approximately 40, suitable for apartment party walls, music rooms, and conference rooms. Higher performance configurations are also possible.",
      },
      {
        q: "What is the fire rating?",
        a: "BP2 panels provide at least a 90-minute fire rating and can withstand temperatures up to 1800°F for that duration without loss of structural integrity. The concrete shells on both sides make the assembly non-combustible.",
      },
      {
        q: "Are the panels disaster / hurricane / tornado / earthquake resistant?",
        a: "Yes. The system can be engineered to resist winds over 180 mph (beyond Category 5 hurricane speeds). Buildings have survived EF-3 tornadoes with only minor non-structural damage. Fully panelized structures can be designed for seismic events stronger than magnitude 8.0. The system also performs well against flooding, mold, and pests.",
      },
      {
        q: "Are BP2 panels “green”?",
        a: "BP2 panels have high recycled content (approximately 40% by weight and 60% by volume) and all manufacturing waste is recyclable. The system’s strong energy performance can significantly reduce heating and cooling loads, supporting lower operating energy and smaller mechanical systems.",
      },
    ],
  },
  {
    heading: "Comparisons",
    items: [
      {
        q: "How do BP2 RIPS compare to ICFs and SIPs?",
        a: "ICFs are typically limited to exterior walls and usually require drywall for fire protection; roofs and interior walls are built with conventional materials. SIPs generally also require drywall for fire safety and are most often used for exterior assemblies. BP2 RIPS panels can be used for exterior walls, interior walls, roofs, and floors with no wood or drywall required for the primary structure.",
      },
      {
        q: "How do BP2 RIPS compare to other SCIP systems?",
        a: "Most other SCIP systems offer a fixed panel that engineers must adapt on site. BP2 RIPS panels are designed to be fully engineered and adjustable (truss, mesh, core, and skins) so the panel itself can be configured to the project’s structural requirements.",
      },
    ],
  },
  {
    heading: "Applications & Construction Details",
    items: [
      {
        q: "Where can BP2 panels be used?",
        a: "Anywhere conventional construction is permitted. The system has been used for residential, multi-family, commercial, light industrial, and institutional projects, including in high seismic and high wind zones. There are no inherent style limitations.",
      },
      {
        q: "Can the panels be used for interior walls, roofs, floors, and basements?",
        a: "Yes. BP2 panels are regularly used for all of these applications and provide built-in insulation when used for basements.",
      },
      {
        q: "How are doors and windows installed?",
        a: "Steel masonry frames or fiberglass frames are recommended and are typically set in place before the concrete skins are applied so they become locked into the structure. Wood bucks are less preferred for long-term durability, high-wind, and fire performance.",
      },
      {
        q: "Can BP2 panels be used for swimming pools?",
        a: "Yes. The system has been used for pools, spas, and fountains. The insulated panels help reduce heat loss through the submerged surfaces.",
      },
      {
        q: "How long do BP2 buildings last?",
        a: "Concrete structures of this type typically last 50 years at minimum and can exceed 100 years with proper design and maintenance.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-3 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8">
        <div className="space-y-6">
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white px-6 py-10 text-center shadow-sm md:px-10">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Frequently Asked Questions</h1>
          </section>

          {groups.map((group) => (
            <section
              key={group.heading}
              className="overflow-hidden rounded-xl border border-gray-300 bg-gray-100 p-6 shadow-sm md:p-8"
            >
              <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">{group.heading}</h2>
              <div className="space-y-4">
                {group.items.map((item) => (
                  <div key={item.q} className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm">
                    <h3 className="font-semibold text-gray-900">{item.q}</h3>
                    <p className="mt-3 text-gray-600">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

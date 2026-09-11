import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "BP2 RIPS Projects | Built Work",
  description:
    "Selected buildings constructed with BP2 RIPS structural concrete insulated panels — Malibu, Culver City, Van Nuys, and Idaho.",
};

const projects = [
  {
    href: "/projects/rambla-orienta",
    title: "3885 Rambla Orienta",
    place: "Malibu, CA",
    image: "/projects/rambla-orienta/01-exterior.png",
    note: "Curved coastal residence. Walls and roof forms in one structural system.",
  },
  {
    href: "/projects/rambla-vista",
    title: "Rambla Vista",
    place: "Malibu, CA",
    image: "/projects/rambla-vista/01-exterior.png",
    note: "Multi-unit hillside complex on the Malibu coast.",
  },
  {
    href: "/projects/forchelli-driggs",
    title: "Forchelli Residence",
    place: "Driggs, ID",
    image: "/projects/forchelli-driggs/01-house.png",
    note: "Insulated SCIP basement on a mountain site.",
  },
  {
    href: "/projects/lorenzo-fire-rebuild",
    title: "Lorenzo Fire Rebuild",
    place: "Lorenzo, ID",
    image: "/projects/lorenzo-fire-rebuild/02-structure.png",
    note: "Fire rebuild using RIPS / SCIP panels.",
  },
  {
    href: "/projects/carson-culver-city",
    title: "Carson Street",
    place: "Culver City, CA",
    image: "/projects/carson-culver-city/01-exterior.png",
    note: "Infill housing with exposed structural shells and finished interiors.",
  },
  {
    href: "/projects/anheuser-busch-van-nuys",
    title: "Anheuser-Busch",
    place: "Van Nuys, CA",
    image: "/projects/anheuser-busch-van-nuys/01-aerial.png",
    note: "Industrial / commercial SCIP application.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-3 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8">
        <div className="space-y-6">
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white px-6 py-10 text-center shadow-sm md:px-10">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Projects
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Selected buildings that use BP2 RIPS / SCIP panels. Each project is a
              reference for a specific technical point — form, fire, basement,
              commercial work, or full structural use.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm transition hover:shadow-md"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={750}
                  className="h-56 w-full object-cover"
                />
                <div className="p-5">
                  <div className="text-lg font-semibold text-gray-900">{project.title}</div>
                  <div className="mt-1 text-sm text-gray-500">{project.place}</div>
                  <p className="mt-3 text-sm text-gray-600">{project.note}</p>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Lorenzo Fire Rebuild, Idaho | BP2 RIPS Project",
  description:
    "Lorenzo fire rebuild at 644 N 4100 E, Lorenzo, Idaho — SCIP / RIPS panels used in a fire-rebuild structure.",
};

export default function LorenzoPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-3 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8">
        <div className="space-y-6">
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white px-6 py-10 text-center shadow-sm md:px-10">
            <p className="text-sm font-semibold tracking-wide text-gray-500">Featured Project</p>
            <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">Lorenzo Fire Rebuild</h1>
            <p className="mt-2 text-gray-600">
              644 N 4100 E
              <br />
              Lorenzo, Idaho 83442
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">
              A fire-rebuild structure using SCIP panel walls and roof. Drawings
              and field photos show the panel schedule, mesh, and erection
              sequence. Use this project next to technical discussion of
              non-combustible assemblies and rebuild work.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image src="/projects/lorenzo-fire-rebuild/01-drawing.png" alt="SCIP panel schedule and roof plan" width={1200} height={750} className="h-auto w-full" priority />
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image src="/projects/lorenzo-fire-rebuild/02-structure.png" alt="Panel structure during rebuild" width={1200} height={750} className="h-auto w-full" />
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image src="/projects/lorenzo-fire-rebuild/03-walls.png" alt="Panel walls" width={1200} height={750} className="h-auto w-full" />
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image src="/projects/lorenzo-fire-rebuild/04-roof-work.png" alt="Roof panel work" width={1200} height={750} className="h-auto w-full" />
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            <Image src="/projects/lorenzo-fire-rebuild/05-mesh.png" alt="Wire mesh and panel roof" width={1200} height={750} className="h-auto w-full" />
          </section>
        </div>
      </div>
    </div>
  );
}

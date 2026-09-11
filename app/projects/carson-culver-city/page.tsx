import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "8894–8896 Carson Street, Culver City | BP2 RIPS Project",
  description:
    "Infill housing at 8894 and 8896 Carson Street, Culver City, built with BP2 RIPS structural concrete insulated panels.",
};

export default function CarsonPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-3 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8">
        <div className="space-y-6">
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white px-6 py-10 text-center shadow-sm md:px-10">
            <p className="text-sm font-semibold tracking-wide text-gray-500">Featured Project</p>
            <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">Carson Street</h1>
            <p className="mt-2 text-gray-600">
              8894 / 8896 Carson St
              <br />
              Culver City, CA 90232
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">
              Infill housing with exposed structural concrete shells, panel
              connections at the roof line, and finished interiors. A clear
              local example of walls and horizontal structure working as one
              system.
            </p>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            <Image src="/projects/carson-culver-city/01-exterior.png" alt="Carson Street exterior" width={1200} height={750} className="h-auto w-full" priority />
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image src="/projects/carson-culver-city/02-structure.png" alt="Structural shells and beams" width={1200} height={750} className="h-auto w-full" />
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image src="/projects/carson-culver-city/03-wall.png" alt="Concrete panel wall" width={1200} height={750} className="h-auto w-full" />
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image src="/projects/carson-culver-city/04-street.png" alt="Finished street elevation" width={1200} height={750} className="h-auto w-full" />
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image src="/projects/carson-culver-city/05-interior.png" alt="Interior volume" width={1200} height={750} className="h-auto w-full" />
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            <Image src="/projects/carson-culver-city/06-kitchen.png" alt="Kitchen interior" width={1200} height={750} className="h-auto w-full" />
          </section>
        </div>
      </div>
    </div>
  );
}

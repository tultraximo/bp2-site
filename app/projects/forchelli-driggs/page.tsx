import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Forchelli Residence, Driggs ID | BP2 SCIP Basement",
  description:
    "Forchelli Residence insulated basement at 42 Wildcat Canyon Rd, Driggs, Idaho — SCIP / RIPS below-grade construction.",
};

export default function ForchelliPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-3 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8">
        <div className="space-y-6">
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white px-6 py-10 text-center shadow-sm md:px-10">
            <p className="text-sm font-semibold tracking-wide text-gray-500">
              Featured Project
            </p>
            <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Forchelli Residence
            </h1>
            <p className="mt-2 text-gray-600">
              Insulated basement
              <br />
              42 Wildcat Canyon Rd, Driggs, Idaho 83422
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">
              A mountain residence using SCIP / RIPS panels for an insulated
              basement. Drawings and construction photos show the system below
              grade — useful next to technical discussion of basements, thermal
              envelope, and isolated concrete mass.
            </p>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            <Image
              src="/projects/forchelli-driggs/01-house.png"
              alt="Forchelli residence"
              width={1200}
              height={750}
              className="h-auto w-full"
              priority
            />
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image
                src="/projects/forchelli-driggs/02-drawing.png"
                alt="Basement SCIP drawing"
                width={1200}
                height={750}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image
                src="/projects/forchelli-driggs/03-panels.png"
                alt="Panel basement walls"
                width={1200}
                height={750}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image
                src="/projects/forchelli-driggs/04-crew.png"
                alt="Construction crew"
                width={1200}
                height={750}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image
                src="/projects/forchelli-driggs/05-pour.png"
                alt="Concrete work"
                width={1200}
                height={750}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image
                src="/projects/forchelli-driggs/06-walls.png"
                alt="Formed basement walls"
                width={1200}
                height={750}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image
                src="/projects/forchelli-driggs/07-walls.png"
                alt="Additional basement wall construction"
                width={1200}
                height={750}
                className="h-auto w-full"
              />
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white p-6 text-center shadow-sm">
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/projects"
                className="rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-black hover:bg-[#3F6FEC] hover:text-white"
              >
                All projects
              </Link>
              <Link
                href="/technical"
                className="rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-black hover:bg-[#3F6FEC] hover:text-white"
              >
                Technical Resources
              </Link>
              <Link
                href="/contact"
                className="rounded-md px-5 py-3 text-sm font-medium text-white"
                style={{ backgroundColor: "#3F6FEC" }}
              >
                Discuss a project
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Anheuser-Busch, Van Nuys | BP2 SCIP Project",
  description:
    "Anheuser-Busch facility at 15800 Roscoe Blvd, Van Nuys, California — industrial SCIP / RIPS application.",
};

export default function AnheuserBuschPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-3 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8">
        <div className="space-y-6">
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white px-6 py-10 text-center shadow-sm md:px-10">
            <p className="text-sm font-semibold tracking-wide text-gray-500">
              Featured Project
            </p>
            <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Anheuser-Busch
            </h1>
            <p className="mt-2 text-gray-600">
              15800 Roscoe Blvd
              <br />
              Van Nuys, CA 91406
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">
              Industrial SCIP work at the Anheuser-Busch site in Van Nuys.
              Use this project next to technical discussion of commercial and
              industrial envelopes, not only residential panels.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image
                src="/projects/anheuser-busch-van-nuys/01-aerial.png"
                alt="Aerial of Anheuser-Busch site"
                width={1200}
                height={750}
                className="h-auto w-full"
                priority
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image
                src="/projects/anheuser-busch-van-nuys/02-building.png"
                alt="Building at the Van Nuys site"
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

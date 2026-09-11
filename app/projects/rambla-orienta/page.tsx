import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "3885 Rambla Orienta, Malibu | BP2 RIPS Project",
  description:
    "Coastal residence in Malibu built with BP2 RIPS structural concrete insulated panels. Curved walls, roofs, and a high-mass envelope on a fire-exposed hillside site.",
};

export default function RamblaOrientaPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-3 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8">
        <div className="space-y-6">
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            <div className="px-6 py-10 text-center md:px-10">
              <p className="text-sm font-semibold tracking-wide text-gray-500">
                Featured Project
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                3885 Rambla Orienta
              </h1>
              <p className="mt-2 text-gray-600">Malibu, California</p>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">
                A hillside coastal house built with BP2 RIPS structural concrete
                insulated panels. The project shows that the system is not limited
                to boxy walls — curved shells, roofs, and openings are part of the
                same code-compliant structural envelope.
              </p>
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            <Image
              src="/projects/rambla-orienta/01-exterior.png"
              alt="3885 Rambla Orienta exterior in Malibu"
              width={1200}
              height={750}
              className="h-auto w-full"
              priority
            />
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-300 bg-white p-6 text-center shadow-sm">
              <div className="font-semibold text-gray-900">Full structure</div>
              <p className="mt-2 text-sm text-gray-600">
                Walls and roof forms are part of one panelized concrete system,
                not a wall-only product with a separate roof method.
              </p>
            </div>
            <div className="rounded-xl border border-gray-300 bg-white p-6 text-center shadow-sm">
              <div className="font-semibold text-gray-900">Form freedom</div>
              <p className="mt-2 text-sm text-gray-600">
                Curves and cantilevers are finished architectural surfaces,
                not a reason to switch back to wood framing.
              </p>
            </div>
            <div className="rounded-xl border border-gray-300 bg-white p-6 text-center shadow-sm">
              <div className="font-semibold text-gray-900">Coastal resilience</div>
              <p className="mt-2 text-sm text-gray-600">
                Non-combustible concrete skins on a Malibu hillside — relevant to
                fire exposure and long-term envelope durability.
              </p>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image
                src="/projects/rambla-orienta/02-terrace.png"
                alt="Covered terrace with ocean view"
                width={1200}
                height={750}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image
                src="/projects/rambla-orienta/03-roofline.png"
                alt="Curved roof forms above the Malibu coastline"
                width={1200}
                height={750}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image
                src="/projects/rambla-orienta/04-kitchen.png"
                alt="Kitchen bar with curved window facing the ocean"
                width={1200}
                height={750}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <Image
                src="/projects/rambla-orienta/05-living.png"
                alt="Living room with ocean-facing windows"
                width={1200}
                height={750}
                className="h-auto w-full"
              />
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white p-6 text-center shadow-sm md:p-8">
            <p className="mx-auto max-w-3xl text-gray-700">
              This project is a useful reference from the technical pages when
              the discussion is about architectural form, roof panels, or
              building in fire-exposed coastal zones.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/rips"
                className="rounded-md px-5 py-3 text-sm font-medium text-white hover:opacity-90"
                style={{ backgroundColor: "#3F6FEC" }}
              >
                The RIPS System
              </Link>
              <Link
                href="/technical"
                className="rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-black hover:border-transparent hover:bg-[#3F6FEC] hover:text-white"
              >
                Technical Resources
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-black hover:border-transparent hover:bg-[#3F6FEC] hover:text-white"
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

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Rambla Vista, Malibu | BP2 RIPS Project",
  description:
    "Multi-unit hillside complex at 21351–21361 Rambla Vista, Malibu, built with BP2 RIPS / SCIP structural panels.",
};

export default function RamblaVistaPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-3 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8">
        <div className="space-y-6">
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white px-6 py-10 text-center shadow-sm md:px-10">
            <p className="text-sm font-semibold tracking-wide text-gray-500">Featured Project</p>
            <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">Rambla Vista</h1>
            <p className="mt-2 text-gray-600">
              21351, 21353, 21355, 21357, 21359, 21361 Rambla Vista
              <br />
              Malibu, California
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">
              A multi-unit coastal complex. The photos show finished interiors,
              ocean-facing rooms, and panel construction on a hillside site —
              useful when the technical discussion is fire-exposed coastal housing
              and full structural envelopes, not wall-only systems.
            </p>
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            <Image src="/projects/rambla-vista/01-exterior.png" alt="Rambla Vista exterior" width={1200} height={750} className="h-auto w-full" priority />
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <ImageCard src="/projects/rambla-vista/02-interior.png" alt="Interior with ocean view" />
            <ImageCard src="/projects/rambla-vista/03-ocean-room.png" alt="Ocean-facing room" />
            <ImageCard src="/projects/rambla-vista/04-balcony.png" alt="Balcony facing the coast" />
            <ImageCard src="/projects/rambla-vista/05-construction.png" alt="Panel construction" />
          </section>

          <BackLinks />
        </div>
      </div>
    </div>
  );
}

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
      <Image src={src} alt={alt} width={1200} height={750} className="h-auto w-full" />
    </div>
  );
}

function BackLinks() {
  return (
    <section className="overflow-hidden rounded-xl border border-gray-300 bg-white p-6 text-center shadow-sm">
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/projects" className="rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-black hover:bg-[#3F6FEC] hover:text-white">All projects</Link>
        <Link href="/technical" className="rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-black hover:bg-[#3F6FEC] hover:text-white">Technical Resources</Link>
        <Link href="/contact" className="rounded-md px-5 py-3 text-sm font-medium text-white" style={{ backgroundColor: "#3F6FEC" }}>Discuss a project</Link>
      </div>
    </section>
  );
}

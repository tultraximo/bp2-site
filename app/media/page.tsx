import Link from "next/link";

export const metadata = {
  title: "BP2 RIPS Videos | System, History, Trial by Fire",
  description:
    "Videos on the BP2 RIPS system, building history, the Malibu fire house, and studio acoustics.",
};

const videos = [
  {
    title: "The System",
    id: "RAG6IGeOEoI",
    note: "A clear explanation of how the RIPS panels work.",
  },
  {
    title: "History",
    id: "SH2asnVpTAM",
    note: "A high-level look at how people have built and why RIPS offers a better path.",
  },
  {
    title: "Trial by Fire",
    id: "QYIVUVfUpxg",
    note: "A home built with our panels that withstood the Malibu fires.",
  },
  {
    title: "Studio Ready",
    id: "m59-ObO9-Bw",
    note: "Dustin Ebsen on why the system works well for sound studios.",
  },
];

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-3 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8">
        <div className="space-y-6">
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white px-6 py-10 text-center shadow-sm md:px-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Videos & Resources
            </p>
            <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">Media</h1>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="flex flex-1 flex-col px-5 py-4 text-center">
                  <h2 className="text-lg font-semibold text-gray-900">{video.title}</h2>
                  <p className="mt-1 text-sm text-gray-600">{video.note}</p>
                </div>
              </div>
            ))}
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-gray-100 p-6 text-center shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Meet the people behind the system
            </h2>
            <p className="mt-2 text-gray-600">
              Hear directly from the team in their own words.
            </p>
            <Link
              href="/team"
              className="mt-4 inline-block rounded-md px-6 py-3 text-sm font-medium text-white"
              style={{ backgroundColor: "#3F6FEC" }}
            >
              Meet the Team
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

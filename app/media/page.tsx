import Link from "next/link";

export const metadata = {
  title: "BP2 RIPS Videos | System, History, Trial by Fire",
  description:
    "Videos on the BP2 RIPS system, building history, fire performance, and studio applications.",
};

const videos = [
  {
    title: "The System",
    description: "A clear explanation of how the RIPS panels work.",
    videoId: "bLN7XIzlceg",
  },
  {
    title: "History",
    description:
      "A high-level look at how people have built and why RIPS offers a better path.",
    videoId: "Qt5WtZ94UrA",
  },
  {
    title: "Trial by Fire",
    description:
      "A home built with our panels that withstood the Malibu fires.",
    videoId: "xlWOTZZ5Bl0",
  },
  {
    title: "Studio Ready",
    description: "Dustin Ebsen on why the system works well for sound studios.",
    videoId: "7f8iS92xY5E",
  },
];

export default function MediaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Videos & Resources
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Media
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Watch key videos that explain the RIPS system, its performance in
              real conditions, and the thinking behind it.
            </p>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2">
            {videos.map((video) => (
              <div key={video.videoId} className="flex flex-col">
                <h2 className="text-xl font-bold text-gray-900">
                  {video.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  {video.description}
                </p>
                <div className="mt-4 aspect-video overflow-hidden rounded-lg bg-gray-100">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Meet the people behind the system
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Hear directly from the team in their own words.
          </p>
          <div className="mt-8">
            <Link
              href="/team"
              className="inline-block rounded-md bg-gray-900 px-8 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

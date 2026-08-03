import Link from "next/link";

const team = [
  {
    name: "Alan Khedari",
    videoId: "-Ne2kfXpymU",
  },
  {
    name: "Jennifer Hoppel",
    videoId: "hrpnBHsKkIc",
  },
  {
    name: "Todd Fisher",
    videoId: "zUAolV1I8tE",
  },
  {
    name: "John Shepherd",
    videoId: "vDZ04t_bLAg",
  },
  {
    name: "Rob Manchise",
    videoId: "xnRpMTqd80c",
  },
  {
    name: "Mark Heath",
    videoId: "OxTiexrenDw",
  },
];

export default function TeamPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              People
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Meet the Team
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Hear directly from the people behind Blue Planet and the RIPS
              system. Each team member shares their perspective on the product
              and the work we do.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col">
                <h2 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h2>
                <div className="mt-4 aspect-video overflow-hidden rounded-lg bg-gray-100">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${member.videoId}`}
                    title={`${member.name} video`}
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
            Want to learn more about the system?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Explore the technical details or see how the platform approach
            works.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/rips"
              className="rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              The RIPS System
            </Link>
            <Link
              href="/platform"
              className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              High-Performance Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

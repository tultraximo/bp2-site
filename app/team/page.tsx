import Link from "next/link";

export const metadata = {
  title: "Meet the Blue Planet Team | Blue Planet Building Panels",
  description:
    "Hear from the Blue Planet team about BP2 RIPS panels and the work behind the system.",
};

const team = [
  { name: "Alan Khedari", id: "-Ne2kfXpymU" },
  { name: "Jennifer Hoppel", id: "hrpnBHsKkIc" },
  { name: "Todd Fisher", id: "zUAolV1I8tE" },
  { name: "John Shepherd", id: "vDZ04t_bLAg" },
  { name: "Rob Manchise", id: "xnRpMTqd80c" },
  { name: "Mark Heath", id: "OxTiexrenDw" },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-3 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8">
        <div className="space-y-6">
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white px-6 py-10 text-center shadow-sm md:px-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">People</p>
            <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">Meet the Team</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700">
              Hear directly from the people behind Blue Planet and the RIPS system.
              Each team member shares their perspective on the product and the work we do.
            </p>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            {team.map((person) => (
              <div key={person.id}>
                <div className="mb-3 text-center text-lg font-semibold text-gray-900">
                  {person.name}
                </div>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${person.id}`}
                    title={person.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-gray-100 p-6 text-center shadow-sm md:p-10">
            <p className="text-gray-600">
              Want to learn more about the system? Explore the technical details or see how the platform approach works.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/technical"
                className="rounded-md px-6 py-3 text-sm font-medium text-white"
                style={{ backgroundColor: "#3F6FEC" }}
              >
                Technical Resources
              </Link>
              <Link
                href="/media"
                className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-black hover:bg-[#3F6FEC] hover:text-white"
              >
                Media
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

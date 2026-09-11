import Link from "next/link";

export const metadata = {
  title: "BP2 RIPS Resources and Mentions | Blue Planet Building Panels",
  description:
    "Third-party and supporting references related to Blue Planet and BP2 RIPS panels.",
};

const links = [
  {
    href: "https://eco-phi.com/blue-planet-panels",
    title: "EcoPhi – Blue Planet Panels",
    note: "Independent page with technical information about BP2 SCIPs.",
  },
  {
    href: "https://img1.wsimg.com/blobby/go/3dff9efe-a3c2-4fc3-9734-ef1fdd0cb4cf/downloads/THERMAL%20PERFORMANCE%20IN%20BP2%20SCIPs.pdf",
    title: "Thermal Performance in BP2 SCIPs (PDF)",
    note: "Technical document on thermal mass, isolated skins, and R-40 performance.",
  },
  {
    href: "https://www.zoominfo.com/c/blue-planet-building-panels/512090545",
    title: "ZoomInfo – Blue Planet Building Panels",
    note: "Business directory profile for Blue Planet Building Panels.",
  },
  {
    href: "https://trea.com/information/structural-panels-for-buildings-integrating-3d-printed-shells-and-method-of-fabr/patentgrant/e2ad805c-7ce7-4d77-9468-6f0e4d13accf",
    title: "Patent Reference – Structural Panels",
    note: "Public patent record associated with Mark Heath / Blue Planet Technologies.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-3 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8">
        <div className="space-y-6">
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white px-6 py-10 text-center shadow-sm md:px-10">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Resources & Mentions</h1>
            <p className="mx-auto mt-4 max-w-3xl text-gray-600">
              Selected third-party and supporting references related to Blue Planet
              and the BP2 RIPS system.
            </p>
          </section>

          <section className="space-y-4">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-gray-300 bg-white p-6 shadow-sm hover:border-[#3F6FEC]"
              >
                <div className="font-semibold text-gray-900">{item.title}</div>
                <p className="mt-2 text-sm text-gray-600">{item.note}</p>
              </a>
            ))}
          </section>

          <section className="overflow-hidden rounded-xl border border-gray-300 bg-gray-100 p-6 text-center shadow-sm">
            <p className="text-gray-600">
              This page is limited to verifiable public references. Review the system overview, platform approach, or FAQ.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/rips" className="rounded-md px-6 py-3 text-sm font-medium text-white" style={{ backgroundColor: "#3F6FEC" }}>
                RIPS
              </Link>
              <Link href="/faq" className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-black hover:bg-[#3F6FEC] hover:text-white">
                FAQ
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

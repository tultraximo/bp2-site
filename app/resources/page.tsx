import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              External References
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Resources & Mentions
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Selected third-party and supporting references related to Blue Planet
              and the BP2 RIPS system. This page will grow as additional public
              mentions and technical documents become available.
            </p>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 space-y-12">

          <div>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
              Third-Party & Supporting References
            </h2>

            <div className="mt-8 space-y-10">
              <div>
                <h3 className="font-semibold text-gray-900">
                  <a
                    href="https://eco-phi.com/blue-planet-panels"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    EcoPhi – Blue Planet Panels
                  </a>
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Independent page that republishes detailed technical information
                  about BP2 SCIPs, including system description, green claims,
                  and engineering differentiation.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  <a
                    href="https://img1.wsimg.com/blobby/go/3dff9efe-a3c2-4fc3-9734-ef1fdd0cb4cf/downloads/THERMAL%20PERFORMANCE%20IN%20BP2%20SCIPs.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    Thermal Performance in BP2 SCIPs (PDF)
                  </a>
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Technical document explaining the thermal mass, isolated skins,
                  and R-40 performance characteristics of Blue Planet panels.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  <a
                    href="https://www.zoominfo.com/c/blue-planet-building-panels/512090545"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    ZoomInfo – Blue Planet Building Panels
                  </a>
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Business directory profile for Blue Planet Building Panels,
                  linking to the company website.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  <a
                    href="https://trea.com/information/structural-panels-for-buildings-integrating-3d-printed-shells-and-method-of-fabr/patentgrant/e2ad805c-7ce7-4d77-9468-6f0e4d13accf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    Patent Reference – Structural Panels (Mark Heath / Blue Planet Technologies)
                  </a>
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Public patent record associated with Mark Heath and Blue Planet
                  Technologies related to structural panel technology.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              This page is intentionally limited to verifiable public references.
              Additional links, technical documents, project mentions, and media
              coverage will be added as they become available.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Looking for technical details?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Review the system overview, platform approach, or FAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/rips"
              className="rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              The RIPS System
            </Link>
            <Link
              href="/faq"
              className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        CONTACT
      </h1>
      <p className="mt-4 text-gray-600">
        Content for this page will be added next.
      </p>
    </div>
  );
}
import Link from "next/link";

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Get in Touch
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Contact
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Architects, engineers, developers, and project teams — reach out
              to discuss RIPS performance, platform integration, or specific
              project requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                How we can help
              </h2>
              <ul className="mt-6 space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <span className="font-bold text-gray-900">•</span>
                  <span>
                    Technical evaluation of RIPS for your project type and
                    location
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gray-900">•</span>
                  <span>
                    Discussion of structural, envelope, and code-path
                    considerations
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gray-900">•</span>
                  <span>
                    Exploration of high-performance platform opportunities
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gray-900">•</span>
                  <span>
                    Support for architects and engineers during early design
                    phases
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-xl font-bold text-gray-900">
                Start a conversation
              </h2>
              <p className="mt-4 text-gray-600">
                This first-version site does not yet include a live form. For
                now, please reach out directly and we will connect you with the
                appropriate technical or project contact.
              </p>
              <p className="mt-6 text-sm text-gray-500">
                A contact form and additional project inquiry options will be
                added in a future revision.
              </p>
              <div className="mt-8">
                <Link
                  href="/rips"
                  className="text-sm font-medium text-gray-900 underline-offset-4 hover:underline"
                >
                  Review the RIPS System →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Prefer to explore first?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Review the core system, platform thinking, and technical overview
            before reaching out.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/rips"
              className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              The RIPS System
            </Link>
            <Link
              href="/platform"
              className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              High-Performance Platform
            </Link>
            <Link
              href="/technical"
              className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Technical Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

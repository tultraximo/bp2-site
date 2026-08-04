import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gray-100 px-4 pb-6 pt-3 sm:px-6">
      <footer className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="px-6 py-10 md:px-10">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">

            {/* Brand + Contact */}
            <div className="flex max-w-lg flex-col gap-4">
              {/* Brand card */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 shadow-sm">
                <div className="text-lg font-bold text-gray-900">Blue Planet</div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Advanced panelized building systems. High-performance envelopes that enable
                  lower energy, greater resilience, and smarter construction.
                </p>
              </div>

              {/* Contact card */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 shadow-sm">
                <div className="font-semibold text-gray-900">Blue Planet Building Panels</div>
                <p className="mt-2">
                  9200 S Vermont Ave<br />
                  Los Angeles, CA 90044<br />
                  United States
                </p>
                <p className="mt-3">
                  <span className="font-semibold text-gray-900">Hours</span><br />
                  Monday – Friday: 8am – 5pm<br />
                  Saturday – Sunday: Closed
                </p>
                <p className="mt-3">
                  <a
                    href="mailto:rob.m@bp2panels.com"
                    className="hover:underline"
                    style={{ color: "#3F6FEC" }}
                  >
                    rob.m@bp2panels.com
                  </a>
                  <br />
                  Phone:{" "}
                  <a
                    href="tel:9512265422"
                    className="hover:underline"
                    style={{ color: "#3F6FEC" }}
                  >
                    (951) 226-5422
                  </a>
                </p>
              </div>
            </div>

            {/* Link columns */}
            <div className="flex flex-wrap gap-10 text-sm">
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-gray-900">Explore</div>
                <Link
                  href="/rips"
                  className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 font-medium text-black transition-colors hover:border-transparent hover:bg-[#3F6FEC] hover:text-white"
                >
                  The RIPS System
                </Link>
                <Link
                  href="/platform"
                  className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 font-medium text-black transition-colors hover:border-transparent hover:bg-[#3F6FEC] hover:text-white"
                >
                  High-Performance Platform
                </Link>
                <Link
                  href="/technical"
                  className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 font-medium text-black transition-colors hover:border-transparent hover:bg-[#3F6FEC] hover:text-white"
                >
                  Technical Resources
                </Link>
                <Link
                  href="/applications"
                  className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 font-medium text-black transition-colors hover:border-transparent hover:bg-[#3F6FEC] hover:text-white"
                >
                  Applications
                </Link>
                <Link
                  href="/faq"
                  className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 font-medium text-black transition-colors hover:border-transparent hover:bg-[#3F6FEC] hover:text-white"
                >
                  FAQ
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-semibold text-gray-900">Company</div>
                <Link
                  href="/team"
                  className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 font-medium text-black transition-colors hover:border-transparent hover:bg-[#3F6FEC] hover:text-white"
                >
                  Team
                </Link>
                <Link
                  href="/media"
                  className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 font-medium text-black transition-colors hover:border-transparent hover:bg-[#3F6FEC] hover:text-white"
                >
                  Media
                </Link>
                <Link
                  href="/resources"
                  className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 font-medium text-black transition-colors hover:border-transparent hover:bg-[#3F6FEC] hover:text-white"
                >
                  Resources
                </Link>
                <Link
                  href="/about"
                  className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 font-medium text-black transition-colors hover:border-transparent hover:bg-[#3F6FEC] hover:text-white"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 font-medium text-black transition-colors hover:border-transparent hover:bg-[#3F6FEC] hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Blue Planet. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

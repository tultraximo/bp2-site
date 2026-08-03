import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <div className="text-lg font-bold text-gray-900">Blue Planet</div>
            <p className="mt-2 max-w-sm text-sm text-gray-600">
              Advanced panelized building systems. High-performance envelopes
              that enable lower energy, greater resilience, and smarter
              construction.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 text-sm">
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-gray-900">Explore</div>
              <Link href="/rips" className="text-gray-600 hover:text-gray-900">
                The RIPS System
              </Link>
              <Link
                href="/platform"
                className="text-gray-600 hover:text-gray-900"
              >
                High-Performance Platform
              </Link>
              <Link
                href="/technical"
                className="text-gray-600 hover:text-gray-900"
              >
                Technical Resources
              </Link>
              <Link
                href="/applications"
                className="text-gray-600 hover:text-gray-900"
              >
                Applications
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-gray-900">
                FAQ
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <div className="font-semibold text-gray-900">Company</div>
              <Link href="/team" className="text-gray-600 hover:text-gray-900">
                Team
              </Link>
              <Link href="/media" className="text-gray-600 hover:text-gray-900">
                Media
              </Link>
              <Link
                href="/resources"
                className="text-gray-600 hover:text-gray-900"
              >
                Resources
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Blue Planet. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

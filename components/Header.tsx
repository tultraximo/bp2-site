import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900"
        >
          Blue Planet
        </Link>

        <nav className="hidden gap-8 text-sm font-medium text-gray-700 md:flex">
          <Link href="/rips" className="hover:text-gray-900">
            The RIPS System
          </Link>
          <Link href="/platform" className="hover:text-gray-900">
            High-Performance Platform
          </Link>
          <Link href="/technical" className="hover:text-gray-900">
            Technical Resources
          </Link>
          <Link href="/applications" className="hover:text-gray-900">
            Applications
          </Link>
          <Link href="/about" className="hover:text-gray-900">
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/rips", label: "RIPS" },
    { href: "/platform", label: "Platform" },
    { href: "/technical", label: "Technical" },
    { href: "/applications", label: "Applications" },
    { href: "/team", label: "Team" },
    { href: "/media", label: "Media" },
    { href: "/faq", label: "FAQ" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="bg-gray-100 px-4 pt-3 sm:px-6">
      <header className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between gap-4 px-5 py-5">

          {/* Desktop Logo */}
          <Link href="/" onClick={() => setIsOpen(false)} className="hidden flex-shrink-0 lg:block">
            <Image
              src="/logo.png"
              alt="Blue Planet Building Panels"
              width={300}
              height={110}
              className="h-16 w-auto lg:h-[4.5rem]"
              style={{ width: "auto", height: "auto", maxHeight: "4.5rem" }}
              priority
            />
          </Link>

          {/* Mobile Title */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`flex-1 text-center lg:hidden ${bebasNeue.className}`}
          >
            <div className="text-4xl tracking-wider text-gray-900 sm:text-5xl">
              BLUE PLANET BUILDING PANELS
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden flex-wrap items-center justify-end gap-3 text-lg font-semibold lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-gray-200 bg-gray-50 px-7 py-4 text-black transition-colors hover:border-transparent hover:bg-[#3F6FEC] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mr-1 inline-flex items-center justify-center rounded-lg border border-gray-300 bg-gray-50 p-3 shadow-sm hover:bg-gray-100 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#3F6FEC">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#3F6FEC">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-gray-200 lg:hidden">
            <nav className="flex flex-col gap-2 px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-6 py-4 text-lg font-semibold text-black transition-colors hover:border-transparent hover:bg-[#3F6FEC] hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}

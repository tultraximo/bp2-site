"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ContactButton() {
  const pathname = usePathname();

  if (pathname === "/contact") return null;

  return (
    <Link
      href="/contact"
      className="fixed bottom-5 right-5 z-50 rounded-md px-5 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 md:bottom-8 md:right-8"
      style={{ backgroundColor: "#3F6FEC" }}
    >
      CLICK TO GET IN CONTACT!
    </Link>
  );
}

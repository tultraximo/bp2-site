"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const projects = [
  {
    href: "/projects/rambla-orienta",
    title: "Rambla Orienta",
    image: "/projects/rambla-orienta/01-exterior.png",
    note: "3885 Rambla Orienta, Malibu",
  },
  {
    href: "/projects/rambla-vista",
    title: "Rambla Vista",
    image: "/projects/rambla-vista/01-exterior.png",
    note: "21351–21361 Rambla Vista, Malibu",
  },
  {
    href: "/projects/forchelli-driggs",
    title: "Forchelli",
    image: "/projects/forchelli-driggs/01-house.png",
    note: "42 Wildcat Canyon Rd, Driggs, ID",
  },
  {
    href: "/projects/lorenzo-fire-rebuild",
    title: "Lorenzo",
    image: "/projects/lorenzo-fire-rebuild/02-structure.png",
    note: "644 N 4100 E, Lorenzo, ID",
  },
  {
    href: "/projects/carson-culver-city",
    title: "Carson St",
    image: "/projects/carson-culver-city/01-exterior.png",
    note: "8894 / 8896 Carson St, Culver City",
  },
  {
    href: "/projects/anheuser-busch-van-nuys",
    title: "Anheuser-Busch",
    image: "/projects/anheuser-busch-van-nuys/01-aerial.png",
    note: "15800 Roscoe Blvd, Van Nuys",
  },
];

export default function ProjectStrip() {
  const pathname = usePathname();

  if (pathname.startsWith("/projects")) {
    return null;
  }

  return (
    <div className="bg-gray-100 px-4 pt-3 pb-0 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="p-4">
          <p className="text-center text-sm font-bold tracking-wide text-gray-900 sm:text-base">
            CLICK OUR PROJECTS TO SEE OUR PRODUCT IN USE
          </p>

          <div className="mt-4 flex items-start gap-4 overflow-x-auto">
            {projects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="w-[252px] shrink-0"
              >
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={252}
                    height={168}
                    className="h-[168px] w-[252px] object-cover"
                  />
                </div>
                <p className="mt-2 text-center text-sm font-medium text-black">
                  {project.note}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

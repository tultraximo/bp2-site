"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  { src: "/projects/forchelli-driggs/01-house.png", alt: "Forchelli residence" },
  { src: "/projects/forchelli-driggs/02-drawing.png", alt: "Basement SCIP drawing" },
  { src: "/projects/forchelli-driggs/03-panels.png", alt: "Panel basement walls" },
  { src: "/projects/forchelli-driggs/04-crew.png", alt: "Construction crew" },
  { src: "/projects/forchelli-driggs/05-pour.png", alt: "Concrete work" },
  { src: "/projects/forchelli-driggs/06-walls.png", alt: "Formed basement walls" },
  { src: "/projects/forchelli-driggs/07-walls.png", alt: "Additional basement wall construction" },
];

export default function Photos() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <section className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
        <button type="button" className="block w-full" onClick={() => setOpen(0)}>
          <Image
            src={photos[0].src}
            alt={photos[0].alt}
            width={1200}
            height={750}
            className="h-auto w-full cursor-zoom-in"
            priority
          />
        </button>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {photos.slice(1).map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm"
            onClick={() => setOpen(i + 1)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={1200}
              height={750}
              className="h-auto w-full cursor-zoom-in"
            />
          </button>
        ))}
      </section>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={() => setOpen(null)}
        >
          <img
            src={photos[open].src}
            alt={photos[open].alt}
            className="max-h-[85vh] w-auto max-w-5xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const categories = ["All", "Coffee", "Food", "Interior", "Events"];
  const [active, setActive] = useState("All");

  const galleryItems = [
    { id: 1, src: "/images/iced_coffee.jpg", category: "Coffee" },
    { id: 2, src: "/images/iced_coffee.jpg", category: "Food" },
    { id: 3, src: "/images/iced_coffee.jpg", category: "Interior" },
    { id: 4, src: "/images/iced_coffee.jpg", category: "Interior" },
    { id: 5, src: "/images/iced_coffee.jpg", category: "Coffee" },
    { id: 6, src: "/images/iced_coffee.jpg", category: "Food" },
    { id: 7, src: "/images/iced_coffee.jpg", category: "Coffee" },
    { id: 8, src: "/images/iced_coffee.jpg", category: "Coffee" },
    { id: 9, src: "/images/iced_coffee.jpg", category: "Food" },
  ];

  const filtered =
    active === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === active);

  return (
    <main className="py-16 space-y-12">

      {/* HEADER */}
      <div className="container text-center">

        <h1 className="font-heading text-4xl md:text-5xl mb-3 text-[var(--primary)]">
          Our Gallery
        </h1>

        <p className="font-body text-sm text-[var(--foreground)] opacity-70 mb-8">
          A glimpse into our cozy café moments
        </p>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-body border transition-all duration-300 ${
                active === cat
                  ? "bg-[var(--primary)] text-[var(--text-heading)] border-[var(--primary)] shadow-soft"
                  : "bg-[var(--background)] text-[var(--primary)] border-[rgba(75,46,43,0.25)] hover:bg-[var(--primary)] hover:text-[var(--text-heading)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="relative h-[240px] rounded-2xl overflow-hidden group shadow-soft"
          >
            <Image
              src={item.src}
              alt="gallery"
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-[var(--primary)]/30 opacity-0 group-hover:opacity-100 transition" />

            {/* CATEGORY TAG */}
            <div className="absolute bottom-3 left-3 bg-[var(--background)]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-body text-[var(--primary)]">
              {item.category}
            </div>
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      <div className="text-center">
        <button className="btn-primary font-body px-6 py-3 rounded-xl">
          Load More
        </button>
      </div>

    </main>
  );
}
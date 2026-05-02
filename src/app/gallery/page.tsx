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
    <main className="py-12 md:py-16 space-y-12 md:space-y-16">

      <div className="container text-center">

        <h1 className="font-heading text-3xl md:text-5xl mb-3 text-primary">
          Our Gallery
        </h1>

        <p className="font-body text-xs md:text-sm text-body opacity-70 mb-8">
          A glimpse into our cozy café moments
        </p>

        <div className="flex justify-center gap-2 md:gap-3 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-body border transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-transparent text-body border-gray-300 hover:bg-primary hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="relative h-[220px] sm:h-[240px] md:h-[260px] rounded-2xl overflow-hidden group shadow-lg"
          >

            <Image
              src={item.src}
              alt="gallery"
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">

              <p className="text-white text-sm font-body">
                {item.category}
              </p>

              <span className="text-xs text-gray-300">
                View Moment →
              </span>

            </div>

          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn-primary font-body px-6 py-2.5 md:py-3 text-sm md:text-base rounded-xl hover:scale-105 transition">
          Load More
        </button>
      </div>

    </main>
  );
}
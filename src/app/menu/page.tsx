"use client";

import Image from "next/image";
import { useState } from "react";

type Item = {
  name: string;
  desc: string;
  price: number;
  category: string;
  img: string;
};

const categories = ["All", "Coffee", "Desserts", "Snacks", "Beverages"];

const menuItems: Item[] = [
  {
    name: "Cappuccino",
    desc: "Rich espresso with steamed milk",
    price: 3.5,
    category: "Coffee",
    img: "/images/menu/cappuccino.jpg",
  },
  {
    name: "Latte",
    desc: "Smooth espresso with steamed milk",
    price: 3.8,
    category: "Coffee",
    img: "/images/menu/latte.jpg",
  },
  {
    name: "Mocha",
    desc: "Chocolatey coffee with whipped cream",
    price: 4.2,
    category: "Coffee",
    img: "/images/menu/mocha.jpg",
  },
  {
    name: "Americano",
    desc: "Espresso with hot water",
    price: 2.8,
    category: "Coffee",
    img: "/images/menu/americano.jpg",
  },
  {
    name: "Affogato",
    desc: "Espresso over vanilla ice cream",
    price: 4.5,
    category: "Desserts",
    img: "/images/menu/affogato.jpg",
  },
  {
    name: "Cold Brew",
    desc: "Smooth cold brewed coffee",
    price: 3.9,
    category: "Beverages",
    img: "/images/menu/coldbrew.jpg",
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<Item[]>([]);

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const addToCart = (item: Item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <main className="container py-12 space-y-14">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="font-heading text-3xl md:text-4xl text-[var(--primary)]">
          Our Menu
        </h1>

        {/* CART */}
        <div className="relative text-xl cursor-pointer text-[var(--primary)]">
          🛒
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[var(--accent)] text-[var(--text-heading)] text-xs px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div className="flex gap-3 flex-wrap justify-center md:justify-start">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-body border transition-all duration-300 ${
              activeCategory === cat
                ? "bg-[var(--primary)] text-[var(--text-heading)] border-[var(--primary)]"
                : "bg-[var(--background)] text-[var(--primary)] border-[rgba(75,46,43,0.25)] hover:bg-[var(--primary)] hover:text-[var(--text-heading)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div key={index} className="card overflow-hidden group">

            {/* IMAGE */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />

              {/* CATEGORY TAG */}
              <span className="absolute top-3 left-3 bg-[var(--background)]/90 backdrop-blur px-3 py-1 rounded-full text-xs font-body text-[var(--primary)]">
                {item.category}
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-5 space-y-2">
              <h3 className="font-body font-semibold text-lg text-[var(--primary)]">
                {item.name}
              </h3>

              <p className="text-sm text-[var(--foreground)] opacity-70 font-body">
                {item.desc}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="font-semibold text-[var(--primary)]">
                  ${item.price.toFixed(2)}
                </span>

                <button
                  onClick={() => addToCart(item)}
                  className="text-sm px-4 py-1.5 rounded-lg font-body
                  bg-[var(--accent)] text-[var(--text-heading)] 
                  hover:scale-105 hover:shadow-md 
                  transition-all"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BANNER */}
      <div className="relative rounded-2xl overflow-hidden mt-10">
        <Image
          src="/images/menu/banner.jpg"
          alt="Special"
          width={1200}
          height={300}
          className="w-full h-[240px] object-cover"
        />

        {/* ✅ FIX: proper overlay instead of brightness */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/80 via-[var(--primary)]/50 to-transparent" />

        <div className="absolute inset-0 flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-12">
          <div>
            <h3 className="font-heading text-2xl mb-2 text-[var(--text-heading)]">
              Can’t decide?
            </h3>
            <p className="text-sm mb-3 font-body text-[var(--text-body)]">
              Try our barista's special!
            </p>
            <button className="btn-primary font-body text-sm">
              Barista's Special
            </button>
          </div>

          <p className="hidden md:block text-sm text-[var(--text-muted)] mt-4 md:mt-0 font-body text-right">
            Discover more <br /> Ask about details
          </p>
        </div>
      </div>

    </main>
  );
}
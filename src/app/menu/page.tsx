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
    img: "/images/about1.jpg",
  },
  {
    name: "Latte",
    desc: "Smooth espresso with steamed milk",
    price: 3.8,
    category: "Coffee",
    img: "/images/about2.jpg",
  },
  {
    name: "Mocha",
    desc: "Chocolatey coffee with whipped cream",
    price: 4.2,
    category: "Coffee",
    img: "/images/about3.jpg",
  },
  {
    name: "Americano",
    desc: "Espresso with hot water",
    price: 2.8,
    category: "Coffee",
    img: "/images/about1.jpg",
  },
  {
    name: "Affogato",
    desc: "Espresso over vanilla ice cream",
    price: 4.5,
    category: "Desserts",
    img: "/images/about1.jpg",
  },
  {
    name: "Cold Brew",
    desc: "Smooth cold brewed coffee",
    price: 3.9,
    category: "Beverages",
    img: "/images/about2.jpg",
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
    <main className="container py-10 md:py-14 space-y-12 md:space-y-16">

      <div className="flex justify-between items-center">
        <h1 className="font-heading text-2xl md:text-4xl text-primary">
          Our Menu
        </h1>

        <div className="relative text-2xl cursor-pointer text-primary">
          🛒
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </div>

      <div className="flex gap-2 md:gap-3 flex-wrap justify-center md:justify-start">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs md:text-sm font-body border transition-all duration-300 ${
              activeCategory === cat
                ? "bg-primary text-white border-primary shadow-md"
                : "bg-transparent text-body border-gray-300 hover:bg-primary hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >

            <div className="relative h-52 overflow-hidden">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              <span className="absolute top-3 left-3 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs text-white">
                {item.category}
              </span>
            </div>

            <div className="p-5 space-y-3">

              <h3 className="font-body font-semibold text-lg text-primary">
                {item.name}
              </h3>

              <p className="text-sm text-body opacity-70 font-body">
                {item.desc}
              </p>

              <div className="flex justify-between items-center pt-2">
                <span className="font-semibold text-secondary text-base">
                  ${item.price.toFixed(2)}
                </span>

                <button
                  onClick={() => addToCart(item)}
                  className="text-sm px-4 py-2 rounded-lg font-body
                  bg-secondary text-white
                  hover:scale-105 hover:shadow-lg
                  transition-all duration-300"
                >
                  Add +
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="relative rounded-2xl overflow-hidden mt-10">
        <Image
          src="/images/about3.jpg"
          alt="Special"
          width={1200}
          height={300}
          className="w-full h-[200px] md:h-[260px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="absolute inset-0 flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-12">
          <div>
            <h3 className="font-heading text-xl md:text-2xl mb-2 text-white">
              Can’t decide?
            </h3>
            <p className="text-sm mb-3 font-body text-gray-200">
              Try our barista's special!
            </p>
            <button className="btn-primary text-sm">
              Barista's Special
            </button>
          </div>

          <p className="hidden md:block text-sm text-gray-300 mt-4 md:mt-0 text-right">
            Discover more <br /> Ask about details
          </p>
        </div>
      </div>

    </main>
  );
}
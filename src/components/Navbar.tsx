"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/store/cartStore";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useCart();
  const pathname = usePathname();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 py-4">

      {/* NAVBAR CONTAINER */}
      <div
        className={`container rounded-2xl transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-[rgba(75,46,43,0.65)] shadow-lg border border-white/10"
            : "bg-[var(--primary)] shadow-md"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 text-white">

          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl font-heading tracking-wide hover:opacity-90 transition"
          >
            ☕ Brewista
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition ${
                  pathname === link.path
                    ? "text-[var(--accent)]"
                    : "hover:text-[var(--accent)]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* CART */}
            <Link
              href="/orders"
              className="relative text-xl hover:scale-110 transition"
            >
              🛒

              {totalItems > 0 && (
                <span
                  className="absolute -top-2 -right-2 
                  bg-[var(--accent)] text-white 
                  text-[10px] font-semibold 
                  px-2 py-0.5 rounded-full shadow"
                >
                  {totalItems}
                </span>
              )}
            </Link>

            {/* CTA */}
            <Link href="/orders">
              <button className="btn-primary hidden md:block text-sm">
                Order Now
              </button>
            </Link>

            {/* MOBILE MENU ICON */}
            <div className="md:hidden text-2xl cursor-pointer hover:scale-110 transition">
              ☰
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}
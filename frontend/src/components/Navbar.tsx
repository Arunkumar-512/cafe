"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/store/cartStore";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { cart } = useCart();
  const pathname = usePathname();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    <header className="sticky top-0 z-50 px-3 sm:px-4 py-3">

      <div
        className={`
        container rounded-2xl transition-all duration-300
        ${scrolled
          ? "bg-white/10 backdrop-blur-md border border-white/10 shadow-lg"
          : "bg-[var(--primary)] shadow-md"}
        `}
      >
        <div className="flex justify-between items-center px-4 sm:px-6 py-3 text-white">

          <Link
            href="/"
            className="text-lg sm:text-xl md:text-2xl font-heading tracking-wide"
          >
            ☕ Brewista
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`
                transition
                ${pathname === link.path
                  ? "text-[var(--accent)]"
                  : "hover:text-[var(--accent)]"}
                `}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">

            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            <Link
              href="/orders"
              className="relative text-lg sm:text-xl hover:scale-110 transition"
            >
              🛒
              {totalItems > 0 && (
                <span
                  className="
                  absolute -top-2 -right-2
                  bg-[var(--accent)] text-white
                  text-[10px] font-semibold
                  px-1.5 py-0.5 rounded-full
                  shadow-md
                  "
                >
                  {totalItems}
                </span>
              )}
            </Link>

            <Link href="/orders">
              <button className="btn-primary hidden md:block text-sm px-4 py-2">
                Order Now
              </button>
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl hover:scale-110 transition"
            >
              {open ? "✕" : "☰"}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col px-4 pb-4 gap-3 text-white">

            <div className="flex justify-between items-center px-2 py-2">
              <span className="text-sm opacity-80">Theme</span>
              <ThemeToggle />
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setOpen(false)}
                className={`
                py-2 px-3 rounded-lg text-sm
                transition
                ${pathname === link.path
                  ? "bg-white/20 text-[var(--accent)]"
                  : "hover:bg-white/10"}
                `}
              >
                {link.name}
              </Link>
            ))}

            <Link href="/orders" onClick={() => setOpen(false)}>
              <button className="w-full mt-2 py-2.5 rounded-lg text-sm font-body
              bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                Order Now
              </button>
            </Link>

          </div>
        </div>

      </div>
    </header>
  );
}
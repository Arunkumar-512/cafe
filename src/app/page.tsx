"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section className="container mt-6">
        <div className="relative h-[75vh] rounded-2xl overflow-hidden">

          <Image
            src="/images/home_bg.jpg"
            alt="Coffee"
            fill
            className="object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="absolute inset-0 flex items-center px-6 md:px-12">
            <div className="max-w-xl">

              {/* ✅ Correct: inverse text on dark bg */}
              <h2 className="font-heading text-4xl md:text-6xl mb-4 leading-tight text-heading-inverse drop-shadow-md">
                Fresh Coffee,
                <br /> Cozy Vibes
              </h2>

              <p className="font-body mb-6 text-lg md:text-xl text-body-inverse">
                Handcrafted coffee made with love, just for you.
              </p>

              <button className="btn-primary font-body">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section text-center">
        <div className="container">

          {/* ✅ FIX: use primary for headings on light bg */}
          <h3 className="font-heading text-3xl mb-10 text-primary">
            Why Choose Us
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { title: "Premium Quality", desc: "We use the finest coffee beans" },
              { title: "Skilled Baristas", desc: "Expertly crafted just for you" },
              { title: "Cozy Atmosphere", desc: "A perfect place to relax" },
              { title: "Sustainable", desc: "We care for the planet" },
            ].map((item, index) => (
              <div key={index}>

                {/* ✅ use tailwind color token */}
                <div className="text-3xl mb-3 text-secondary">☕</div>

                <h4 className="font-semibold font-body text-primary">
                  {item.title}
                </h4>

                <p className="text-sm text-body font-body">
                  {item.desc}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE */}
      <section className="container grid md:grid-cols-2 gap-6 items-center">

        <div className="relative h-[420px] rounded-3xl overflow-hidden">
          <Image
            src="/images/iced_coffee.jpg"
            alt="Iced Coffee"
            fill
            className="object-cover hover:scale-105 transition"
          />
        </div>

        <div className="p-6">

          {/* ✅ FIX: primary instead of heading */}
          <h3 className="font-heading text-3xl md:text-5xl mb-4 leading-tight text-primary">
            Specialty Coffee <br /> Made for You
          </h3>

          <p className="mb-6 text-body font-body">
            From rich espresso to smooth lattes, every sip is a moment of happiness.
          </p>

          <button className="btn-primary font-body">
            Explore Menu
          </button>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="py-10">
        <div className="container rounded-xl shadow-card bg-primary text-heading-inverse">
          
          <div className="grid md:grid-cols-4 gap-10 px-6 py-10">

            {/* Brand */}
            <div>
              <h4 className="font-heading text-xl mb-3">☕ Brewista</h4>
              <p className="text-sm text-body-inverse font-body">
                A cozy coffee shop serving premium coffee since 2018.
              </p>
            </div>

            {/* Links */}
            <div>
              <h5 className="font-heading mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm text-body-inverse font-body">
                <li className="hover:text-accent cursor-pointer transition">Home</li>
                <li className="hover:text-accent cursor-pointer transition">Menu</li>
                <li className="hover:text-accent cursor-pointer transition">About</li>
                <li className="hover:text-accent cursor-pointer transition">Gallery</li>
                <li className="hover:text-accent cursor-pointer transition">Contact</li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h5 className="font-heading mb-4">Opening Hours</h5>
              <p className="text-sm text-body-inverse font-body">
                Mon - Fri: 8AM - 9PM <br />
                Sat - Sun: 9AM - 8PM
              </p>
            </div>

            {/* Subscribe */}
            <div>
              <h5 className="font-heading mb-4">Subscribe</h5>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-md text-primary text-sm bg-white font-body"
                />
                <button className="btn-primary text-sm px-4 py-2 font-body">
                  →
                </button>
              </div>
            </div>

          </div>

          <div className="text-center text-sm text-muted-inverse pb-6 font-body">
            © 2024 Brewista Cafe. All Rights Reserved.
          </div>
        </div>
      </footer>

    </main>
  );
}
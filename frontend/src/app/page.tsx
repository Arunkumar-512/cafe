"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-16 md:space-y-24">

      {/* HERO */}
      <section className="container mt-4 md:mt-6">
        <div className="relative h-[65vh] md:h-[75vh] rounded-2xl overflow-hidden">

          <Image
            src="/images/home_bg.jpg"
            alt="Coffee"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

          <div className="absolute inset-0 flex items-center px-5 md:px-12">
            <div className="max-w-lg">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl mb-4 leading-tight text-heading-inverse">
                Fresh Coffee,
                <br /> Cozy Vibes
              </h2>

              <p className="font-body mb-6 text-base sm:text-lg md:text-xl text-body-inverse">
                Handcrafted coffee made with love, just for you.
              </p>

              <Link href="/menu">
                <button className="btn-primary font-body px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section text-center">
        <div className="container">

          <h3 className="font-heading text-2xl md:text-4xl mb-8 md:mb-12 text-primary">
            Why Choose Us
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { image: "/images/home_icon1.png", title: "Premium Quality", desc: "We use the finest coffee beans" },
              { image: "/images/home_icon2.png", title: "Skilled Baristas", desc: "Expertly crafted just for you" },
              { image: "/images/home_icon3.png", title: "Cozy Atmosphere", desc: "A perfect place to relax" },
              { image: "/images/home_icon4.png", title: "Sustainable", desc: "We care for the planet" },
            ].map((item, index) => (
              <div
                key={index}
                className="space-y-3 flex flex-col items-center"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={96}
                  height={96}
                  style={{ width: "96px", height: "auto" }} // ✅ FIXED
                />

                <h4 className="font-semibold font-body text-sm md:text-base text-primary">
                  {item.title}
                </h4>

                <p className="text-xs md:text-sm text-body font-body opacity-80 max-w-[160px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center">

        <div className="relative h-[240px] sm:h-[300px] md:h-[520px] rounded-xl overflow-hidden">
          <Image
            src="/images/iced_coffee.jpg"
            alt="Iced Coffee"
            fill
            sizes="(max-width: 768px) 100vw, 50vw" // ✅ FIXED
            className="object-cover"
          />
        </div>

        <div className="p-2 md:p-6 text-center md:text-left">
          <h3 className="font-heading text-2xl sm:text-3xl md:text-5xl mb-4 leading-tight text-primary">
            Specialty Coffee <br className="hidden md:block" /> Made for You
          </h3>

          <p className="mb-6 text-sm md:text-base text-body font-body opacity-80 max-w-md mx-auto md:mx-0">
            From rich espresso to smooth lattes, every sip is a moment of happiness.
          </p>

          <button className="btn-primary font-body px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base">
            Explore Menu
          </button>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="py-8 md:py-10">
        <div className="container rounded-2xl shadow-card bg-primary text-heading-inverse">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 px-5 md:px-6 py-8 md:py-10 text-left">

            <div>
              <h4 className="font-heading text-lg md:text-xl mb-3">☕ Brewista</h4>
              <p className="text-xs md:text-sm text-body-inverse font-body opacity-80 leading-relaxed">
                A cozy coffee shop serving premium coffee since 2018.
              </p>
            </div>

            <div>
              <h5 className="font-heading mb-3 md:mb-4 text-sm md:text-base">
                Quick Links
              </h5>
              <ul className="space-y-2 text-xs md:text-sm text-body-inverse font-body">
                <li className="hover:text-accent cursor-pointer">Home</li>
                <li className="hover:text-accent cursor-pointer">Menu</li>
                <li className="hover:text-accent cursor-pointer">About</li>
                <li className="hover:text-accent cursor-pointer">Gallery</li>
                <li className="hover:text-accent cursor-pointer">Contact</li>
              </ul>
            </div>

            <div>
              <h5 className="font-heading mb-3 md:mb-4 text-sm md:text-base">
                Opening Hours
              </h5>
              <p className="text-xs md:text-sm text-body-inverse font-body opacity-80 leading-relaxed">
                Mon - Fri: 8AM - 9PM <br />
                Sat - Sun: 9AM - 8PM
              </p>
            </div>

            <div>
              <h5 className="font-heading mb-3 md:mb-4 text-sm md:text-base">
                Subscribe
              </h5>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-md 
                  text-primary text-xs md:text-sm border border-white/30
                  bg-secondary font-body outline-none"
                />

                <button className="btn-primary text-xs md:text-sm px-4 py-2 w-full sm:w-auto">
                  →
                </button>
              </div>
            </div>

          </div>

          <div className="text-left md:text-center px-5 md:px-6 pb-6 
          text-xs md:text-sm text-muted-inverse font-body opacity-70">
            © 2024 Brewista Cafe. All Rights Reserved.
          </div>

        </div>
      </footer>

    </main>
  );
}
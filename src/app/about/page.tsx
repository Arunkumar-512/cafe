import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="container py-12 space-y-20">

      {/* OUR STORY */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT */}
        <div>
          <h2 className="font-heading text-3xl md:text-4xl mb-3 text-[var(--primary)]">
            Our Story
          </h2>

          <div className="flex items-center gap-3 mb-5 text-[var(--secondary)]">
            <span className="w-12 h-[1px] bg-[var(--secondary)]" />
            ☕
            <span className="w-12 h-[1px] bg-[var(--secondary)]" />
          </div>

          <p className="font-body text-sm md:text-base leading-relaxed text-[var(--foreground)] opacity-80">
            Brewista Cafe was born out of a love for great coffee and warm spaces.
            Since 2018, we've been serving handcrafted coffee and delicious treats
            with passion.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-soft">
          <Image
            src="/images/about1.jpg"
            alt="Cafe Interior"
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>

      </section>

      {/* OUR PASSION */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE */}
        <div className="relative h-[350px] md:h-[500px] rounded-2xl overflow-hidden order-1 md:order-none shadow-soft">
          <Image
            src="/images/about2.jpg"
            alt="Barista"
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* TEXT */}
        <div>
          <h2 className="font-heading text-3xl md:text-4xl mb-3 text-[var(--primary)]">
            Our Passion
          </h2>

          <div className="flex items-center gap-3 mb-5 text-[var(--secondary)]">
            <span className="w-12 h-[1px] bg-[var(--secondary)]" />
            ☕
            <span className="w-12 h-[1px] bg-[var(--secondary)]" />
          </div>

          <p className="font-body text-sm md:text-base leading-relaxed text-[var(--foreground)] opacity-80">
            We believe coffee is more than a drink — it's an experience.
            Our baristas craft every cup with care and perfection.
          </p>
        </div>

      </section>

      {/* VALUES */}
      <section className="text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-3 text-[var(--primary)]">
          Our Values
        </h2>

        <div className="flex justify-center items-center gap-3 mb-12 text-[var(--secondary)]">
          <span className="w-12 h-[1px] bg-[var(--secondary)]" />
          ☕
          <span className="w-12 h-[1px] bg-[var(--secondary)]" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { title: "Quality", desc: "We use the best ingredients" },
            { title: "Community", desc: "We create a place for everyone" },
            { title: "Sustainability", desc: "We care for our planet" },
            { title: "Passion", desc: "We love what we do" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-xl transition bg-[var(--background)] hover:bg-[rgba(75,46,43,0.08)]"
            >
              <div className="text-3xl mb-2 text-[var(--secondary)]">☕</div>

              <h4 className="font-body font-semibold text-[var(--primary)]">
                {item.title}
              </h4>

              <p className="text-sm font-body text-[var(--foreground)] opacity-70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative rounded-2xl overflow-hidden">
        <Image
          src="/images/about3.jpg"
          alt="Visit Cafe"
          width={1200}
          height={400}
          className="w-full h-[360px] object-cover"
        />

        {/* ✅ Overlay FIX (important for readability) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/80 via-[var(--primary)]/50 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-between px-6 md:px-12">
          
          <div>
            <h3 className="font-heading text-2xl md:text-3xl mb-2 text-[var(--text-heading)]">
              Come Visit Us
            </h3>

            <p className="text-sm md:text-base mb-4 text-[var(--text-body)] font-body">
              Experience the perfect blend of coffee, comfort, and community.
            </p>

            <button className="btn-primary font-body">
              Find Us
            </button>
          </div>

          <div className="hidden md:block text-sm text-[var(--text-muted)] font-body text-right">
            Open daily <br /> Warm & cozy vibes
          </div>

        </div>
      </section>

    </main>
  );
};

export default AboutPage;
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="container py-10 md:py-14 space-y-16 md:space-y-24">

      <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        <div className="text-center md:text-left">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl mb-3 text-primary">
            Our Story
          </h2>

          <div className="flex items-center justify-center md:justify-start gap-3 mb-5 text-secondary">
            <span className="w-10 md:w-12 h-[1px] bg-secondary" />
            ☕
            <span className="w-10 md:w-12 h-[1px] bg-secondary" />
          </div>

          <p className="font-body text-sm sm:text-base md:text-lg leading-relaxed text-body opacity-80">
            Brewista Cafe was born out of a love for great coffee and warm spaces.
            Since 2018, we've been serving handcrafted coffee and delicious treats
            with passion.
          </p>
        </div>

        <div className="relative h-[260px] sm:h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/about1.jpg"
            alt="Cafe Interior"
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>

      </section>

      <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* IMAGE */}
        <div className="relative h-[260px] sm:h-[320px] md:h-[500px] rounded-2xl overflow-hidden order-1 md:order-none shadow-lg">
          <Image
            src="/images/about2.jpg"
            alt="Barista"
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl mb-3 text-primary">
            Our Passion
          </h2>

          <div className="flex items-center justify-center md:justify-start gap-3 mb-5 text-secondary">
            <span className="w-10 md:w-12 h-[1px] bg-secondary" />
            ☕
            <span className="w-10 md:w-12 h-[1px] bg-secondary" />
          </div>

          <p className="font-body text-sm sm:text-base md:text-lg leading-relaxed text-body opacity-80">
            We believe coffee is more than a drink — it's an experience.
            Our baristas craft every cup with care and perfection.
          </p>
        </div>

      </section>

      <section className="text-center">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl mb-3 text-primary">
          Our Values
        </h2>

        <div className="flex justify-center items-center gap-3 mb-12 md:mb-16 text-secondary">
          <span className="w-10 md:w-12 h-[1px] bg-secondary" />
          ☕
          <span className="w-10 md:w-12 h-[1px] bg-secondary" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {[
            { image: "/images/icon1.png", title: "Quality", desc: "We use the best ingredients" },
            { image: "/images/icon2.png", title: "Community", desc: "We create a place for everyone" },
            { image: "/images/icon3.png", title: "Sustainability", desc: "We care for our planet" },
            { image: "/images/icon4.png", title: "Passion", desc: "We love what we do" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center space-y-3 md:space-y-4">

              <div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>

              <h4 className="font-body font-medium text-sm md:text-lg text-primary">
                {item.title}
              </h4>

              <p className="text-xs md:text-sm text-body opacity-70 max-w-[140px] md:max-w-[160px]">
                {item.desc}
              </p>

            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6 items-center rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">

        <div className="p-6 md:p-10 text-center md:text-left">
          <h3 className="font-heading text-xl md:text-3xl mb-2 text-primary">
            Come Visit Us
          </h3>

          <p className="text-sm md:text-base mb-4 text-body font-body opacity-80">
            Experience the perfect blend of coffee, comfort, and community.
          </p>

          <button className="btn-primary px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base">
            Find Us
          </button>

          <div className="mt-4 text-xs md:text-sm text-muted font-body">
            Open daily <br /> Warm & cozy vibes
          </div>
        </div>

        <div className="relative h-[220px] md:h-[360px]">
          <Image
            src="/images/about3.jpg"
            alt="Visit Cafe"
            fill
            className="object-cover"
          />
        </div>

      </section>

    </main>
  );
};

export default AboutPage;
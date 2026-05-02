import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="container py-12 space-y-20">

      {/* HEADER */}
      <section className="text-center max-w-xl mx-auto">
        <h1 className="font-heading text-3xl md:text-4xl mb-2 text-[var(--primary)]">
          Get in Touch
        </h1>
        <p className="font-body text-sm text-[var(--foreground)] opacity-70">
          We'd love to hear from you!
        </p>
      </section>

      {/* 🔥 GRID: FORM + CONTACT INFO */}
      <section className="grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT → FORM */}
        <div className="space-y-4">

          {[
            { type: "text", placeholder: "Your Name" },
            { type: "email", placeholder: "Email Address" },
            { type: "tel", placeholder: "Phone Number" },
          ].map((field, i) => (
            <input
              key={i}
              type={field.type}
              placeholder={field.placeholder}
              className="w-full px-4 py-3 rounded-xl 
              font-body text-sm
              border border-[rgba(75,46,43,0.2)] 
              bg-[var(--background)] text-[var(--foreground)]
              hover:border-[var(--secondary)]
              focus:outline-none focus:border-[var(--primary)] 
              focus:ring-2 focus:ring-[rgba(75,46,43,0.15)] 
              transition-all duration-300"
            />
          ))}

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 rounded-xl 
            font-body text-sm
            border border-[rgba(75,46,43,0.2)] 
            bg-[var(--background)] text-[var(--foreground)]
            hover:border-[var(--secondary)]
            focus:outline-none focus:border-[var(--primary)] 
            focus:ring-2 focus:ring-[rgba(75,46,43,0.15)] 
            transition-all duration-300"
          />

          <button className="w-full py-3 rounded-xl text-white font-body
          bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] 
          hover:scale-[1.02] hover:shadow-md 
          transition-all duration-300">
            Send Message
          </button>

        </div>

        {/* RIGHT → CONTACT DETAILS */}
        <div className="space-y-6">

          {[
            { icon: "📍", title: "Address", text: "123 Coffee Street, Brew City,\nCA 90210, USA" },
            { icon: "📞", title: "Phone", text: "+1 (505) 123-4567" },
            { icon: "✉️", title: "Email", text: "hello@brewista.com" },
            { icon: "⏰", title: "Opening Hours", text: "Mon - Fri: 8AM - 10PM\nSat - Sun: 9AM - 11PM" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-xl 
              bg-[var(--background)] 
              border border-[rgba(75,46,43,0.2)] 
              shadow-soft"
            >

              {/* ICON */}
              <div className="p-3 rounded-lg 
              bg-[var(--secondary)]/20 
              text-xl">
                {item.icon}
              </div>

              {/* TEXT */}
              <div>
                <h4 className="font-body font-semibold text-[var(--primary)]">
                  {item.title}
                </h4>
                <p className="font-body text-sm opacity-70 whitespace-pre-line text-[var(--foreground)]">
                  {item.text}
                </p>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* 🔥 MAP AT BOTTOM */}
      <section className="rounded-2xl overflow-hidden
      border border-[rgba(75,46,43,0.2)] shadow-soft">
        <Image
          src="/images/contact/map.jpg"
          alt="Map"
          width={1200}
          height={400}
          className="w-full h-[320px] object-cover"
        />
      </section>

    </main>
  );
}
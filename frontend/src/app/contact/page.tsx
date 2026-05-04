import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="container py-10 md:py-14 space-y-16 md:space-y-20">

      <section className="text-center max-w-xl mx-auto space-y-2">
        <h1 className="font-heading text-2xl md:text-4xl text-primary">
          Get in Touch
        </h1>
        <p className="font-body text-xs md:text-sm text-body opacity-70">
          We'd love to hear from you!
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">

        <div className="space-y-4 p-5 md:p-6 rounded-2xl 
        bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">

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
              border border-white/10
              bg-transparent text-foreground
              placeholder:text-gray-400
              focus:outline-none focus:border-primary
              focus:ring-2 focus:ring-primary/20
              transition-all duration-300"
            />
          ))}

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 rounded-xl 
            font-body text-sm
            border border-white/10
            bg-transparent text-foreground
            placeholder:text-gray-400
            focus:outline-none focus:border-primary
            focus:ring-2 focus:ring-primary/20
            transition-all duration-300"
          />

          <button className="w-full py-3 rounded-xl text-white font-body
          bg-gradient-to-r from-primary to-secondary
          hover:scale-[1.02] hover:shadow-lg
          transition-all duration-300">
            Send Message
          </button>
        </div>

        <div className="space-y-5">

          {[
            { icon: "📍", title: "Address", text: "123 Coffee Street, Brew City,\nCA 90210, USA" },
            { icon: "📞", title: "Phone", text: "+1 (505) 123-4567" },
            { icon: "✉️", title: "Email", text: "hello@brewista.com" },
            { icon: "⏰", title: "Opening Hours", text: "Mon - Fri: 8AM - 10PM\nSat - Sun: 9AM - 11PM" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 md:p-5 rounded-xl 
              bg-white/5 backdrop-blur-md
              border border-white/10 
              shadow-md hover:shadow-lg
              transition-all duration-300"
            >

              <div className="p-3 rounded-lg 
              bg-secondary/20 text-lg md:text-xl">
                {item.icon}
              </div>

              <div>
                <h4 className="font-body font-semibold text-primary text-sm md:text-base">
                  {item.title}
                </h4>
                <p className="font-body text-xs md:text-sm opacity-70 whitespace-pre-line text-foreground">
                  {item.text}
                </p>
              </div>

            </div>
          ))}

        </div>

      </section>

      <section className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">

        <div className="relative">
          <Image
            src="/images/contact/map.jpg"
            alt="Map"
            width={1200}
            height={400}
            className="w-full h-[260px] md:h-[360px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          <div className="absolute bottom-4 left-4 text-white text-sm font-body">
            Visit Our Location 📍
          </div>
        </div>

      </section>

    </main>
  );
}
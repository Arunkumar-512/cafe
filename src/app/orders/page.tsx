"use client";

import CartItem from "@/components/CartItem";
import CartDrawer from "@/components/CartDrawer";
import { useCart } from "@/store/cartStore";

export default function OrdersPage() {
  const { cart } = useCart();

  return (
    <main className="container py-10 md:py-14 space-y-12">

      <div className="text-center max-w-xl mx-auto space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading text-primary">
          Order Online
        </h1>
        <p className="text-xs sm:text-sm text-body opacity-70">
          Select your favorite items and enjoy fresh handcrafted coffee.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

        <div className="md:col-span-2 space-y-4 md:space-y-5">
          {cart.length === 0 ? (
            <div
              className="
              rounded-2xl p-6 text-center
              bg-transparent
              border border-white/10
              backdrop-blur-md
              "
            >
              <p className="text-sm text-body opacity-60">
                Your cart is empty ☕
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          )}
        </div>

        <div className="flex flex-col gap-6 md:sticky md:top-24 h-fit">

          <CartDrawer />

          <div
            className="
            rounded-2xl p-5 md:p-6
            bg-transparent
            border border-white/10
            backdrop-blur-md
            "
          >
            <h3 className="font-heading text-base md:text-lg mb-2 text-primary">
              Add a Special Note
            </h3>

            <p className="text-xs md:text-sm text-body opacity-70 mb-3">
              Any special instructions for your order?
            </p>

            <textarea
              rows={4}
              placeholder="Write your note here..."
              className="
              w-full px-4 py-3 rounded-xl 
              border border-white/10 
              bg-transparent text-foreground
              placeholder:text-gray-400
              focus:outline-none focus:border-primary
              focus:ring-2 focus:ring-primary/20
              transition-all duration-300 text-sm
              "
            />
          </div>

        </div>
      </div>

      <div className="rounded-2xl p-8 md:p-10 relative overflow-hidden">

        <div className="absolute inset-0 
          bg-gradient-to-br 
          from-[var(--primary)] 
          via-[#3b241f] 
          to-black 
          opacity-95"
        />

        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />

        {/* CONTENT */}
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

          {[
            { image: "/images/icon5.png", title: "Fast Delivery", desc: "Quick & reliable delivery" },
            { image: "/images/icon6.png", title: "Secure Payment", desc: "100% safe & secure" },
            { image: "/images/icon7.png", title: "Best Quality", desc: "Premium ingredients guaranteed" },
          ].map((item, i) => (
            <div key={i} className="space-y-3 flex flex-col items-center">

              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                <img src={item.image} alt={item.title} className="object-contain" />
              </div>

              <h4 className="font-heading text-sm md:text-base text-heading-inverse">
                {item.title}
              </h4>

              <p className="text-xs md:text-sm text-body-inverse opacity-80 font-body">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>

    </main>
  );
}
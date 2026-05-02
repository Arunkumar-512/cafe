"use client";

import CartItem from "@/components/CartItem";
import CartDrawer from "@/components/CartDrawer";
import { useCart } from "@/store/cartStore";

export default function OrdersPage() {
  const { cart } = useCart();

  return (
    <main className="container py-14 space-y-14">

      {/* HEADER */}
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading mb-3 text-[var(--primary)]">
          Order Online
        </h1>
        <p className="text-sm text-[var(--foreground)] opacity-70">
          Select your favorite items and enjoy fresh handcrafted coffee.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-3 gap-10">

        {/* LEFT: ITEMS */}
        <div className="md:col-span-2 space-y-6">
          {cart.length === 0 ? (
            <div className="card p-6 text-center">
              <p className="text-sm text-[var(--foreground)] opacity-60">
                Your cart is empty ☕
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          )}
        </div>

        {/* RIGHT: CART */}
        <CartDrawer />
      </div>

      {/* NOTE */}
      <div className="max-w-xl card p-6 shadow-soft">
        <h3 className="font-heading text-lg mb-2 text-[var(--primary)]">
          Add a Special Note
        </h3>
        <p className="text-sm text-[var(--foreground)] opacity-70 mb-3">
          Any special instructions for your order?
        </p>

        <textarea
          rows={4}
          placeholder="Write your note here..."
          className="w-full px-4 py-3 rounded-lg 
          border border-[rgba(75,46,43,0.25)] 
          bg-[var(--background)] text-[var(--foreground)]
          placeholder:text-[var(--text-muted)]
          hover:border-[var(--primary)]
          focus:outline-none focus:border-[var(--primary)] 
          focus:ring-2 focus:ring-[rgba(75,46,43,0.15)] 
          transition-all"
        />
      </div>

      {/* FEATURES */}
      <div className="rounded-2xl p-8 grid md:grid-cols-3 gap-6 text-center card">

        <div className="space-y-2">
          <div className="text-3xl text-[var(--secondary)]">🚚</div>
          <h4 className="font-heading text-[var(--primary)]">
            Fast Delivery
          </h4>
          <p className="text-sm text-[var(--foreground)] opacity-70">
            Quick & reliable delivery
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-3xl text-[var(--secondary)]">💳</div>
          <h4 className="font-heading text-[var(--primary)]">
            Secure Payment
          </h4>
          <p className="text-sm text-[var(--foreground)] opacity-70">
            100% safe & secure
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-3xl text-[var(--secondary)]">⭐</div>
          <h4 className="font-heading text-[var(--primary)]">
            Best Quality
          </h4>
          <p className="text-sm text-[var(--foreground)] opacity-70">
            Premium ingredients guaranteed
          </p>
        </div>

      </div>

    </main>
  );
}
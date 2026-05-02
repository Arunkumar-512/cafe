"use client";

import { useCart } from "@/store/cartStore";

export default function CartDrawer() {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div
      className="w-full rounded-xl p-6 shadow-sm
      bg-[#f9f6f1] border border-[rgba(75,46,43,0.2)]"
    >
      {/* HEADER */}
      <h3 className="text-lg font-semibold mb-4 text-[var(--primary)]">
        Your Cart
      </h3>

      {/* ITEMS */}
      <div className="space-y-3 text-sm">
        {cart.length === 0 ? (
          <p className="opacity-60">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-[rgba(75,46,43,0.15)] pb-2"
            >
              <span className="text-[var(--foreground)]">
                {item.name} x{item.quantity}
              </span>
              <span className="font-medium text-[var(--primary)]">
                ${ (item.price * item.quantity).toFixed(2) }
              </span>
            </div>
          ))
        )}
      </div>

      {/* TOTAL SECTION */}
      <div className="mt-4 pt-4 border-t border-[rgba(75,46,43,0.2)] text-sm space-y-2">
        
        <div className="flex justify-between text-[var(--foreground)]">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-[var(--foreground)]">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <div className="flex justify-between font-semibold text-base text-[var(--primary)]">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* BUTTON */}
      <button
        className="w-full mt-5 py-3 rounded-lg text-white 
        bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] 
        hover:scale-[1.02] hover:shadow-md transition-all duration-300"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
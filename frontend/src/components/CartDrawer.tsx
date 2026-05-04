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
      className="
      w-full rounded-2xl 
      p-4 sm:p-5 md:p-6
      bg-white/5 backdrop-blur-md 
      border border-white/10 
      shadow-lg
      flex flex-col
      max-h-[80vh] md:max-h-none
      "
    >
      <h3 className="text-base sm:text-lg md:text-xl font-heading mb-4 text-primary">
        Your Cart
      </h3>

      <div className="space-y-3 text-xs sm:text-sm flex-1 overflow-y-auto pr-1">
        {cart.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-body opacity-60">
              Your cart is empty ☕
            </p>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="
              flex justify-between items-center 
              border-b border-white/10 pb-3
              "
            >
              <span className="text-foreground truncate max-w-[65%]">
                {item.name} x{item.quantity}
              </span>

              <span className="font-medium text-primary">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))
        )}
      </div>

      <div className="mt-5 pt-4 border-t border-white/10 space-y-2 text-xs sm:text-sm">

        <div className="flex justify-between text-body">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-body">
          <span>Tax (10%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <div
          className="
          flex justify-between items-center mt-3
          p-3 rounded-xl
          bg-white/10
          border border-white/10
          backdrop-blur-md
          "
        >
          <span className="font-semibold text-primary">
            Total
          </span>

          <span className="font-semibold text-base sm:text-lg text-primary">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="mt-5">
        <button
          className="
          w-full py-2.5 sm:py-3
          text-sm sm:text-base
          rounded-xl text-white
          bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]
          hover:scale-[1.02] hover:shadow-lg
          active:scale-[0.97]
          transition-all duration-300
          "
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
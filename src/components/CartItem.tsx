"use client";

import Image from "next/image";
import { useCart, CartItemType } from "@/store/cartStore";

export default function CartItem({ item }: { item: CartItemType }) {
  const { increase, decrease, remove } = useCart();

  return (
    <div
      className="flex gap-4 items-center p-4 rounded-2xl
      bg-[#f9f6f1] border border-[rgba(75,46,43,0.2)]
      shadow-sm hover:shadow-md transition-all duration-300"
    >

      {/* IMAGE */}
      <div className="relative w-20 h-20 rounded-xl overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* DETAILS */}
      <div className="flex-1">
        <h4 className="font-heading text-lg text-[var(--primary)]">
          {item.name}
        </h4>

        <p className="text-sm text-[var(--foreground)] opacity-70">
          ${item.price.toFixed(2)}
        </p>

        {/* QUANTITY CONTROLS */}
        <div className="flex items-center gap-3 mt-3">

          <button
            onClick={() => decrease(item.id)}
            className="w-8 h-8 flex items-center justify-center rounded-md
            border border-[rgba(75,46,43,0.3)]
            text-[var(--primary)]
            hover:bg-[var(--primary)] hover:text-white
            active:scale-90 transition"
          >
            −
          </button>

          <span className="min-w-[24px] text-center text-[var(--primary)] font-medium">
            {item.quantity}
          </span>

          <button
            onClick={() => increase(item.id)}
            className="w-8 h-8 flex items-center justify-center rounded-md
            border border-[rgba(75,46,43,0.3)]
            text-[var(--primary)]
            hover:bg-[var(--primary)] hover:text-white
            active:scale-90 transition"
          >
            +
          </button>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col items-end justify-between h-full">

        {/* ITEM TOTAL */}
        <span className="text-sm font-semibold text-[var(--primary)]">
          ${(item.price * item.quantity).toFixed(2)}
        </span>

        {/* REMOVE BUTTON */}
        <button
          onClick={() => remove(item.id)}
          className="text-sm text-red-400 hover:text-red-600
          hover:scale-110 transition"
        >
          Remove
        </button>

      </div>

    </div>
  );
}
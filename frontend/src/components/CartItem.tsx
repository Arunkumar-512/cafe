"use client";

import Image from "next/image";
import { useCart, CartItemType } from "@/store/cartStore";

export default function CartItem({ item }: { item: CartItemType }) {
  const { increase, decrease, remove } = useCart();

  return (
    <div
      className="
      flex gap-3 sm:gap-4 items-center 
      p-3 sm:p-4 rounded-2xl
      bg-white/5 backdrop-blur-md 
      border border-white/10
      shadow-md hover:shadow-lg
      transition-all duration-300
      "
    >

      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <div className="flex-1 min-w-0">

        <h4 className="font-heading text-sm sm:text-base md:text-lg text-primary truncate">
          {item.name}
        </h4>

        <p className="text-xs sm:text-sm text-body opacity-70">
          ${item.price.toFixed(2)}
        </p>

        <div className="flex items-center gap-2 sm:gap-3 mt-2">

          <button
            onClick={() => decrease(item.id)}
            className="
            w-7 h-7 sm:w-8 sm:h-8 
            flex items-center justify-center 
            rounded-full
            border border-white/20
            text-primary
            hover:bg-primary hover:text-white
            active:scale-90
            transition
            "
          >
            −
          </button>

          <span className="min-w-[20px] text-center text-primary font-medium text-sm">
            {item.quantity}
          </span>

          <button
            onClick={() => increase(item.id)}
            className="
            w-7 h-7 sm:w-8 sm:h-8 
            flex items-center justify-center 
            rounded-full
            border border-white/20
            text-primary
            hover:bg-primary hover:text-white
            active:scale-90
            transition
            "
          >
            +
          </button>

        </div>
      </div>

      <div className="flex flex-col items-end justify-between h-full gap-2">

        <span className="text-sm sm:text-base font-semibold text-primary">
          ${(item.price * item.quantity).toFixed(2)}
        </span>

        <button
          onClick={() => remove(item.id)}
          className="
          text-xs sm:text-sm 
          text-red-400 hover:text-red-600
          hover:underline
          transition
          "
        >
          Remove
        </button>

      </div>

    </div>
  );
}
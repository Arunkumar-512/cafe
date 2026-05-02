import type { Metadata } from "next";
import { Pacifico, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/store/cartStore";

// ✍️ Script font (branding only)
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

// 📖 Clean readable font
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brew Haven Café ☕",
  description: "Fresh coffee, cozy vibes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${pacifico.variable} ${nunito.variable} h-full antialiased`}
    >
      {/* ✅ USE NEW TEXT SYSTEM */}
      <body className="min-h-full flex flex-col bg-background text-body font-body">

        <CartProvider>

          {/* NAVBAR */}
          <Navbar />

          {/* PAGE CONTENT */}
          <main className="flex-1">
            {children}
          </main>

        </CartProvider>

      </body>
    </html>
  );
}
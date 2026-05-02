import type { Metadata } from "next";
import { Pacifico, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/store/cartStore";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

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
  suppressHydrationWarning
  className={`${pacifico.variable} ${nunito.variable} h-full`}
  style={{ colorScheme: "light dark" }}
>
      
      <head>
      <script
  dangerouslySetInnerHTML={{
    __html: `
(function () {
  try {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      // Apple-style: fallback to system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      }
    }
  } catch (e) {}
})();
    `,
  }}
/>
      </head>

<body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--text-body)] font-body antialiased transition-colors duration-500">

        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
        </CartProvider>

      </body>
    </html>
  );
}
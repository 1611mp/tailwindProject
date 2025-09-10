import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto, Anton } from 'next/font/google';
import "./globals.css";

import Header from "@/components/Header";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "./providers"
import { CartProvider } from "@/context/CartContext"
import CartSidebar from "@/components/CartSidebar";


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: "--font-roboto"
})

const alpha_slab_one = Anton({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--font-alpha_slab_one"
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Fish Market App",
  description: "A complete marketplace to buy fish",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fishicon.ico" type="image/x-icon" />
      </head>
      <body>
        <Providers>
          <CartProvider>
            <CartSidebar />
            {/* <Navbar/> */}
            <Header />
            <main className="relative overflow-hidden">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}

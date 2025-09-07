import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto, Rubik, Anton, Alfa_Slab_One } from 'next/font/google';
import "./globals.css";



import Header from "@/components/Header";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ['latin'],
  weight : ['400', '700'],
  variable :"--font-roboto"
})

const alpha_slab_one = Anton({
  subsets: ['latin'],
  weight : ['400'],
  variable : "--font-alpha_slab_one"
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar/> */}
        <Header />

        <main className="relative overflow-hidden">
          {children}
        </main>
        <section></section>
        <Footer />
      </body>
    </html>
  );
}

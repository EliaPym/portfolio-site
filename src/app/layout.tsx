import type { Metadata } from "next";
import "@/app/css/globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { Ubuntu, Sono, Roboto_Condensed, Roboto_Mono } from 'next/font/google';

const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
});

const sono = Sono({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sono',
});

const robotoCondensed = Roboto_Condensed({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-condensed',
});

const robotoMono = Roboto_Mono({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: "Home - Portfolio",
  description: "Home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} ${sono.variable} ${robotoCondensed.variable} ${robotoMono.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

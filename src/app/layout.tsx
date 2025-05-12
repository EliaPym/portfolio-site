import type { Metadata } from "next";
import "@/app/css/globals.css";
import Navbar from "./navbar";
import { Ubuntu, Sono } from 'next/font/google';

const ubuntu = Ubuntu({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
});

const sono = Sono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sono',
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
      <body className={`${ubuntu.variable} ${sono.variable} antialiased`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}

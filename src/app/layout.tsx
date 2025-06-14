import type { Metadata } from "next";
import "@/app/css/globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import { Rubik, Sono, Roboto_Condensed, Roboto_Mono } from "next/font/google";

const rubik = Rubik({
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

const sono = Sono({
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sono",
});

const robotoCondensed = Roboto_Condensed({
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-condensed",
});

const robotoMono = Roboto_Mono({
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "E-P.dev",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${sono.variable} ${robotoCondensed.variable} ${robotoMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

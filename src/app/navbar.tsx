"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between p-4 text-white">
        <div className="text-2xl font-roboto-mono">
          <Link href="/">E-P.dev</Link>
        </div>
        <ul className="flex space-x-8 text-lg navbar">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

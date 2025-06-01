"use client";

import Link from "next/link";
import { DevIcon } from "@/../public/icons/devIcon";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between p-4 text-primary">
        <div className="text-2xl font-roboto-mono font-light epdev">
          <Link href="/" className="flex flex-row items-center" >
            <DevIcon className="w-10 h-10 mr-2 fill-primary" />
            <p>E-P.dev</p>
          </Link>
        </div>
        <ul className="flex space-x-8 text-xl navbar pr-8">
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

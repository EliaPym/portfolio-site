"use client";

import Link from "next/link";
import { DevIcon } from "@/../public/icons/icons";
import React from "react";
import { usePathname } from "next/navigation";
import ThemeSwitch from "../components/ThemeSwitch";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="px-2 text-base-content backdrop-blur-xs sm:backdrop-blur-none md:px-5">
        <nav className="flex items-center justify-between p-4">
          {/* Burger Icon */}
          <button
            className="flex flex-col gap-1 sm:hidden w-fit h-fit"
            onClick={toggleMenu}
          >
            <span
              className={`block w-6 h-1 bg-transparent rounded-full border border-base-content transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-1 bg-base-100 rounded-full border border-base-content transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-1 bg-base-100 rounded-full border border-base-content transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-2 h-0.5 bg-base-100 transition-all duration-400 ease-in-out rotate-45 -translate-y-[15px] translate-x-2 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>

          {/* Logo */}
          <div className="text-xl font-light font-roboto-mono epdev">
            <Link href="/" className="flex flex-row items-center">
              <DevIcon className="w-10 h-10 mr-2 fill-base-content" />
              <p>E-P.dev</p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="items-center justify-center hidden pr-8 space-x-8 text-lg sm:flex navbar">
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
            <ThemeSwitch />
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`sm:hidden transition-all duration-800 ease-in-out overflow-hidden border-b border-base-content ${
            isOpen ? "max-h-80" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-start pb-5 pl-8 space-y-4 font-sans text-lg font-light bg-gradient-to-t from-black/35 to-transparent navbar">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                <span
                  className={`${usePathname() === "/" ? "ml-4 italic" : ""}`}
                >
                  {usePathname() === "/" ? ">_" : ""}Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                <span
                  className={`${
                    usePathname() === "/about" ? "ml-4 italic" : ""
                  }`}
                >
                  {usePathname() === "/about" ? ">_" : ""}About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={() => setIsOpen(false)}>
                <span
                  className={`${
                    usePathname() === "/projects" ? "ml-4 italic" : ""
                  }`}
                >
                  {usePathname() === "/projects" ? ">_" : ""}Projects
                </span>
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setIsOpen(false)}>
                <span
                  className={`${
                    usePathname() === "/blog" ? "ml-4 italic" : ""
                  }`}
                >
                  {usePathname() === "/blog" ? ">_" : ""}Blog
                </span>
              </Link>
            </li>
            <li>
              <Link href="/resume" onClick={() => setIsOpen(false)}>
                <span
                  className={`${
                    usePathname() === "/resume" ? "ml-4 italic" : ""
                  }`}
                >
                  {usePathname() === "/resume" ? ">_" : ""}Resume
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <span
                  className={`${
                    usePathname() === "/contact" ? "ml-4 italic" : ""
                  }`}
                >
                  {usePathname() === "/contact" ? ">_" : ""}Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

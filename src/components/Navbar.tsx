"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 flex justify-center bg-white z-50 border-black border-b-1">
      <nav className="container py-6 px-[8%] flex justify-between items-center">
        <Link href="/">
          <p className="font-[600] text-xl">Portfolio</p>
        </Link>
        <div className="hidden lg:flex gap-13">
          <Link href="/About" className="hover:opacity-80">
            About
          </Link>
          <Link href="/Work" className="hover:opacity-80">
            Work
          </Link>
          <Link href="/Contact" className="hover:opacity-80">
            Contact
          </Link>
        </div>
        <div className="inline lg:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="focus:outline-none"
          >
            <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21" cy="4" r="4" fill="#2D2D2D" />
              <circle cx="21" cy="19" r="4" fill="#2D2D2D" />
              <circle cx="4" cy="4" r="4" fill="#2D2D2D" />
              <circle cx="4" cy="19" r="4" fill="#2D2D2D" />
            </svg>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 flex flex-col justify-center items-center z-[100]">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-8 text-3xl"
          >
            &times;
          </button>
          <div className="flex flex-col gap-10 items-center text-2xl font-[600]">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:opacity-80 lg:hidden">
              Home
            </Link>
            <Link href="/About" onClick={() => setMenuOpen(false)} className="hover:opacity-80">
              About
            </Link>
            <Link href="/Work" onClick={() => setMenuOpen(false)} className="hover:opacity-80">
              Work
            </Link>
            <Link href="/Contact" onClick={() => setMenuOpen(false)} className="hover:opacity-80">
              Contact
            </Link>
          </div>
          <div className="absolute bottom-8 w-full flex justify-center">
            <span className="text-sm text-gray-500">&copy; Portfolio</span>
          </div>
        </div>
      )}
    </header>
  );
}
import { useState } from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-sm">
      <div className="max-w-7x1 mx-auto px-48 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-sm tracking-wide">
          ELEVATE SPACE <span className="font-bold">SOLUTIONS</span>
        </h1>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-20 text-sm font-medium text-gray-800">
          <a href="#" className="hover:text-primary transition">Services</a>
          <a href="#" className="hover:text-primary transition">Work</a>
          <a href="#" className="hover:text-primary transition">About</a>
          <a href="#" className="hover:text-primary transition">Contact</a>
        </nav>

        {/* CTA */}
        <button className="bg-primary text-white px-6 py-2 rounded-lg shadow-[8px_8px_14px_rgba(0,0,0,0.35)] hover:translate-y-[2px] hover:shadow-[0_2px_0_rgba(0,0,0,0.35)] transition">
          Get a Quote
        </button>

      </div>
    </header>
  );
};

export default Navbar;
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-sm">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-5 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xs sm:text-sm tracking-wide whitespace-nowrap">
          ELEVATE SPACE <span className="font-bold">SOLUTIONS</span>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 lg:gap-20">
          <nav className="flex items-center gap-8 lg:gap-20 text-sm font-medium text-gray-800">
            <a href="#" className="hover:text-primary transition">Services</a>
            <a href="#" className="hover:text-primary transition">Work</a>
            <a href="#" className="hover:text-primary transition">About</a>
            <a href="#" className="hover:text-primary transition">Contact</a>
          </nav>

          <button className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:translate-y-[2px] hover:shadow-sm transition whitespace-nowrap">
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-6 py-6">
          <nav className="flex flex-col gap-5 text-base font-medium text-gray-800">
            <a href="#" className="hover:text-primary transition">Services</a>
            <a href="#" className="hover:text-primary transition">Work</a>
            <a href="#" className="hover:text-primary transition">About</a>
            <a href="#" className="hover:text-primary transition">Contact</a>
          </nav>

          <button className="mt-6 w-full bg-primary text-white px-6 py-3 rounded-lg shadow-md">
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
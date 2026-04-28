import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-sm">
      <div className="max-w-8xl mx-auto px-6 lg:px-20 py-8 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-lg font-semibold tracking-wide">
          ELEVATE SPACE <span className="font-bold">SOLUTIONS</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-primary transition">Services</a>
          <a href="#" className="hover:text-primary transition">Work</a>
          <a href="#" className="hover:text-primary transition">About</a>
          <a href="#" className="hover:text-primary transition">Contact</a>

          <button className="bg-primary text-white px-5 py-2 rounded-md hover:opacity-90 transition">
            Get a Quote
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-6">
          <div className="flex flex-col gap-4 text-sm font-medium">
            <a href="#" className="hover:text-primary transition">Services</a>
            <a href="#" className="hover:text-primary transition">Work</a>
            <a href="#" className="hover:text-primary transition">About</a>
            <a href="#" className="hover:text-primary transition">Contact</a>

            <button className="bg-primary text-white px-5 py-2 rounded-md mt-2 hover:opacity-90 transition">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
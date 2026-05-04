import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ onQuoteClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Services", id: "services" },
    { label: "Work", id: "work" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = 80;

    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });

      setIsOpen(false);
      setActiveSection(id);
    }
  };

  const handleQuoteClick = () => {
    setIsOpen(false);

    if (onQuoteClick) {
      onQuoteClick();
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        "home",
        "about",
        "services",
        "work",
        "why-choose-us",
        "process",
        "testimonials",
        "contact",
      ];

      const scrollPosition = window.scrollY + 140;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-black/5 shadow-sm">
      <div className="w-full px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="text-xs sm:text-sm md:text-[15px] tracking-wide whitespace-nowrap text-left text-black hover:opacity-70 transition"
          aria-label="Go to homepage"
        >
          ELEVATE SPACE <span className="font-bold">SOLUTIONS</span>
        </button>

        {/* Desktop / Large Tablet Nav */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12 2xl:gap-16">
          <nav className="flex items-center gap-7 xl:gap-10 2xl:gap-14 text-sm font-medium text-gray-800">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={`transition ${
                  activeSection === link.id
                    ? "text-primary"
                    : "hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={handleQuoteClick}
            className="bg-primary text-white px-5 xl:px-6 py-2.5 rounded-lg shadow-md hover:translate-y-[2px] hover:shadow-sm transition whitespace-nowrap"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile / Tablet Portrait Toggle */}
        <button
          type="button"
          className="lg:hidden text-black relative z-50"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-black/30"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-[72px] md:top-[80px] left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 px-5 sm:px-6 md:px-10 py-6 md:py-8 shadow-lg"
          >
            <nav className="flex flex-col gap-5 md:gap-6 text-base md:text-lg font-medium text-gray-800">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left transition ${
                    activeSection === link.id
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <button
              type="button"
              onClick={handleQuoteClick}
              className="mt-7 w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:translate-y-[2px] hover:shadow-sm transition"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
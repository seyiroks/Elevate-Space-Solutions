const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 80;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative py-20 overflow-hidden text-black">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/footer-bg.jpg"
          alt="Footer Background"
          className="w-full h-full object-cover object-[70%_100%] md:object-[center_100%] scale-105 blur-[2px]"
        />
        <div className="absolute inset-0 bg-white/80 md:bg-white/75"></div>
      </div>

      {/* Content */}
      <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-16 md:mb-20 text-center md:text-left">
          
          {/* Brand */}
          <div className="space-y-6 md:space-y-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide hover:text-[#c6a85b] transition">
                ELEVATE SPACE <span className="font-bold">SOLUTIONS</span>
              </h3>
            </button>

            <p className="text-base md:text-lg">
              Cleaning | Repairs | Design
            </p>

            <div className="space-y-2 md:space-y-4 text-sm md:text-base">
              <p>Registered in England & Wales</p>
              <p>Company No: 1234567890</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:ml-auto">
            <h4 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
              Navigation
            </h4>

            <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-[#c6a85b] transition"
                >
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("work")}
                  className="hover:text-[#c6a85b] transition"
                >
                  Work
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-[#c6a85b] transition"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-[#c6a85b] transition"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-black/10 pt-6 text-center text-sm md:text-base">
          © {currentYear} Elevate Space Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
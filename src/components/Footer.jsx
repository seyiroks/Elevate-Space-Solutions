const footerLinks = [
  { label: "Services", id: "services" },
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Contact Us", id: "contact" },
];

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
    <footer className="relative py-16 sm:py-18 md:py-20 lg:py-24 overflow-hidden text-black">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <img
          src="/footer-bg.jpg"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover object-[70%_100%] md:object-[center_100%] scale-105 blur-[2px]"
        />
        <div className="absolute inset-0 bg-white/85 md:bg-white/80 lg:bg-white/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-md sm:max-w-xl md:max-w-3xl xl:max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-12 xl:gap-20 items-start mb-12 md:mb-16 xl:mb-20 text-center xl:text-left">
          {/* Brand */}
          <div className="space-y-5 md:space-y-6 xl:space-y-8">
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="text-center xl:text-left"
              aria-label="Back to homepage"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide leading-tight hover:text-[#c6a85b] transition">
                ELEVATE SPACE <span className="font-bold">SOLUTIONS</span>
              </h3>
            </button>

            <p className="text-base md:text-lg">
              Cleaning | Repairs | Design
            </p>

            <div className="space-y-2 md:space-y-3 text-sm md:text-base">
              <p>Registered in England & Wales</p>
              <p>Company No: 1234567890</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="xl:ml-auto">
            <h4 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
              Navigation
            </h4>

            <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-[#c6a85b] transition"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
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
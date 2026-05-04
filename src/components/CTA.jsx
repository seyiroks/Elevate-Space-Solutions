const CTA = ({ onQuoteClick }) => {
  const handleQuoteClick = () => {
    if (onQuoteClick) {
      onQuoteClick();
    }
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");

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
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0">
        <img
          src="/cta-bg.jpg"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover object-[70%_100%] md:object-[center_100%] scale-105 blur-[4px]"
        />
        <div className="absolute inset-0 bg-white/80 md:bg-white/70"></div>
      </div>

      {/* Content */}
      <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            READY TO TRANSFORM YOUR SPACE?
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl mb-10 md:mb-14 max-w-2xl mx-auto">
            Get a fast, reliable quote today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
            <button
              type="button"
              onClick={handleQuoteClick}
              className="w-[240px] sm:w-[300px] bg-[#c6a85b] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium shadow-md hover:translate-y-[2px] hover:shadow-sm transition"
              aria-label="Open quote request form"
            >
              Get a Free Quote
            </button>

            <button
              type="button"
              onClick={scrollToContact}
              className="w-[240px] sm:w-[300px] bg-white text-black border border-[#c6a85b] px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium shadow-md hover:bg-[#c6a85b] hover:text-white hover:translate-y-[2px] hover:shadow-sm transition"
              aria-label="Scroll to contact section"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
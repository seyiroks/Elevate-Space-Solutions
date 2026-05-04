const Hero = ({ onQuoteClick }) => {
  const textShadow = { textShadow: "0 6px 25px rgba(0,0,0,0.6)" };

  const scrollToWork = () => {
    const section = document.getElementById("work");

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

  const handleQuoteClick = () => {
    if (onQuoteClick) {
      onQuoteClick();
    }
  };

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex items-center pt-24 lg:pt-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[72%_center] sm:bg-[68%_center] md:bg-[62%_center] lg:bg-[center_65%]"
        style={{ backgroundImage: "url('/hero.webp')" }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 md:bg-black/38 lg:bg-black/25" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="w-full px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
          <div className="max-w-3xl lg:max-w-4xl mx-auto lg:mx-0 text-center lg:text-left text-white mt-4 sm:mt-8 md:mt-10 lg:mt-24">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-bold leading-[1.15] sm:leading-[1.12] lg:leading-[1.15] mb-5 md:mb-6"
              style={textShadow}
            >
              Transforming Spaces <br />
              Restoring Value <br />
              Elevating Living
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-200 mb-8 md:mb-10 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto lg:mx-0"
              style={textShadow}
            >
              Professional cleaning, interior repairs,{" "}
              <br className="hidden sm:block" />
              and design services delivered to a high standard.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
              <button
                type="button"
                onClick={handleQuoteClick}
                className="w-full max-w-[230px] bg-primary text-white px-8 py-3 rounded-lg shadow-md hover:translate-y-[2px] hover:shadow-sm transition"
                aria-label="Open quote request form"
              >
                Get a Free Quote
              </button>

              <button
                type="button"
                onClick={scrollToWork}
                className="w-full max-w-[230px] border border-white text-white px-8 py-3 rounded-lg shadow-md hover:bg-white hover:text-black hover:translate-y-[2px] hover:shadow-sm transition"
                aria-label="Scroll to transformation work section"
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
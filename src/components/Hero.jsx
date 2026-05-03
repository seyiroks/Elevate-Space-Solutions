const Hero = ({ onQuoteClick }) => {
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

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center pt-24 md:pt-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[80%_60%] md:bg-[center_65%]"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35 md:bg-black/20" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left text-white mt-8 md:mt-24">
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.18] md:leading-[1.2] mb-6"
              style={{ textShadow: "0 6px 25px rgba(0,0,0,0.6)" }}
            >
              Transforming Spaces <br />
              Restoring Value <br />
              Elevating Living
            </h1>

            <p
              className="text-base sm:text-lg md:text-2xl leading-relaxed text-gray-200 mb-10 max-w-lg md:max-w-xl lg:max-w-2xl mx-auto md:mx-0"
              style={{ textShadow: "0 6px 25px rgba(0,0,0,0.6)" }}
            >
              Professional cleaning, interior repairs,{" "}
              <br className="hidden sm:block" />
              and design services delivered to a high standard.
            </p>

            <div className="flex flex-col items-center md:items-start gap-4 sm:gap-6 md:gap-10">
              <button
                onClick={onQuoteClick}
                className="w-[220px] bg-primary text-white px-8 py-3 rounded-lg shadow-md hover:translate-y-[2px] hover:shadow-sm transition"
              >
                Get a Free Quote
              </button>

              <button
                onClick={scrollToWork}
                className="w-[220px] bg-primary text-white px-8 py-3 rounded-lg shadow-md hover:translate-y-[2px] hover:shadow-sm transition"
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
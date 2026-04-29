const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[center_65%]"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">

          <div className="max-w-4xl text-left text-white mt-24">

            {/* H1 */}
            <h1
              className="text-5xl md:text-7xl font-bold leading-[1.15] md:leading-[1.2] mb-6"
              style={{ textShadow: "0 6px 25px rgba(0,0,0,0.6)" }}
            >
              Transforming Spaces <br />
              Restoring Value <br />
              Elevating Living
            </h1>

            {/* Paragraph */}
            <p
              className="text-lg md:text-2xl leading-relaxed text-gray-200 mb-10 max-w-lg md:max-w-xl lg:max-w-2xl"
              style={{ textShadow: "0 6px 25px rgba(0,0,0,0.6)" }}
            >
              Professional cleaning, interior repairs, <br />
              and design services delivered to a high standard.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 md:gap-10 w-fit">

              <button className="w-[240px] bg-primary text-white px-8 py-3 rounded-lg shadow-md hover:translate-y-[2px] hover:shadow-sm transition">
                Get a Free Quote
              </button>

              <button className="w-[240px] bg-primary text-white px-8 py-3 rounded-lg shadow-md hover:translate-y-[2px] hover:shadow-sm transition">
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
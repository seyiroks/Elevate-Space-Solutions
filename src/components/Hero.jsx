const Hero = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden flex items-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      {/* Warm Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7x1 mx-auto px-48">

          <div className="max-w-2xl text-left text-white mt-20">

            <h1
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
            >
              Transforming Spaces <br />
              Restoring Value <br />
              Elevating Living
            </h1>

            <p className="text-lg text-gray-200 mb-8 max-w-lg">
              Professional cleaning, interior repairs, <br />
              and design services delivered to a high standard.
            </p>

            <div className="flex flex-col gap-4 w-fit">

              <button className="bg-primary text-white px-8 py-3 rounded-lg shadow-[8px_8px_14px_rgba(0,0,0,0.35)] hover:translate-y-[2px] hover:shadow-[0_2px_0_rgba(0,0,0,0.35)] transition">
                Get a Free Quote
              </button>

              <button className="bg-primary text-white px-8 py-3 rounded-lg shadow-[8px_8px_14px_rgba(0,0,0,0.35)] hover:translate-y-[2px] hover:shadow-[0_2px_0_rgba(0,0,0,0.35)] transition">
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
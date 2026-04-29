const CTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/cta-bg.jpg"
          alt="CTA Background"
          className="w-full h-full object-cover object-[center_100%] scale-105 blur-[4px]"
        />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* Content */}
      <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32 text-center">

        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            READY TO TRANSFORM YOUR SPACE?
          </h2>

          <p className="text-xl md:text-2xl mb-14">
            Get a fast, reliable quote today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8">
            <button className="w-[300px] bg-[#c6a85b] text-white px-10 py-4 rounded-lg text-lg font-medium shadow-md hover:translate-y-[2px] hover:shadow-sm transition">
              Get a Free Quote
            </button>

            <button className="w-[300px] bg-[#c6a85b] text-white px-10 py-4 rounded-lg text-lg font-medium shadow-md hover:translate-y-[2px] hover:shadow-sm transition">
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;
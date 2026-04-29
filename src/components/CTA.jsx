const CTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/cta-bg.jpg"
          alt="CTA Background"
          className="w-full h-full object-cover object-[center_100%] scale-80 blur-[4px]"
        />

        {/* White Overlay */}
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          READY TO TRANSFORM YOUR SPACE?
        </h2>

        <p className="text-2xl md:text-3xl mb-14">
          Get a fast, reliable quote today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <button className="w-[320px] bg-[#c6a85b] text-white px-10 py-4 rounded-lg text-lg font-medium shadow-[8px_8px_14px_rgba(0,0,0,0.35)] hover:translate-y-[2px] hover:shadow-[0_3px_0_rgba(0,0,0,0.45)] transition">
            Get a Free Quote
          </button>

          <button className="w-[320px] bg-[#c6a85b] text-white px-10 py-4 rounded-lg text-lg font-medium shadow-[8px_8px_14px_rgba(0,0,0,0.35)] hover:translate-y-[2px] hover:shadow-[0_3px_0_rgba(0,0,0,0.45)] transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
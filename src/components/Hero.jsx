const Hero = () => {
  return (
    <section className="relative w-screen h-screen flex items-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content Container */}
      <div className="relative z-10 w-full">
        <div className="max-w-8xl mx-auto px-6 lg:px-20">
          
          <div className="max-w-2xl text-left text-white">
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Transforming Spaces Restoring Value Elevating Living
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Professional cleaning, interior repairs,<br /> and design services delivered to a high standard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:opacity-90 transition">
                Get a Free Quote
              </button>

              <button className="border border-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-black transition">
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
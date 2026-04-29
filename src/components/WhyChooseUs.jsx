const WhyChooseUs = () => {
  return (
    <section className="relative py-20 text-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/why-choose-us.jpg"
          alt="Why Choose Us"
          className="w-full h-full object-cover object-[center_68%] scale-105 blur-[4px]"
        />
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      {/* Content */}
      <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-20">
          <span className="w-10 h-[4px] bg-[#c6a85b]"></span>
          <h2 className="text-4xl font-bold uppercase tracking-wide text-center">
            Why Choose Us
          </h2>
        </div>

        {/* Checklist Grid */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 max-w-4xl mx-auto items-start">
          {/* Left Column */}
          <div className="space-y-10 md:space-y-12">
            <div className="flex items-center gap-4">
              <span className="text-[#c6a85b] text-3xl">✓</span>
              <p className="text-2xl font-medium">Reliable & On Time</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[#c6a85b] text-3xl">✓</span>
              <p className="text-2xl font-medium">All-in-One Service</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10 md:space-y-12 md:justify-self-end">
            <div className="flex items-center gap-4">
              <span className="text-[#c6a85b] text-3xl">✓</span>
              <p className="text-2xl font-medium">Attention to Detail</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[#c6a85b] text-3xl">✓</span>
              <p className="text-2xl font-medium">Fast Turnaround</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
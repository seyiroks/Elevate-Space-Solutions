const Services = () => {
  return (
    <section className="bg-[#efefef] py-20">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center items-center gap-3">
            <span className="w-10 h-[4px] bg-[#c6a85b]"></span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
              Our Services
            </h2>
          </div>
        </div>

        {/* Cards Wrapper */}
        <div className="max-w-5xl lg:max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {/* Card 1 */}
            <div className="bg-white shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col">
              <img
                src="/cleaning.jpg"
                alt="Cleaning"
                className="w-full h-48 md:h-52 object-cover"
              />

              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  Cleaning
                </h3>

                <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed flex-grow">
                  Spotless results, delivered with precision and care every time.
                </p>

                <a href="#" className="text-[#c6a85b] font-medium text-sm">
                  Learn more →
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col">
              <img
                src="/repairs.jpg"
                alt="Interior Repairs"
                className="w-full h-48 md:h-52 object-cover"
              />

              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  Interior Repairs
                </h3>

                <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed flex-grow">
                  Fixing the details that matter, restoring your space with
                  precision.
                </p>

                <a href="#" className="text-[#c6a85b] font-medium text-sm">
                  Learn more →
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col">
              <img
                src="/design.jpg"
                alt="Interior Design & Decoration"
                className="w-full h-48 md:h-52 object-cover"
              />

              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  Interior Design & Decoration
                </h3>

                <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed flex-grow">
                  Thoughtfully designed spaces that blend style, comfort, and
                  function.
                </p>

                <a href="#" className="text-[#c6a85b] font-medium text-sm">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
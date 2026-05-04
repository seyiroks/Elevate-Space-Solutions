const services = [
  {
    title: "Cleaning",
    image: "/cleaning.webp",
    alt: "Professional cleaning service",
    description:
      "Spotless results, delivered with precision and care every time.",
    features: [
      "End of Tenancy Cleaning",
      "Deep Cleaning",
      "Airbnb & Short-Let Turnovers",
      "Office & Residential Cleaning",
    ],
  },
  {
    title: "Interior Repairs",
    image: "/repairs.webp",
    alt: "Interior repair service",
    description:
      "Fixing the details that matter, restoring your space with precision.",
    features: [
      "Wall Touch-Ups",
      "Minor Repairs & Maintenance",
      "Property Refresh Services",
    ],
  },
  {
    title: "Interior Design & Decoration",
    image: "/design.webp",
    alt: "Interior design and decoration service",
    description:
      "Thoughtfully designed spaces that blend style, comfort, and function.",
    features: [
      "Interior Styling",
      "Space Optimisation",
      "Finishing & Modern Touches",
    ],
  },
];

const Services = ({ onQuoteClick }) => {
  const handleQuoteClick = (serviceTitle) => {
    if (onQuoteClick) {
      onQuoteClick(serviceTitle);
    }
  };

  return (
    <section
      id="services"
      className="bg-[#efefef] py-16 sm:py-18 md:py-20 lg:py-24"
    >
      <div className="w-full px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <div className="flex justify-center items-center gap-3">
            <span
              aria-hidden="true"
              className="w-8 sm:w-10 h-[4px] bg-[#c6a85b]"
            ></span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide">
              Our Services
            </h2>
          </div>

          <p className="mt-4 text-gray-600 max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Premium property care services designed to clean, repair, and
            transform your space.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-md sm:max-w-xl md:max-w-2xl xl:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-12">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 h-full flex flex-col overflow-hidden"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="w-full h-52 sm:h-56 md:h-60 xl:h-52 2xl:h-56 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 md:p-7 xl:p-7 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-5 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mb-7 space-y-2.5 text-sm sm:text-[15px] text-gray-700">
                    {service.features.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="text-[#c6a85b] mt-[1px] font-bold"
                        >
                          ✓
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    type="button"
                    onClick={() => handleQuoteClick(service.title)}
                    className="mt-auto text-left text-[#c6a85b] font-semibold text-sm sm:text-base hover:translate-x-1 transition"
                    aria-label={`Get a quote for ${service.title}`}
                  >
                    Get Quote →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
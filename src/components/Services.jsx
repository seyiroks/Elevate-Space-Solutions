const services = [
  {
    title: "Cleaning",
    image: "/cleaning.jpg",
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
    image: "/repairs.jpg",
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
    image: "/design.jpg",
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
    <section id="services" className="bg-[#efefef] py-20">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center items-center gap-3">
            <span
              aria-hidden="true"
              className="w-10 h-[4px] bg-[#c6a85b]"
            ></span>

            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
              Our Services
            </h2>
          </div>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Premium property care services designed to clean, repair, and
            transform your space.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-5xl lg:max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
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
                    className="w-full h-48 md:h-52 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mb-6 space-y-2 text-sm text-gray-700">
                    {service.features.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="text-[#c6a85b] mt-[2px]"
                        >
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    type="button"
                    onClick={() => handleQuoteClick(service.title)}
                    className="mt-auto text-left text-[#c6a85b] font-semibold text-sm hover:translate-x-1 transition"
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
import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "Reliable & On Time",
    description:
      "We respect your schedule and deliver services when promised.",
  },
  {
    title: "All-in-One Service",
    description:
      "Cleaning, repairs, and styling handled in one smooth process.",
  },
  {
    title: "Attention to Detail",
    description:
      "Every finish, corner, and detail is handled with professional care.",
  },
  {
    title: "Fast Turnaround",
    description:
      "Efficient service designed to refresh your property without delay.",
  },
];

const WhyChooseUs = ({ onQuoteClick }) => {
  const handleQuoteClick = () => {
    if (onQuoteClick) {
      onQuoteClick();
    }
  };

  return (
    <section
      id="why-choose-us"
      className="relative py-20 text-black overflow-hidden"
    >
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0">
        <img
          src="/why-choose-us.jpg"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover object-[center_90%] scale-105 blur-[4px]"
        />
        <div className="absolute inset-0 bg-white/85 md:bg-white/80"></div>
      </div>

      {/* Content */}
      <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Heading */}
        <div className="mb-14 md:mb-20 text-center">
          <div className="flex justify-center items-center gap-3">
            <span
              aria-hidden="true"
              className="w-10 h-[4px] bg-[#c6a85b]"
            ></span>

            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
              Why Choose Us
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center"
            >
              <div
                aria-hidden="true"
                className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#c6a85b]/15 flex items-center justify-center"
              >
                <CheckCircle size={28} className="text-[#c6a85b]" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {reason.title}
              </h3>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            type="button"
            onClick={handleQuoteClick}
            className="bg-[#c6a85b] text-white px-8 py-3 rounded-lg shadow-md hover:translate-y-[2px] hover:shadow-sm transition"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
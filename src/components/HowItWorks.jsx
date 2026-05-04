const steps = [
  {
    label: "STEP 1",
    title: "Request a Quote",
    description:
      "Tell us what your space needs, and we’ll provide a clear, tailored quote for the work required.",
  },
  {
    label: "STEP 2",
    title: "We Assess & Confirm",
    description:
      "We review the details, confirm the scope, and plan the best approach for a smooth, efficient service.",
  },
  {
    label: "STEP 3",
    title: "We Complete the Job",
    description:
      "Our team carries out the work with care, attention to detail, and a high-standard finish.",
  },
];

const HowItWorks = ({ onQuoteClick }) => {
  const handleQuoteClick = () => {
    if (onQuoteClick) {
      onQuoteClick();
    }
  };

  return (
    <section
      id="process"
      className="bg-[#efefef] py-16 sm:py-18 md:py-20 lg:py-24"
    >
      <div className="w-full px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        {/* Heading */}
        <div className="mb-10 md:mb-14 xl:mb-20 text-center">
          <div className="flex justify-center items-center gap-3">
            <span
              aria-hidden="true"
              className="w-8 sm:w-10 h-[4px] bg-[#c6a85b]"
            ></span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide">
              How It Works
            </h2>
          </div>
        </div>

        {/* Steps */}
        <div className="max-w-md sm:max-w-xl md:max-w-2xl xl:max-w-6xl mx-auto">
          <div className="relative grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-14">
            {/* Connector line */}
            <div
              aria-hidden="true"
              className="hidden xl:block absolute top-10 left-[16%] right-[16%] h-[3px] bg-[#c6a85b]/30"
            ></div>

            {steps.map((step) => (
              <div
                key={step.label}
                className="relative bg-white p-6 sm:p-7 md:p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center"
              >
                <div className="mb-6">
                  <span className="inline-block bg-[#c6a85b] text-white text-sm md:text-base font-semibold px-6 py-2 rounded-full tracking-wide shadow">
                    {step.label}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-4 leading-snug">
                  {step.title}
                </h3>

                <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-12 xl:mt-14">
          <button
            type="button"
            onClick={handleQuoteClick}
            className="bg-[#c6a85b] text-white px-8 py-3 rounded-lg shadow-md hover:translate-y-[2px] hover:shadow-sm transition"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
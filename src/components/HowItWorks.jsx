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
    <section id="process" className="bg-[#efefef] py-20">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Heading */}
        <div className="mb-14 md:mb-20 text-center">
          <div className="flex justify-center items-center gap-3">
            <span
              aria-hidden="true"
              className="w-10 h-[4px] bg-[#c6a85b]"
            ></span>

            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
              How It Works
            </h2>
          </div>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="relative grid md:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
            {/* Connector line */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-10 left-[16%] right-[16%] h-[3px] bg-[#c6a85b]/30"
            ></div>

            {steps.map((step) => (
              <div
                key={step.label}
                className="relative bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center"
              >
                <div className="mb-6">
                  <span className="inline-block bg-[#c6a85b] text-white text-sm md:text-base font-semibold px-6 py-2 rounded-full tracking-wide shadow">
                    {step.label}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
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
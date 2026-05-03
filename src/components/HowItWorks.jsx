const HowItWorks = () => {
  return (
    <section className="bg-[#efefef] py-20">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">

        {/* Heading (Consistent Style) */}
        <div className="mb-14 md:mb-24">
          <div className="flex items-start justify-center gap-3">
            <span className="w-10 h-[4px] bg-[#c6a85b] mt-3 shrink-0"></span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide leading-tight text-center">
              How It Works
            </h2>
          </div>
        </div>

        {/* Steps Wrapper */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16 lg:gap-20 text-center md:text-left">

            {/* STEP 1 */}
            <div className="bg-white md:bg-transparent p-6 md:p-0 rounded-xl md:rounded-none shadow-sm md:shadow-none">
              <span className="inline-block bg-[#c6a85b] text-white text-xs md:text-sm font-semibold px-5 py-2 rounded-full mb-6">
                STEP 1
              </span>

              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Request a Quote
              </h3>

              <p className="text-gray-700 leading-relaxed max-w-sm mx-auto md:mx-0">
                Tell us what your space needs, and we’ll provide a clear,
                tailored quote for the work required.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="bg-white md:bg-transparent p-6 md:p-0 rounded-xl md:rounded-none shadow-sm md:shadow-none">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#c6a85b] flex items-center justify-center text-[#c6a85b] text-base md:text-lg font-bold">
                  »
                </div>
                <span className="text-xs md:text-sm font-semibold tracking-wide">
                  STEP 2
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                We Assess & Confirm
              </h3>

              <p className="text-gray-700 leading-relaxed max-w-sm mx-auto md:mx-0">
                We review the details, confirm the scope, and plan the best
                approach for a smooth, efficient service.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="bg-white md:bg-transparent p-6 md:p-0 rounded-xl md:rounded-none shadow-sm md:shadow-none">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#c6a85b] flex items-center justify-center text-[#c6a85b] text-base md:text-lg font-bold">
                  »
                </div>
                <span className="text-xs md:text-sm font-semibold tracking-wide">
                  STEP 3
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                We Complete the Job
              </h3>

              <p className="text-gray-700 leading-relaxed max-w-sm mx-auto md:mx-0">
                Our team carries out the work with care, attention to detail,
                and a high-standard finish.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
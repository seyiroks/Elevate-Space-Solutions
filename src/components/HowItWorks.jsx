const HowItWorks = () => {
  return (
    <section className="bg-[#efefef] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-24">
          <span className="w-10 h-[4px] bg-[#c6a85b]"></span>
          <h2 className="text-4xl font-bold uppercase tracking-wide">
            How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-20">

          {/* STEP 1 */}
          <div>
            <span className="inline-block bg-[#c6a85b] text-white text-sm font-semibold px-5 py-2 rounded-full mb-6">
              STEP 1
            </span>

            <h3 className="text-2xl font-semibold mb-4">
              Request a Quote
            </h3>

            <p className="text-gray-700 leading-relaxed max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent at massa a erat aliquet gravida.
            </p>
          </div>

          {/* STEP 2 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full border-2 border-[#c6a85b] flex items-center justify-center text-[#c6a85b] text-lg font-bold">
                »
              </div>
              <span className="text-sm font-semibold tracking-wide">
                STEP 2
              </span>
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              We Assess & Confirm
            </h3>

            <p className="text-gray-700 leading-relaxed max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent at massa a erat aliquet gravida.
            </p>
          </div>

          {/* STEP 3 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full border-2 border-[#c6a85b] flex items-center justify-center text-[#c6a85b] text-lg font-bold">
                »
              </div>
              <span className="text-sm font-semibold tracking-wide">
                STEP 3
              </span>
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              We Complete the Job
            </h3>

            <p className="text-gray-700 leading-relaxed max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent at massa a erat aliquet gravida.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
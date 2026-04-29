const Services = () => {
  return (
    <section className="bg-[#efefef] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="w-10 h-[4px] bg-primary"></span>
            <h2 className="text-4xl font-bold uppercase tracking-wide">
              Our Services
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-white shadow-md hover:shadow-lg transition duration-300">
            <img
              src="/cleaning.jpg"
              alt="Cleaning"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Cleaning
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent at massa at orci aliquet gravida.
              </p>
              <a href="#" className="text-primary font-medium text-sm">
                Learn more →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md hover:shadow-lg transition duration-300">
            <img
              src="/repairs.jpg"
              alt="Interior Repairs"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Interior Repairs
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent at massa at orci aliquet gravida.
              </p>
              <a href="#" className="text-primary font-medium text-sm">
                Learn more →
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md hover:shadow-lg transition duration-300">
            <img
              src="/design.jpg"
              alt="Interior Design & Decoration"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Interior Design & Decoration
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent at massa at orci aliquet gravida.
              </p>
              <a href="#" className="text-primary font-medium text-sm">
                Learn more →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
const Testimonials = () => {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at massa a erat aliquet gravida.",
      name: "MJ Watson",
      stars: "★★★★★",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at massa a erat aliquet gravida.",
      name: "Peter Parker",
      stars: "★★★★★",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at massa a erat aliquet gravida.",
      name: "Miles Morales",
      stars: "★★★★★",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="flex items-center justify-center gap-4 mb-20">
          <span className="w-10 h-[4px] bg-[#c6a85b]"></span>
          <h2 className="text-4xl font-bold uppercase tracking-wide text-center">
            Testimonials
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#c6a85b] rounded-2xl px-8 py-9 shadow-[8px_8px_14px_rgba(0,0,0,0.35)]"
            >
              <div className="text-white text-6xl leading-none font-serif mb-6">
                “
              </div>

              <p className="text-black text-xl leading-snug mb-10 max-w-sm">
                {item.text}
              </p>

              <div className="h-[3px] bg-white mb-4"></div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white"></div>
                  <p className="text-black text-xl font-medium whitespace-nowrap">
                    {item.name}
                  </p>
                </div>

                <p className="text-yellow-300 text-xl tracking-wider whitespace-nowrap">
                  {item.stars}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
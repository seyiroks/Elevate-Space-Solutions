const Testimonials = () => {
  const testimonials = [
    {
      text: "The transformation was seamless and exceeded expectations. Everything was handled professionally from start to finish.",
      name: "MJ Watson",
      stars: "★★★★★",
    },
    {
      text: "Reliable, efficient, and detail-oriented. I’ll definitely be using their services again for future projects.",
      name: "Peter Parker",
      stars: "★★★★★",
    },
    {
      text: "They completely elevated the space. The quality of work and attention to detail really stood out.",
      name: "Miles Morales",
      stars: "★★★★★",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">

        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-20">
          <span className="w-10 h-[4px] bg-[#c6a85b]"></span>
          <h2 className="text-4xl font-bold uppercase tracking-wide text-center">
            Testimonials
          </h2>
        </div>

        {/* Cards Wrapper */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-14 lg:gap-16">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-[#c6a85b] rounded-2xl px-8 py-9 shadow-md h-full flex flex-col"
              >
                {/* Quote */}
                <div className="text-white text-6xl leading-none font-serif mb-6">
                  “
                </div>

                {/* Text */}
                <p className="text-black text-lg leading-relaxed mb-10 flex-grow">
                  {item.text}
                </p>

                {/* Divider */}
                <div className="h-[2px] bg-white mb-4"></div>

                {/* Footer */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white"></div>
                    <p className="text-black text-lg font-medium whitespace-nowrap">
                      {item.name}
                    </p>
                  </div>

                  <p className="text-yellow-300 text-lg tracking-wider whitespace-nowrap">
                    {item.stars}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
const Testimonials = () => {
  const testimonials = [
    {
      text: "The transformation was seamless and exceeded expectations. Everything was handled professionally from start to finish.",
      name: "MJ Watson",
      stars: "★★★★★",
      avatar: "/avatar.png",
    },
    {
      text: "Reliable, efficient, and detail-oriented. I’ll definitely be using their services again for future projects.",
      name: "Peter Parker",
      stars: "★★★★★",
      avatar: "/avatar.png",
    },
    {
      text: "They completely elevated the space. The quality of work and attention to detail really stood out.",
      name: "Miles Morales",
      stars: "★★★★★",
      avatar: "/avatar.png",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">

        {/* Heading */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-start justify-center gap-3">
            <span className="w-10 h-[4px] bg-[#c6a85b] mt-3 shrink-0"></span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide leading-tight text-center">
              Testimonials
            </h2>
          </div>
        </div>

        {/* Cards Wrapper */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-[#c6a85b] rounded-2xl px-6 md:px-8 py-8 md:py-9 shadow-md h-full flex flex-col"
              >
                {/* Quote */}
                <div className="text-white text-5xl md:text-6xl leading-none font-serif mb-5 md:mb-6">
                  “
                </div>

                {/* Text */}
                <p className="text-black text-base md:text-lg leading-relaxed mb-8 md:mb-10 flex-grow">
                  {item.text}
                </p>

                {/* Divider */}
                <div className="h-[2px] bg-white mb-4"></div>

                {/* Footer (FIXED) */}
                <div className="flex items-center justify-between gap-4">
                  
                  {/* Left Side */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-14 h-14 rounded-full bg-white object-cover border-2 border-white shrink-0"
                    />

                    <p className="text-black text-base md:text-lg font-medium whitespace-nowrap">
                      {item.name}
                    </p>
                  </div>

                  {/* Stars */}
                  <p className="text-yellow-300 text-base md:text-lg tracking-wider whitespace-nowrap">
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
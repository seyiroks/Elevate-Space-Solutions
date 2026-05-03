import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    text: "The transformation was seamless and exceeded expectations. Everything was handled professionally from start to finish.",
    name: "MJ Watson",
    service: "Interior Design Client",
    avatar: "/avatar.png",
  },
  {
    text: "Reliable, efficient, and detail-oriented. I’ll definitely be using their services again for future projects.",
    name: "Peter Parker",
    service: "Cleaning Client",
    avatar: "/avatar.png",
  },
  {
    text: "They completely elevated the space. The quality of work and attention to detail really stood out.",
    name: "Miles Morales",
    service: "Property Refresh Client",
    avatar: "/avatar.png",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousTestimonial = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-white py-20">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Heading */}
        <div className="mb-14 md:mb-20 text-center">
          <div className="flex justify-center items-center gap-3">
            <span className="w-10 h-[4px] bg-[#c6a85b]"></span>

            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
              Testimonials
            </h2>
          </div>
        </div>

        {/* Mobile / Tablet Carousel */}
        <div className="lg:hidden max-w-xl mx-auto">
          <TestimonialCard item={testimonials[activeIndex]} />

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={previousTestimonial}
              className="w-10 h-10 rounded-full border border-[#c6a85b] text-[#c6a85b] flex items-center justify-center hover:bg-[#c6a85b] hover:text-white transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    activeIndex === index ? "bg-[#c6a85b] w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-[#c6a85b] text-[#c6a85b] flex items-center justify-center hover:bg-[#c6a85b] hover:text-white transition"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Desktop Cards */}
        <div className="hidden lg:block max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {testimonials.map((item, index) => (
              <TestimonialCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ item }) => {
  return (
    <div className="bg-[#c6a85b] rounded-2xl px-6 md:px-8 py-8 md:py-9 shadow-md hover:shadow-xl transition duration-300 h-full flex flex-col">
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

      {/* Footer */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-14 h-14 rounded-full bg-white object-cover border-2 border-white shrink-0"
          />

          <div className="min-w-0">
            <p className="text-black text-base md:text-lg font-semibold truncate">
              {item.name}
            </p>
            <p className="text-black/70 text-xs md:text-sm">
              {item.service}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              fill="currentColor"
              className="text-yellow-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
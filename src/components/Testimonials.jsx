import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    text: "The transformation was seamless and exceeded expectations. Everything was handled professionally from start to finish.",
    name: "MJ Watson",
    service: "Interior Design Client",
    avatar: "/avatar.webp",
  },
  {
    text: "Reliable, efficient, and detail-oriented. I’ll definitely be using their services again for future projects.",
    name: "Peter Parker",
    service: "Cleaning Client",
    avatar: "/avatar.webp",
  },
  {
    text: "They completely elevated the space. The quality of work and attention to detail really stood out.",
    name: "Miles Morales",
    service: "Property Refresh Client",
    avatar: "/avatar.webp",
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
    <section
      id="testimonials"
      className="bg-white py-16 sm:py-18 md:py-20 lg:py-24"
    >
      <div className="w-full px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        {/* Heading */}
        <div className="mb-10 md:mb-14 2xl:mb-20 text-center">
          <div className="flex justify-center items-center gap-3">
            <span
              aria-hidden="true"
              className="w-8 sm:w-10 h-[4px] bg-[#c6a85b]"
            ></span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide">
              Testimonials
            </h2>
          </div>
        </div>

        {/* Mobile / Tablet / Small Desktop Carousel */}
        <div className="2xl:hidden max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
          <div aria-live="polite">
            <TestimonialCard item={testimonials[activeIndex]} />
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              type="button"
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
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition ${
                    activeIndex === index
                      ? "w-6 bg-[#c6a85b]"
                      : "w-2.5 bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-[#c6a85b] text-[#c6a85b] flex items-center justify-center hover:bg-[#c6a85b] hover:text-white transition"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Wide Desktop Cards */}
        <div className="hidden 2xl:block max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-16">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ item }) => {
  return (
    <div className="bg-[#c6a85b] rounded-2xl px-6 sm:px-7 md:px-8 py-8 md:py-9 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 h-full flex flex-col">
      {/* Quote */}
      <div
        aria-hidden="true"
        className="text-white text-4xl sm:text-5xl md:text-6xl leading-none font-serif mb-5 md:mb-6"
      >
        “
      </div>

      {/* Text */}
      <p className="text-black text-base sm:text-lg leading-relaxed mb-8 md:mb-10 flex-grow">
        {item.text}
      </p>

      {/* Divider */}
      <div aria-hidden="true" className="h-[2px] bg-white mb-4"></div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <img
            src={item.avatar}
            alt={item.name}
            loading="lazy"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white object-cover border-2 border-white shrink-0"
          />

          <div className="min-w-0">
            <p className="text-black text-base md:text-lg font-semibold leading-snug">
              {item.name}
            </p>
            <p className="text-black/70 text-xs md:text-sm leading-snug">
              {item.service}
            </p>
          </div>
        </div>

        <div aria-hidden="true" className="flex items-center gap-1 shrink-0">
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
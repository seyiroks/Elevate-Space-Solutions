import { Clock, Award, ShieldCheck, Handshake } from "lucide-react";

const trustItems = [
  {
    icon: Clock,
    title: "Same-Day Availability",
    description: "Quick response for urgent cleaning and property refresh needs.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description:
      "Professional service delivered with protection and peace of mind.",
  },
  {
    icon: Award,
    title: "High-Standard Finish",
    description: "Careful attention to detail for a polished, premium result.",
  },
  {
    icon: Handshake,
    title: "Trusted by Landlords & Hosts",
    description: "Reliable support for rental, Airbnb, and short-let properties.",
  },
];

const TrustBar = () => {
  return (
    <section id="about" className="bg-white py-20 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Heading */}
        <div className="mb-14 md:mb-20 text-center">
          <div className="flex justify-center items-center gap-3">
            <span
              aria-hidden="true"
              className="w-10 h-[4px] bg-[#c6a85b]"
            ></span>

            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide leading-tight">
              How We Make <br className="sm:hidden" />
              Your Choice Easy
            </h2>
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-[#f7f7f7] rounded-2xl px-6 py-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 text-center"
              >
                <div
                  aria-hidden="true"
                  className="w-14 h-14 mx-auto rounded-full bg-[#c6a85b] flex items-center justify-center mb-5"
                >
                  <Icon className="text-white" size={28} strokeWidth={1.8} />
                </div>

                <h3 className="font-bold text-lg md:text-xl mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Desktop Timeline */}
        <div className="relative hidden lg:block max-w-7xl mx-auto h-[380px]">
          {/* Line */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-0 w-full h-[5px] bg-black/80 -translate-y-1/2"
          ></div>

          <div className="grid grid-cols-4 h-full relative">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              const isTop = index === 0 || index === 2;

              return (
                <div key={item.title} className="relative">
                  {/* Content */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-[260px] text-center ${
                      isTop ? "bottom-[240px]" : "top-[240px]"
                    }`}
                  >
                    <div className="flex justify-center mb-4">
                      <Icon
                        aria-hidden="true"
                        className="text-[#c6a85b]"
                        size={42}
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className="font-bold text-lg mb-3">{item.title}</h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Circle */}
                  <div
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#c6a85b] rounded-full z-10 shadow-md"
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
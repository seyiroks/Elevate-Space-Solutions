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
    <section id="about" className="bg-white py-16 sm:py-18 md:py-20 lg:py-24 overflow-hidden">
      <div className="w-full px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        {/* Heading */}
        <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-20 text-center">
          <div className="flex justify-center items-center gap-3">
            <span
              aria-hidden="true"
              className="w-8 sm:w-10 h-[4px] bg-[#c6a85b]"
            ></span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide leading-tight">
              How We Make <br className="sm:hidden" />
              Your Choice Easy
            </h2>
          </div>
        </div>

        {/* Mobile / Tablet Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 lg:hidden max-w-4xl mx-auto">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-[#f7f7f7] rounded-2xl px-5 sm:px-6 md:px-7 py-7 md:py-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 text-center"
              >
                <div
                  aria-hidden="true"
                  className="w-13 h-13 sm:w-14 sm:h-14 mx-auto rounded-full bg-[#c6a85b] flex items-center justify-center mb-5"
                >
                  <Icon className="text-white" size={27} strokeWidth={1.8} />
                </div>

                <h3 className="font-bold text-lg md:text-xl mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm mx-auto">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Desktop Timeline */}
        <div className="relative hidden lg:block max-w-7xl mx-auto h-[390px]">
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
                    className={`absolute left-1/2 -translate-x-1/2 w-[220px] xl:w-[250px] 2xl:w-[270px] text-center ${
                      isTop ? "bottom-[245px]" : "top-[245px]"
                    }`}
                  >
                    <div className="flex justify-center mb-4">
                      <Icon
                        aria-hidden="true"
                        className="text-[#c6a85b]"
                        size={40}
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className="font-bold text-base xl:text-lg mb-3 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Circle */}
                  <div
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 xl:w-14 xl:h-14 bg-[#c6a85b] rounded-full z-10 shadow-md"
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
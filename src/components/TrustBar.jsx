import { Clock, Award, ShieldCheck, Handshake } from "lucide-react";

const TrustBar = () => {
  const trustItems = [
    {
      icon: Clock,
      text: "Same-Day Availability",
    },
    {
      icon: ShieldCheck,
      text: "Fully Insured",
    },
    {
      icon: Award,
      text: "High-Standard Finish",
    },
    {
      icon: Handshake,
      text: "Trusted by Landlords & Hosts",
    },
  ];

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Heading */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-start justify-center md:justify-start gap-3">
            <span className="w-10 h-[4px] bg-[#c6a85b] mt-3"></span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide leading-tight text-center md:text-left">
              How We Make <br /> Your Choice Easy
            </h2>
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-[#f7f7f7] rounded-2xl px-6 py-7 flex items-center gap-4 shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-[#c6a85b] flex items-center justify-center shrink-0">
                  <Icon className="text-white" size={28} strokeWidth={1.8} />
                </div>

                <p className="font-bold text-lg leading-snug">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Desktop Timeline */}
        <div className="relative h-[230px] hidden md:block">
          <div className="absolute top-1/2 left-0 w-full h-[3px] bg-black -translate-y-1/2"></div>

          <div className="grid grid-cols-4 h-full relative">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              const isTop = index === 0 || index === 2;

              return (
                <div key={index} className="relative">
                  <div
                    className={`absolute ${
                      isTop ? "top-0" : "bottom-0"
                    } left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 whitespace-nowrap`}
                  >
                    <Icon
                      className="text-[#c6a85b] shrink-0"
                      size={42}
                      strokeWidth={1.8}
                    />
                    <p className="font-bold text-xl">{item.text}</p>
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#c6a85b] rounded-full z-10"></div>
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
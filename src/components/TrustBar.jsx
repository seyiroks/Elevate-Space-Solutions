import { Clock, Award, ShieldCheck, Handshake } from "lucide-react";

const TrustBar = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-8xl mx-auto px-10 lg:px-20">
        {/* Heading */}
        <div className="mb-20">
          <div className="flex items-start gap-3">
            <span className="w-10 h-[4px] bg-[#c6a85b] mt-3"></span>
            <h2 className="text-4xl font-bold uppercase tracking-wide leading-tight">
              How We Make <br /> Your Choice Easy
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative h-[210px]">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[3px] bg-black -translate-y-1/2"></div>

          <div className="grid grid-cols-4 h-full relative">
            {/* ITEM 1 */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-4 whitespace-nowrap">
                <Clock className="text-[#c6a85b]" size={42} strokeWidth={1.8} />
                <p className="font-bold text-xl">Same-Day Availability</p>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#c6a85b] rounded-full z-10"></div>
            </div>

            {/* ITEM 2 */}
            <div className="relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4 whitespace-nowrap">
                <ShieldCheck className="text-[#c6a85b]" size={42} strokeWidth={1.8} />
                <p className="font-bold text-xl">Fully Insured</p>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#c6a85b] rounded-full z-10"></div>
            </div>

            {/* ITEM 3 */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-4 whitespace-nowrap">
                <Award className="text-[#c6a85b]" size={42} strokeWidth={1.8} />
                <p className="font-bold text-xl">High-Standard Finish</p>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#c6a85b] rounded-full z-10"></div>
            </div>

            {/* ITEM 4 */}
            <div className="relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4 whitespace-nowrap">
                <Handshake className="text-[#c6a85b]" size={42} strokeWidth={1.8} />
                <p className="font-bold text-xl">Trusted by Landlords & Hosts</p>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#c6a85b] rounded-full z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
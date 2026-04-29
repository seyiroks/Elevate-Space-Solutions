import { Clock, Award, ShieldCheck, Handshake } from "lucide-react";

const TrustBar = () => {
  return (
    <section className="bg-white py-20 relative">
      <div className="max-w-7x1 mx-auto px-48">

        {/* Heading */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[4px] bg-primary"></span>
            <h2 className="text-4xl font-bold uppercase tracking-wide">
              How We Make <br /> Your Choice Easy
            </h2>
          </div>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Horizontal Line (Perfect Center) */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black -translate-y-1/2"></div>

          {/* Grid */}
          <div className="grid grid-cols-4 relative">

            {/* ITEM 1 (TOP) */}
            <div className="relative flex flex-col items-start">
              <div className="mb-24 flex items-center gap-3">
                <Clock className="text-primary" size={40} />
                <p className="font-semibold text-lg">
                  Same-Day Availability
                </p>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-primary rounded-full z-10"></div>
            </div>

            {/* ITEM 2 (BOTTOM) */}
            <div className="relative flex flex-col items-start justify-end pt-24">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-primary rounded-full z-10"></div>

              <div className="mt-24 flex items-center gap-3">
                <ShieldCheck className="text-primary" size={40} />
                <p className="font-semibold text-lg">
                  Fully Insured
                </p>
              </div>
            </div>

            {/* ITEM 3 (TOP) */}
            <div className="relative flex flex-col items-start">
              <div className="mb-24 flex items-center gap-3">
                <Award className="text-primary" size={40} />
                <p className="font-semibold text-lg">
                  High-Standard Finish
                </p>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-primary rounded-full z-10"></div>
            </div>

            {/* ITEM 4 (BOTTOM) */}
            <div className="relative flex flex-col items-start justify-end pt-24">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-primary rounded-full z-10"></div>

              <div className="mt-24 flex items-center gap-3">
                <Handshake className="text-primary" size={40} />
                <p className="font-semibold text-lg">
                  Trusted by Landlords & Hosts
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustBar;
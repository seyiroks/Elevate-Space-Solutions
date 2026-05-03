import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Transformation = () => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = (clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    let newPos = ((clientX - rect.left) / rect.width) * 100;

    if (newPos < 0) newPos = 0;
    if (newPos > 100) newPos = 100;

    setPosition(newPos);
  };

  return (
    <section className="bg-white py-20">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">

        {/* Heading */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-start justify-center md:justify-start gap-3">
            <span className="w-10 h-[4px] bg-[#c6a85b] mt-3"></span>

            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide leading-tight text-center md:text-left">
              Real Results, <br />
              <span className="whitespace-nowrap">
                Real Transformation
              </span>
            </h2>
          </div>
        </div>

        {/* Slider */}
        <div className="flex justify-center">
          <div
            ref={containerRef}
            className="relative w-full max-w-6xl h-[320px] sm:h-[420px] md:h-auto md:aspect-[1199/807] bg-black shadow-lg select-none touch-none overflow-hidden"
            onMouseDown={() => setDragging(true)}
            onMouseUp={() => setDragging(false)}
            onMouseLeave={() => setDragging(false)}
            onMouseMove={(e) => dragging && updatePosition(e.clientX)}
            onTouchStart={() => setDragging(true)}
            onTouchEnd={() => setDragging(false)}
            onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
          >

            {/* AFTER */}
            <div className="absolute inset-0">
              <img
                src="/after.jpg"
                alt="After"
                className="w-full h-full object-cover md:object-contain"
                draggable={false}
              />

              <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/70 text-white text-[10px] md:text-xs px-3 md:px-4 py-1 tracking-widest">
                AFTER
              </div>
            </div>

            {/* BEFORE */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - position}% 0 0)`,
              }}
            >
              <img
                src="/before.jpg"
                alt="Before"
                className="w-full h-full object-cover md:object-contain"
                draggable={false}
              />

              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/70 text-white text-[10px] md:text-xs px-3 md:px-4 py-1 tracking-widest">
                BEFORE
              </div>
            </div>

            {/* Divider */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white"
              style={{
                left: `${position}%`,
                transform: "translateX(-50%)",
              }}
            />

            {/* Handle */}
            <div
              className="absolute flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white border-[3px] md:border-4 border-[#c6a85b] rounded-full shadow-md cursor-col-resize"
              style={{
                left: `${position}%`,
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <ChevronLeft size={16} />
              <ChevronRight size={16} />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Transformation;
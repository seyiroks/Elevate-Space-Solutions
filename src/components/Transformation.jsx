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
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className="w-10 h-[4px] bg-[#c6a85b]"></span>
          <h2 className="text-4xl font-bold uppercase tracking-wide text-center">
            Real Results, Real Transformation
          </h2>
        </div>

        {/* Slider */}
        <div className="flex justify-center">
          <div
            ref={containerRef}
            className="relative w-full max-w-6xl aspect-[1199/807] bg-black shadow-lg select-none touch-none"
            onMouseDown={() => setDragging(true)}
            onMouseUp={() => setDragging(false)}
            onMouseLeave={() => setDragging(false)}
            onMouseMove={(e) => dragging && updatePosition(e.clientX)}
            onTouchStart={() => setDragging(true)}
            onTouchEnd={() => setDragging(false)}
            onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
          >
            {/* AFTER Layer */}
            <div className="absolute inset-0">
              <img
                src="/after.jpg"
                alt="After"
                className="w-full h-full object-contain"
                draggable={false}
              />

              <div className="absolute top-6 right-6 bg-black/70 text-white text-xs px-4 py-1 tracking-widest">
                AFTER
              </div>
            </div>

            {/* BEFORE Layer */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - position}% 0 0)`,
              }}
            >
              <img
                src="/before.jpg"
                alt="Before"
                className="w-full h-full object-contain"
                draggable={false}
              />

              <div className="absolute top-6 left-6 bg-black/70 text-white text-xs px-4 py-1 tracking-widest">
                BEFORE
              </div>
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white"
              style={{
                left: `${position}%`,
                transform: "translateX(-50%)",
              }}
            />

            {/* Handle */}
            <div
              className="absolute flex items-center justify-center w-12 h-12 bg-white border-4 border-[#c6a85b] rounded-full shadow-md cursor-col-resize"
              style={{
                left: `${position}%`,
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <ChevronLeft size={18} />
              <ChevronRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
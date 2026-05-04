import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Transformation = () => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const updatePosition = (clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    let newPos = ((clientX - rect.left) / rect.width) * 100;

    newPos = Math.max(0, Math.min(100, newPos));
    setPosition(newPos);
  };

  const startDrag = () => {
    setDragging(true);
    setHasInteracted(true);
  };

  const stopDrag = () => {
    setDragging(false);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") {
        setPosition((prev) => Math.max(prev - 2, 0));
        setHasInteracted(true);
      }

      if (e.key === "ArrowRight") {
        setPosition((prev) => Math.min(prev + 2, 100));
        setHasInteracted(true);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (hasInteracted) return;

    let direction = 1;

    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= 65) direction = -1;
        if (prev <= 35) direction = 1;
        return prev + direction * 0.5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [hasInteracted]);

  return (
    <section
      id="work"
      className="bg-white py-16 sm:py-18 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="w-full px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        {/* Heading */}
        <div className="mb-10 md:mb-14 lg:mb-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide leading-tight">
            Real Results, <br />
            <span className="sm:whitespace-nowrap">
              Real Transformation
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Slide across the image to compare the space before and after our
            transformation work.
          </p>
        </div>

        {/* Slider */}
        <div className="flex justify-center">
          <div
            ref={containerRef}
            className={`relative w-full max-w-6xl h-[300px] sm:h-[400px] md:h-[520px] lg:h-auto lg:aspect-[1199/807] bg-black shadow-xl rounded-2xl overflow-hidden select-none touch-none ${
              dragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onMouseDown={startDrag}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onMouseMove={(e) => dragging && updatePosition(e.clientX)}
            onTouchStart={startDrag}
            onTouchEnd={stopDrag}
            onTouchCancel={stopDrag}
            onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
            role="slider"
            aria-label="Before and after image comparison slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            tabIndex={0}
          >
            {/* AFTER */}
            <div className="absolute inset-0">
              <img
                src="/after.jpg"
                alt="After transformation"
                className="w-full h-full object-cover lg:object-contain"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />

              <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/70 text-white text-[10px] md:text-xs px-3 md:px-4 py-1 tracking-widest">
                AFTER
              </div>
            </div>

            {/* BEFORE */}
            <div
              className={`absolute inset-0 overflow-hidden ${
                dragging ? "" : "transition-all duration-200"
              }`}
              style={{
                clipPath: `inset(0 ${100 - position}% 0 0)`,
              }}
            >
              <img
                src="/before.jpg"
                alt="Before transformation"
                className="w-full h-full object-cover lg:object-contain"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />

              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/70 text-white text-[10px] md:text-xs px-3 md:px-4 py-1 tracking-widest">
                BEFORE
              </div>
            </div>

            {/* Divider */}
            <div
              aria-hidden="true"
              className={`absolute top-0 bottom-0 w-[3px] bg-white/90 ${
                dragging ? "" : "transition-all duration-200"
              }`}
              style={{
                left: `${position}%`,
                transform: "translateX(-50%)",
              }}
            />

            {/* Handle */}
            <div
              aria-hidden="true"
              className={`absolute flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white border-[3px] md:border-4 border-[#c6a85b] rounded-full shadow-md hover:scale-105 hover:shadow-lg transition ${
                dragging ? "scale-105 shadow-lg" : ""
              }`}
              style={{
                left: `${position}%`,
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <ChevronLeft size={16} />
              <ChevronRight size={16} />
            </div>

            {/* Hint */}
            {!hasInteracted && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xs md:text-sm bg-black/60 px-4 py-1 rounded-full tracking-wide">
                Drag to compare
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

export default function Slide() {
  const wrapperRef = useRef(null);
  const animationRef = useRef(null);
  const cursorRef = useRef(null);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animationRef.current = gsap.to(".marquee", {
        xPercent: -50,
        repeat: -1,
        duration: 10,
        ease: "linear",
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    if (animationRef.current) animationRef.current.pause();
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    if (animationRef.current) animationRef.current.resume();
    setShowCursor(false);
  };

  const handleMouseMove = (e) => {
    if (cursorRef.current) {
      const { clientX, clientY } = e;
      cursorRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
    }
  };

  return (
    <Link to="/order">
      <div
        ref={wrapperRef}
        className="relative w-full overflow-hidden bg-[#FF5101] cursor-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className="flex whitespace-nowrap text-black text-5xl font-extrabold uppercase marquee bg-[#FF5101]">
          <span className="px-10 flex justify-center items-center">
          <span className="base">Order Now</span>  <MdArrowOutward className="text-6xl"/>  <span className="marathi mt-4">ऑर्डर करा</span> <MdArrowOutward className="text-6xl"/><span className="base">Order Now</span>  <MdArrowOutward className="text-6xl"/>  <span className="marathi mt-4">ऑर्डर करा</span> <MdArrowOutward className="text-6xl"/><span className="base">Order Now</span>  <MdArrowOutward className="text-6xl"/>  <span className="marathi mt-4">ऑर्डर करा</span> <MdArrowOutward className="text-6xl"/><span className="base">Order Now</span>  <MdArrowOutward className="text-6xl"/>  <span className="marathi mt-4">ऑर्डर करा</span> <MdArrowOutward className="text-6xl"/><span className="base">Order Now</span>  <MdArrowOutward className="text-6xl"/>  <span className="marathi mt-4">ऑर्डर करा</span> <MdArrowOutward className="text-6xl"/><span className="base">Order Now</span>  <MdArrowOutward className="text-6xl"/>  <span className="marathi mt-4">ऑर्डर करा</span> <MdArrowOutward className="text-6xl"/><span className="base">Order Now</span>  <MdArrowOutward className="text-6xl"/>  <span className="marathi mt-4">ऑर्डर करा</span> <MdArrowOutward className="text-6xl"/><span className="base">Order Now</span>  <MdArrowOutward className="text-6xl"/>  <span className="marathi mt-4">ऑर्डर करा</span> <MdArrowOutward className="text-6xl"/><span className="base">Order Now</span>  <MdArrowOutward className="text-6xl"/>  <span className="marathi mt-4">ऑर्डर करा</span> <MdArrowOutward className="text-6xl"/><span className="base">Order Now</span>  <MdArrowOutward className="text-6xl"/>  <span className="marathi mt-4">ऑर्डर करा</span> <MdArrowOutward className="text-6xl"/><span className="base">Order Now</span>  <MdArrowOutward className="text-6xl"/>  <span className="marathi mt-4">ऑर्डर करा</span> <MdArrowOutward className="text-6xl"/><span className="base">Order Now</span>  <MdArrowOutward className="text-6xl"/>  <span className="marathi mt-4">ऑर्डर करा</span> <MdArrowOutward className="text-6xl"/><span className="base">Order Now</span>  <MdArrowOutward className="text-6xl"/>  <span className="marathi mt-4">ऑर्डर करा</span> <MdArrowOutward className="text-6xl"/><span className="base">Order Now</span>  <MdArrowOutward className="text-6xl"/>  <span className="marathi mt-4">ऑर्डर करा</span> <MdArrowOutward className="text-6xl"/><span className="base">Order Now</span>  <MdArrowOutward className="text-6xl"/>  <span className="marathi mt-4">ऑर्डर करा</span> <MdArrowOutward className="text-6xl"/><span className="base">Order Now</span>  <MdArrowOutward className="text-6xl"/>  <span className="marathi mt-4">ऑर्डर करा</span> <MdArrowOutward className="text-6xl"/><span className="base">Order Now</span>  <MdArrowOutward className="text-6xl"/>  <span className="marathi mt-4">ऑर्डर करा</span> <MdArrowOutward className="text-6xl"/><span className="base">Order Now</span>  <MdArrowOutward className="text-6xl"/>  <span className="marathi mt-4">ऑर्डर करा</span> <MdArrowOutward className="text-6xl"/>
          </span>
        </div>

        {/* Custom Cursor */}
        {showCursor && (
          <div
            ref={cursorRef}
            className="fixed top-0 left-0 z-40 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="bg-transparent backdrop-blur-sm  text-white border border-[#ff5101] rounded-full w-24 h-24 flex text-center items-center justify-center text-sm font-bold">
              ORDER NOW
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

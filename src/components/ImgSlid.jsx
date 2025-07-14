import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImgSlid = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;

    // Enable horizontal scroll synced with vertical scroll using ScrollTrigger
    const tween = gsap.to(el, {
      scrollLeft: el.scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top center',
        end: () => `+=${el.scrollWidth}`,
        scrub: true,
        pin: false,
        anticipatePin: 1,
      },
    });

    // Custom wheel-to-horizontal scroll logic
    const handleWheel = (e) => {
      if (e.deltaY === 0) return; // Only vertical wheel to horizontal
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      el.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div
      className="overflow-x-auto whitespace-nowrap px-4 py-6 hide-scrollbar pointer-events-none"
      ref={scrollRef}
    >
      <div className="flex gap-4 w-max">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`flex-none w-32 md:w-80 md:h-[500px] h-48 rounded bg-[#f5ebdf] flex items-center justify-center ${
              index === 1 ? 'p-2 bg-[#ff4a00]' : ''
            }`}
          >
            <div className="w-full h-full rounded bg-black"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgSlid;

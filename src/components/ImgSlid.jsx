import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImgSlid = () => {

  const images = [
    { id: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vZzrJNYtFCB43NzF-tdxJ_YLtd6WwkSWug&s" },
    { id: 2, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vZzrJNYtFCB43NzF-tdxJ_YLtd6WwkSWug&s" },
    { id: 3, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vZzrJNYtFCB43NzF-tdxJ_YLtd6WwkSWug&s" },
    { id: 4, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vZzrJNYtFCB43NzF-tdxJ_YLtd6WwkSWug&s" },
    { id: 5, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vZzrJNYtFCB43NzF-tdxJ_YLtd6WwkSWug&s" },
    { id: 6, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vZzrJNYtFCB43NzF-tdxJ_YLtd6WwkSWug&s" },
  ];

  
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
      className="overflow-x-auto whitespace-nowrap px-4 py-6 hide-scrollbar pointer-events-none bg-[#FEF9F3]"
      ref={scrollRef}
    >
      <div className="flex gap-4 w-max overflow-x-auto">
  {images.map((image) => (
    <div
      key={image.id}
      className="flex-none w-32 md:w-80 md:h-[500px] h-48 rounded bg-[#f5ebdf] flex items-center justify-center overflow-hidden p-3 border-2 "
    >
      <img
        src={image.url}
        alt={`Image ${image.id}`}
        className="w-full h-full object-cover rounded"
      />
    </div>
  ))}
</div>

    </div>
  );
};

export default ImgSlid;

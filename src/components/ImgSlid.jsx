import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImgSlid = () => {
  const images = [
    { id: 1, url: "https://github.com/PANDURANGZURE/chapati-site/blob/main/src/assets/2.jpg?raw=true" },
    { id: 2, url: "https://github.com/PANDURANGZURE/chapati-site/blob/main/src/assets/4.jpg?raw=true" },
    { id: 3, url: "https://github.com/PANDURANGZURE/chapati-site/blob/main/src/assets/8.jpg?raw=true" },
    { id: 4, url: "https://github.com/PANDURANGZURE/chapati-site/blob/main/src/assets/7.jpg?raw=true" },
    { id: 5, url: "https://github.com/PANDURANGZURE/chapati-site/blob/main/src/assets/6.jpg?raw=true" },
    { id: 6, url: "https://github.com/PANDURANGZURE/chapati-site/blob/main/src/assets/5.jpg?raw=true" },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;

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

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
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
      className="overflow-x-auto whitespace-nowrap px-4 py-6 hide-scrollbar pointer-events-none bg-[#F4EADE]"
      ref={scrollRef}
    >
      <div className="flex gap-4 w-max overflow-x-auto">
        {images.map((image) => (
          <div
            key={image.id}
            className="chettinad-wavy mx-auto flex items-center justify-center border"
            style={{ width: 320, height: 450 }}
          >
            <img
              src={image.url}
              alt={`Image ${image.id}`}
              loading="lazy"
              className="w-full h-full object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgSlid;

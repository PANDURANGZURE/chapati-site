import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import One from '../assets/1.jpg';
import Two from '../assets/2.jpg';
import Three from '../assets/3.jpg';
import Four from '../assets/4.jpg';
import Five from '../assets/5.jpg';
import Six from '../assets/6.jpg';


gsap.registerPlugin(ScrollTrigger);

const ImgSlid = () => {

  const images = [
    { id: 1, url: One },
    { id: 2, url: Two },
    { id: 3, url: Three },
    { id: 4, url: Four  },
    { id: 5, url: Five },
    { id: 6, url: Six },
   
  
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
      className="overflow-x-auto whitespace-nowrap px-4 py-6 hide-scrollbar pointer-events-none bg-[#F4EADE]"
      ref={scrollRef}
    >
      <div className="flex gap-4 w-max overflow-x-auto">
  {images.map((image) => (
    <div
      key={image.id}
      className="chettinad-wavy mx-auto flex items-center justify-center border" style={{width: 320, height: 450}}
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

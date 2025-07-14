import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Header from './Header';

// Remove duplicate registration - it's already done in Item.jsx
// gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(textRef.current, { types: 'chars' });

    gsap.from(split.chars, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      split.revert(); // Cleanup on unmount
    };
  }, []);

  return (
    <>
    <Header/>
    <section className="h-screen flex items-center justify-center bg-[#FEF9F3] px-4">
        
      <h1
        ref={textRef}
        className="text-4xl md:text-6xl font-bold overflow-hidden text-center leading-tight"
      >
        GET READY TO BE <br />
        TRANSPORTED TO THE <br />
        STREETS OF DELHI
      </h1>
    </section>
    </>
  );
}

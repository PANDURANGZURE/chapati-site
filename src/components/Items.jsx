import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function AuthenticDelhi({
  image,
  altText,
  heading,
  heading2,
  hindiTagline,
  description,
  buttonText,
}) {
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const headingRef2 = useRef(null);
  const hindiRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    let split = null;
    let timeoutId = null;
    
    // Wait for next tick to ensure DOM is ready
    timeoutId = setTimeout(() => {
      try {
        // IMAGE: Slide in from right
        if (imageRef.current) {
          gsap.from(imageRef.current, {
            x: -100,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          });
        }

        // HEADING: Split letters and animate
        if (headingRef.current) {
          split = new SplitType(headingRef.current, { types: 'chars' });

          gsap.from(split.chars, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.04,
            duration: 0.6,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          });
        }

        if (headingRef2.current) {
          split = new SplitType(headingRef2.current, { types: 'chars' });

          gsap.from(split.chars, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.04,
            duration: 0.6,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: headingRef2.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          });
        }

        // HINDI TAGLINE: Fade in from below
        if (hindiRef.current) {
          gsap.from(hindiRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: hindiRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          });
        }

        // PARAGRAPH: Fade in from below
        if (descRef.current) {
          gsap.from(descRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: descRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          });
        }

        // BUTTON: Fade in from below
        if (buttonRef.current) {
          gsap.from(buttonRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: buttonRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      } catch (error) {
        console.error('GSAP animation error:', error);
      }
    }, 100);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (split) {
        split.revert();
      }
      // Kill all ScrollTriggers for this component
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger && (
          trigger.vars.trigger === imageRef.current ||
          trigger.vars.trigger === headingRef.current ||
          trigger.vars.trigger === hindiRef.current ||
          trigger.vars.trigger === descRef.current ||
          trigger.vars.trigger === buttonRef.current
        )) {
          trigger.kill();
        }
      });
    };
  }, [heading]); // Add heading as dependency since SplitType depends on it

  return (
    <div className=''>
        
        <section className="bg-[#f7ecdf] py-16 px-6 md:px-20 flex  flex-col md:flex-row-reverse items-center justify-center gap-12">
      {/* Image Section */}
      <div className="flex justify-center items-center md:min-h-screen">
  <div ref={imageRef} className="relative   max-w-md">
    {/* Shadow Layer */}
    <div className="absolute -top-4 -left-4 w-full h-full bg-black z-0 "></div>

    {/* Image */}
    <img
      src={image}
      alt={altText}
      className="relative z-10 w-full bg-[#F4E8DA]  md:h-[600px] h-auto border-2 border-black "
    />
  </div>
</div>


      {/* Text Section */}
      <div className="w-full md:w-1/2 max-w-xl">
        <h2
          ref={headingRef}
          className="text-5xl md:text-7xl font-extrabold logo leading-tight text-black whitespace-pre-line "
        >
          {heading}
        </h2>
        <h2
          ref={headingRef2}
          className="text-5xl md:text-7xl font-extrabold logo leading-tight text-black whitespace-pre-line md:mb-10"
        >
          {heading2}
        </h2>
        

        <p
          ref={hindiRef}
          className=" marathi text-xl mt-3 font-medium md:text-3xl text-black md:mb-7"
        >
          {hindiTagline}
        </p>

        <p
          ref={descRef}
          className="mt-4 text-base md:text-lg base text-black leading-relaxed md:mb-7"
        >
          {description}
        </p>

        <Link to='/order'>
        <button
          ref={buttonRef}
          className="mt-6 px-6 py-3 cursor-pointer bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition"
        >
          {buttonText}
        </button>
        </Link>
      </div>
    </section>
    
    </div>
  );
}

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Header from '../components/Header';
import Item from '../components/Item';
import Item2 from '../components/Items';
import Slide from '../components/Slide';
import ImgSlid from '../components/ImgSlid';
import About from '../components/About'

// Remove duplicate registration - it's already done in Item.jsx
// gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const textRef = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(textRef.current, { types: 'chars' });
  
    // Heading animation
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
  
    // Paragraph animation (⚠️ this must be outside return!)
    gsap.fromTo(pRef.current, {
      opacity: 0,
      y: 30,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: pRef.current,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
    });
  
    return () => {
      split.revert(); // Cleanup for heading
    };
  }, []);
  
  

  return (
    <>
    <div className='w-screen'>
    <Header/>
    <section className=" md:mt-20 mt-10 h-full flex flex-col w-screen items-center justify-center bg-white px-4">
        
      <h1
        ref={textRef}
        className="text-4xl md:text-8xl logo  overflow-hidden text-center leading-tight"
      >
        GET READY TO BE <br />
        TRANSPORTED TO THE <br />
        STREETS OF DELHI
      </h1>
      <p ref={pRef} className='mt-5 md:text-3xl marathi leading-relaxed'>मुस्कुराये आप मेरी दिल्ली में हैं</p>
    </section>

    <ImgSlid/>
    <About/>
    
    <Item
     image="https://cdn.prod.website-files.com/6549128db41d15ae06784cbc/6644ab9937bf50fdaa8c99fa_Butter%20Chicken-p-2000.webp" // or imported image
     altText="Butter Chicken"
     heading={`Authentically`}
     heading2={`Delhi`}
     hindiTagline="शुद्धता की गारंटी"
     description="Dive into the vibrant world of authentic Indian flavours, skillfully prepared by our Delhi-born chefs and served with a sprinkle of pride for your culinary delight!"
     buttonText="Buy Now"
    />

    <Slide/>

<Item2
     image="https://cdn.prod.website-files.com/6549128db41d15ae06784cbc/6644ab9937bf50fdaa8c99fa_Butter%20Chicken-p-2000.webp" // or imported image
     altText="Butter Chicken"
     heading={`Authentically\nDelhi`} // allows line breaks
     hindiTagline="शुद्धता की गारंटी"
     description="Dive into the vibrant world of authentic Indian flavours, skillfully prepared by our Delhi-born chefs and served with a sprinkle of pride for your culinary delight!"
     buttonText="Buy Now"
    />

<Slide/>

<Item
     image="https://cdn.prod.website-files.com/6549128db41d15ae06784cbc/6644ab9937bf50fdaa8c99fa_Butter%20Chicken-p-2000.webp" // or imported image
     altText="Butter Chicken"
     heading={`Authentically`}
     heading2={`Delhi`}
     hindiTagline="शुद्धता की गारंटी"
     description="Dive into the vibrant world of authentic Indian flavours, skillfully prepared by our Delhi-born chefs and served with a sprinkle of pride for your culinary delight!"
     buttonText="Buy Now"
    />

<Slide/>

<Item2
     image="https://cdn.prod.website-files.com/6549128db41d15ae06784cbc/6644ab9937bf50fdaa8c99fa_Butter%20Chicken-p-2000.webp" // or imported image
     altText="Butter Chicken"
     heading={`Authentically`}
     heading2={`Delhi`}
     hindiTagline="शुद्धता की गारंटी"
     description="Dive into the vibrant world of authentic Indian flavours, skillfully prepared by our Delhi-born chefs and served with a sprinkle of pride for your culinary delight!"
     buttonText="Buy Now"
    />

<Slide/>

<Item
     image="https://cdn.prod.website-files.com/6549128db41d15ae06784cbc/6644ab9937bf50fdaa8c99fa_Butter%20Chicken-p-2000.webp" // or imported image
     altText="Butter Chicken"
     heading={`Authentically`}
     heading2={`Delhi`}
     hindiTagline="शुद्धता की गारंटी"
     description="Dive into the vibrant world of authentic Indian flavours, skillfully prepared by our Delhi-born chefs and served with a sprinkle of pride for your culinary delight!"
     buttonText="Buy Now"
    />

<Slide/>

<Item2
     image="https://cdn.prod.website-files.com/6549128db41d15ae06784cbc/6644ab9937bf50fdaa8c99fa_Butter%20Chicken-p-2000.webp" // or imported image
     altText="Butter Chicken"
     heading={`Authentically`}
     heading2={`Delhi`}
     hindiTagline="शुद्धता की गारंटी"
     description="Dive into the vibrant world of authentic Indian flavours, skillfully prepared by our Delhi-born chefs and served with a sprinkle of pride for your culinary delight!"
     buttonText="Buy Now"
    />

<Slide/>








    

    </div>
    </>
  );
}

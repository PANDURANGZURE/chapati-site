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
import Footer from '../components/Footer'
import { Helmet } from "react-helmet-async";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const textRef = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;
    const split = new SplitType(textRef.current, { types: 'chars' });
    let headingAnim, paraAnim;
    if (split.chars && split.chars.length) {
      headingAnim = gsap.from(split.chars, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top bottom',
          toggleActions: 'play none none reverse',
        },
      });
    }
    if (pRef.current) {
      paraAnim = gsap.fromTo(
        pRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: pRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
    return () => {
      split.revert();
      if (headingAnim && headingAnim.scrollTrigger) headingAnim.scrollTrigger.kill();
      if (paraAnim && paraAnim.scrollTrigger) paraAnim.scrollTrigger.kill();
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(t => t.kill());
      }
    };
  }, []);

  return (
    <>
    <Helmet>
        <title>Rasoi Ghar Pune | Fresh Homemade Chapati & Bhakri Delivery</title>
        <meta
          name="description"
          content="Rasoi Ghar Pune offers fresh, homemade chapati and bhakri delivered to your doorstep. Order online wheat roti, jowar bhakri, and bajra bhakri in Pune. Perfect for tiffins, families, and bulk catering."
        />
        <meta
            name="keywords"
            content="Rasoi Ghar Pune, chapati delivery Pune, bhakri online, buy chapati online Pune, homemade roti, tiffin roti Pune, soft chapati Pune, jowar bhakri delivery, bajra bhakri Pune, roti near me, bhakri shop in Pune, daily chapati service, bulk roti orders Pune, roti home delivery service, online roti booking, healthy chapati Pune, homemade food Pune, roti tiffin service Pune"
          />
        <meta property="og:title" content="Rasoi Ghar Pune – Order Fresh Chapati & Bhakri Online" />
        <meta
          property="og:description"
          content="Order soft, homemade chapatis and bhakris from Rasoi Ghar Pune. Perfect for daily meals, tiffins, or events. Wheat, jowar, and bajra rotis available."
        />
        <meta property="og:url" content="https://rasoighar-pune.netlify.app/" />
        <meta property="og:image" content="https://rasoighar-pune.netlify.app/cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://rasoighar-pune.netlify.app/" />
      </Helmet>
    <div className='w-screen bg-[#F4EADE] '>
    <Header/>
    <section className=" md:mt-20 mt-10 h-full flex flex-col w-screen items-center justify-center bg-[#F4EADE] px-4">
        
      <h2
        ref={textRef}
        className="text-4xl md:text-8xl logo  overflow-hidden text-center leading-tight"
      >
        GET READY TO BE <br />
        TRANSPORTED TO THE <br />
        STREETS OF DELHI
      </h2>
      <p ref={pRef} className='mt-5 md:text-3xl marathi leading-relaxed'>मुस्कुराये आप मेरी दिल्ली में हैं</p>
    </section>

    {/* <ImgSlid/> */}
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

<div className='h-20 bg-[#FF5101]'>

</div>
<Footer/>







    

    </div>
    </>
  );
}

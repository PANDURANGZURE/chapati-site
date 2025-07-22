// components/Footer.jsx
import { FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";
import Location from "./Location";

export default function Footer() {
  return (
    <>
    <div className='w-full h-40 overflow-hidden bg-[#FF5101]'>
      <svg viewBox="0 0 2000 80" width="100%" height="100%" preserveAspectRatio="none" className="block w-full h-full" >
      <path
        fill="#F4E8DA"
        d="
          M0,0
          A100,40 0 0,0 100,0
          A100,40 0 0,0 200,0
          A100,40 0 0,0 300,0
          A100,40 0 0,0 400,0
          A100,40 0 0,0 500,0
          A100,40 0 0,0 600,0
          A100,40 0 0,0 700,0
          A100,40 0 0,0 800,0
          A100,40 0 0,0 900,0
          A100,40 0 0,0 1000,0
          A100,40 0 0,0 1100,0
          A100,40 0 0,0 1200,0
          A100,40 0 0,0 1300,0
          A100,40 0 0,0 1400,0
          A100,40 0 0,0 1500,0
          A100,40 0 0,0 1600,0
          A100,40 0 0,0 1700,0
          A100,40 0 0,0 1800,0
          A100,40 0 0,0 1900,0
          A100,40 0 0,0 2000,0
          L2000,80 L0,80 Z
        "
      />
    </svg>
    </div>
    
    <footer className="bg-[#F4E8DA] text-black py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section - Image Placeholder */}
        <div className="relative   max-w-md">
          <div className="absolute -top-4 -left-4 w-full h-full bg-black z-0 "></div>
          <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.506204938493!2d73.89913017523864!3d18.596287982511953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7e96de8f927%3A0x2397e5be26a571c6!2sSaurav%20Zure!5e0!3m2!1sen!2sin!4v1752822084323!5m2!1sen!2sin"
        className="relative z-10 w-full bg-[#F4E8DA]  md:h-[600px] h-auto border-2 border-black "
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
        </div>
        {/* Right Section - Content */}
        <div className="text-left">
          <h2 className="mb-2 text-5xl md:text-7xl font-extrabold logo leading-tight">Our Location</h2>
          <p className="marathi text-xl mt-3 font-medium md:text-3xl mb-6">आमचा पत्ता</p>
          <p className="mb-6 mt-4  ">Dhanori, Pune 15, Maharastra India</p>

          {/* Icons */}
          <div className="flex space-x-4 mb-4 text-lg">
            <a href="#"><FaEnvelope  className="text-2xl" /></a>
            <a href="#"><FaPhoneAlt  className="text-2xl"/></a>
            <a href="#"><FaInstagram className="text-2xl"/></a>
          </div>

          {/* Contact Info */}
          <p className="mb-1 text-base md:text-xl base"><a href="tel:+918888162425" className="hover:underline">+91 8888162425</a></p>
          <p className="mb-4 text-base md:text-xl base"><a href="tel:+918888162425" className="hover:underline">+91 8888162425</a></p>

          {/* Rights */}
          <p className="text-sm text-black/80">
            Rasoi ghar pune is an trademark comes under   
            <span className="text-black"> ©Pratiksha Enterprises</span>
          </p>
          <p className="text-sm text-black/80">
            All Rights Reserved By  
            <span className="text-black"> ©Pratiksha Enterprises</span>
          </p>
        </div>
      </div>

      {/* Scalloped Top (Optional SVG Border) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-6 md:h-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,100 350,0 600,100 C850,200 1050,0 1200,100 L1200,0 L0,0 Z"
            fill="#f97316"
          />
        </svg>
      </div>
    </footer>
    </>
  );
}

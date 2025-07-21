// components/Footer.jsx
import { FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";
import Location from "./Location";

export default function Footer() {
  return (
    <footer className="bg-[#FF5101] text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section - Image Placeholder */}
        <div className="relative w-full md:h-[700px] border-8 border-black shadow-lg rounded-sm bg-neutral-100">
            <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.506204938493!2d73.89913017523864!3d18.596287982511953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7e96de8f927%3A0x2397e5be26a571c6!2sSaurav%20Zure!5e0!3m2!1sen!2sin!4v1752822084323!5m2!1sen!2sin"
        className="absolute top-0 left-0 w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
        </div>
        {/* Right Section - Content */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Our Location</h2>
          <p className="text-xl mb-2">आमचा पत्ता</p>
          <p className="mb-4">Dhanori, Pune 15, Maharastra India</p>

          {/* Icons */}
          <div className="flex space-x-4 mb-4 text-lg">
            <FaEnvelope />
            <FaPhoneAlt />
            <FaInstagram />
          </div>

          {/* Contact Info */}
          <p className="mb-1">+91 8888162425</p>
          <p className="mb-4">+91 8888162425</p>

          {/* Rights */}
          <p className="text-sm text-white/80">
            All Rights Reserved By <br />
            <span className="text-white">©Pratiksha Enterprises</span>
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
  );
}

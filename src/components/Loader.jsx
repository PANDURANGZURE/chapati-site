// components/Loader.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import './Loader.css'

export default function Loader() {
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowRest(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    
      <div className="flex h-screen w-screen items-center justify-center bg-[#FF5101]">
        <div
          id="cooking"
          className="relative mx-auto max-w-xs sm:max-w-md md:max-w-lg h-64 sm:h-80 md:h-96"
        >
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div id="area">
            <div id="sides">
              <div id="pan"></div>
              <div id="handle"></div>
            </div>
            <div id="pancake">
              <div id="pastry"></div>
            </div>
          </div>
        </div>
      </div>


      
    
  );
}

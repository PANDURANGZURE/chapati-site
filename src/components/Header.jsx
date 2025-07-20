import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
     <div className="flex justify-center items-center flex-col sticky top-0 z-50  " >
            <div className='absolute md:-top-8   '>
              <img className='md:h-40 h-32 mr-2' src={logo} alt="" />
            </div>
            <div className="bg-[#F4EADE] w-full md:h-20 h-16 shadow-2xl flex justify-end items-center md:pr-10"> 
             {/* Desktop row */}
             <div className='hidden md:flex gap-5'>
              <p className='text-lg base'>About Us</p>
              <FaCartShopping className='text-4xl'/>
             </div>
             {/* Mobile hamburger */}
             <button className="md:hidden text-3xl mr-4" onClick={() => setSidebarOpen(true)}>
               <FaBars />
             </button>
            </div>
            {/* Mobile sidebar */}
            {sidebarOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex">
                <div className="bg-[#F4EADE] w-64 h-full p-6 flex flex-col gap-6 shadow-xl animate-slidein">
                  <button className="self-end text-2xl mb-4" onClick={() => setSidebarOpen(false)}>&times;</button>
                  <p className='text-lg base'>About Us</p>
                  <div className='flex gap-2'>
                    <FaCartShopping className='text-4xl'/><p className='text-lg base'>Shop now</p>
                  </div>
                </div>
                <div className="flex-1" onClick={() => setSidebarOpen(false)}></div>
              </div>
            )}
            <div className="w-0 h-0 border-l-[150px] border-l-transparent 
            border-t-[30px] border-t-[#F4EADE]
            border-r-[150px] border-r-transparent
            "></div>
            </div>
            {/* Add slidein animation */}
            <style>{`
              @keyframes slidein {
                from { transform: translateX(-100%); }
                to { transform: translateX(0); }
              }
              .animate-slidein {
                animation: slidein 0.3s ease-out;
              }
            `}</style>
    </>
  )
}

export default Header

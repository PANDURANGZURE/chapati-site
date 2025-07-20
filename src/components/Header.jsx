import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
            {/* Mobile sidebar with motion animation */}
            <AnimatePresence>
            {sidebarOpen && (
              <motion.div 
                className="fixed inset-0  backdrop-blur-xl opacity-20 grayscale-25 shadow-md  z-50 flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
              >
                <motion.div
                  className="bg-[#F4EADE] w-64 h-full p-6 flex flex-col gap-6 shadow-xl"
                  initial={{ x: -300 }}
                  animate={{ x: 0 }}
                  exit={{ x: -300 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onClick={e => e.stopPropagation()}
                >
                  <motion.button 
                    className="self-end text-2xl mb-4" 
                    onClick={() => setSidebarOpen(false)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: 0.1 }}
                  >&times;</motion.button>
                  <motion.p 
                    className='text-lg base'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.2 }}
                  >About Us</motion.p>
                  <motion.div 
                    className='flex gap-2'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ delay: 0.3 }}
                  >
                    <FaCartShopping className='text-4xl'/><p className='text-lg base'>Shop now</p>
                  </motion.div>
                </motion.div>
                <div className="flex-1" />
              </motion.div>
            )}
            </AnimatePresence>
            <div className="w-0 h-0 border-l-[150px] border-l-transparent 
            border-t-[30px] border-t-[#F4EADE]
            border-r-[150px] border-r-transparent
            "></div>
            </div>
    </>
  )
}

export default Header

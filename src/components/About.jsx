import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import br from '../assets/border.png'

function About() {
  return (
    <>
    <motion.div
      className='h-1/2  flex flex-col justify-center items-center text-center mx-10 my-20 bg-[#F4EADE]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
    <p className='base'>Welcome to My Delhi, the home of Delhi‑cious Indian street food. <br /> Our fun, vibrant, and eclectic restaurant serves up authentic favourites inspired by the roadside stalls of Delhi.</p>
    <Link to="/about">
        <button
          
          className=" cursor-pointer mt-6 px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition"
        >
          About Us
        </button>
        </Link>
    </motion.div>
    {/* <div className="w-full h-10 overflow-hidden  md:hidden">
      <svg viewBox="0 0 2000 40" width="100%" height="100%" preserveAspectRatio="none" className="block w-full h-full">
        <path
          fill="#FF5101"
          d="
            M0,0
            A20,10 0 0,0 80,0
            A20,10 0 0,0 160,0
            A20,10 0 0,0 240,0
            A20,10 0 0,0 320,0
            A20,10 0 0,0 400,0
            A20,10 0 0,0 480,0
            A20,10 0 0,0 560,0
            A20,10 0 0,0 640,0
            A20,10 0 0,0 720,0
            A20,10 0 0,0 800,0
            A20,10 0 0,0 880,0
            A20,10 0 0,0 960,0
            A20,10 0 0,0 1040,0
            A20,10 0 0,0 1120,0
            A20,10 0 0,0 1200,0
            A20,10 0 0,0 1280,0
            A20,10 0 0,0 1360,0
            A20,10 0 0,0 1440,0
            A20,10 0 0,0 1520,0
            A20,10 0 0,0 1600,0
            A20,10 0 0,0 1680,0
            A20,10 0 0,0 1760,0
            A20,10 0 0,0 1840,0
            A20,10 0 0,0 1920,0
            A20,10 0 0,0 2000,0
            L2000,40 L0,40 Z
          "
        />
      </svg>
    </div> */}

    {/* Desktop SVG wave - more pronounced */}
    <div className='w-full h-40 overflow-hidden'>
      <svg viewBox="0 0 2000 80" width="100%" height="100%" preserveAspectRatio="none" className="block w-full h-full" >
      <path
        fill="#FF5101"
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
    
    </>
  )
}

export default About
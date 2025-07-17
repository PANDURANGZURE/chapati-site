import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import br from '../assets/border.png'

function About() {
  return (
    <>
    <motion.div
      className='h-1/2  flex flex-col justify-center items-center text-center mx-10 my-20 bg-[#FEF9F3]'
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
          Buy now
        </button>
        </Link>
    </motion.div>
    <svg viewBox="0 0 2000 80" width="100%" height="80" preserveAspectRatio="none" style={{ display: 'block' }}>
      <path
        fill="#F4EADF"
        d="
          M0,0
          A40,30 0 0,0 80,0
          A40,30 0 0,0 160,0
          A40,30 0 0,0 240,0
          A40,30 0 0,0 320,0
          A40,30 0 0,0 400,0
          A40,30 0 0,0 480,0
          A40,30 0 0,0 560,0
          A40,30 0 0,0 640,0
          A40,30 0 0,0 720,0
          A40,30 0 0,0 800,0
          A40,30 0 0,0 880,0
          A40,30 0 0,0 960,0
          A40,30 0 0,0 1040,0
          A40,30 0 0,0 1120,0
          A40,30 0 0,0 1200,0
          A40,30 0 0,0 1280,0
          A40,30 0 0,0 1360,0
          A40,30 0 0,0 1440,0
          A40,30 0 0,0 1520,0
          A40,30 0 0,0 1600,0
          A40,30 0 0,0 1680,0
          A40,30 0 0,0 1760,0
          A40,30 0 0,0 1840,0
          A40,30 0 0,0 1920,0
          A40,30 0 0,0 2000,0
          L2000,80 L0,80 Z
        "
      />
    </svg>
    
    </>
  )
}

export default About
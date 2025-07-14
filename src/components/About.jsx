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
    
    </>
  )
}

export default About
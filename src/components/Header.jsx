import React from 'react'
import logo from "../assets/logo.png"

function Header() {
  return (
    <>
     <div className="flex justify-center items-center flex-col sticky top-0 z-50  " >
            <div className='absolute md:-top-8   '>
              <img className='md:h-40 h-32 mr-2' src={logo} alt="" />
            </div>
            <div className="bg-[#F4EADE] w-full md:h-20 h-16 shadow-2xl "></div>
            <div className="w-0 h-0 border-l-[150px] border-l-transparent 
            border-t-[30px] border-t-[#F4EADE]
            border-r-[150px] border-r-transparent
            "></div>
            </div>
            
    </>
  )
}

export default Header

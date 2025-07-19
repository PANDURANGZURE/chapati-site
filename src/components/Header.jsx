import React from 'react'
import logo from "../assets/logo.png"

function Header() {
  return (
    <>
     <div className="flex justify-center items-center flex-col sticky top-0 z-50  " >
            <div className='absolute -top-1 rotate-3 mr-1 '>
              <img className='h-32' src={logo} alt="" />
            </div>
            <div className="bg-[#F4EADE] w-full md:h-20 h-16 shadow-2xl "></div>
            <div className="w-0 h-0 border-l-[150px] border-l-transparent 
            border-t-[60px] border-t-[#F4EADE]
            border-r-[150px] border-r-transparent
            "></div>
            </div>
            
    </>
  )
}

export default Header

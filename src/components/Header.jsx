import React from 'react'

function Header() {
  return (
    <>
     <div className="flex justify-center items-center flex-col sticky top-0 z-50  " >
            <p className="absolute text-6xl logo top-10  ">saurav</p>
            <div className="bg-[#F4EADE] w-full md:h-20 h-16 shadow-2xl "></div>
            <div className="w-0 h-0 border-l-[150px] border-l-transparent 
            border-t-[70px] border-t-[#F4EADE]
            border-r-[150px] border-r-transparent
            "></div>
            </div>
            
    </>
  )
}

export default Header

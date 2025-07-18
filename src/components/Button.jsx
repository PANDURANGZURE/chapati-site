export default function DrinksMenuLabel() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#f5e8dd]">
        <div className="relative">
          {/* Wavy Shape Background */}
          <svg
            viewBox="0 0 300 80"
            className="w-[300px] h-[80px] text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 
              Q10,0 20,40 
              T40,40 
              T60,40 
              T80,40 
              T100,40 
              T120,40 
              T140,40 
              T160,40 
              T180,40 
              T200,40 
              T220,40 
              T240,40 
              T260,40 
              T280,40 
              T300,40 
              Q290,80 280,40 
              T260,40 
              T240,40 
              T220,40 
              T200,40 
              T180,40 
              T160,40 
              T140,40 
              T120,40 
              T100,40 
              T80,40 
              T60,40 
              T40,40 
              T20,40 
              Q10,80 0,40 
              Z"
              fill="currentColor"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
  
          {/* Text on Top */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-black">
            DRINKS MENU
          </div>
        </div>
      </div>
    );
  }
  
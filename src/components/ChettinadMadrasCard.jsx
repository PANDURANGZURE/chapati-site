import React from "react";
// import image from "./chettinad.png"; // 🖼️ Use your image here

export default function FramedImage() {
  return (
    <div className="relative bg-orange-500 w-full max-w-md mx-auto rounded-[30px] p-4 overflow-hidden shadow-xl">
      {/* ⬜ Decorative white corners */}
      <div className="absolute top-0 left-0 w-8 h-8 bg-white rounded-br-[30px] z-10" />
      <div className="absolute top-0 right-0 w-8 h-8 bg-white rounded-bl-[30px] z-10" />
      <div className="absolute bottom-0 left-0 w-8 h-8 bg-white rounded-tr-[30px] z-10" />
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-tl-[30px] z-10" />

      {/* 🖼️ Image inside */}
      <img
        src="https://cdn.prod.website-files.com/654924556009114c605140c3/6553a24bb3f4f19ec4a782b9_chettinad-madras.avif"
        alt="Chettinad Madras"
        className="w-full h-auto rounded-[20px] relative z-20 border-4 border-white"
      />
    </div>
  );
}

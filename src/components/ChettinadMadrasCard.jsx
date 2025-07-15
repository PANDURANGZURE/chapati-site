import React from "react";
import "./chettinadWavy.css";

export default function FramedImage() {
  return (
    <div className="chettinad-wavy mx-auto flex items-center justify-center" style={{width: 320, height: 400}}>
      <img
        src="https://cdn.prod.website-files.com/654924556009114c605140c3/6553a24bb3f4f19ec4a782b9_chettinad-madras.avif"
        alt="Styled Drink"
        className="w-full h-full object-cover rounded"
      />
    </div>
  );
}

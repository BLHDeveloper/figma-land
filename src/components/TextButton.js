import React from "react";
import "../../public/fonts/style.css";
const TextButton = ({ text, className }) => {
  return (
    <div className="flex items-center gap-[10px] p-[10px]">
      <button className={`text-[17px] leading-[25px] font-medium tracking-[0.2px] text-white ${className}`}>
        {text}
      </button>
    </div>
  );
};

export default TextButton;

import React from "react";
import "../../public/fonts/style.css";
const Button = ({ text, className, className2 }) => {
  return (
    <button
      className={`inline-flex h-13 px-9 py-5 items-center flex-shrink-0 bg-[#4452FE] shadow-[0px_4px_31px_0px_rgba(0,0,0,0.15)]${className}`}
    >
      <div className="flex items-center gap-[10px] p-[10px]">
        <div
          className={`text-[17px] leading-[25px] font-['font-med'] tracking-[0.2px] text-white ${className2}`}
        >
          {text}
        </div>
      </div>
    </button>
  );
};

export default Button;

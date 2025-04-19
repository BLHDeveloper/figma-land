import React from "react";
import "../../public/fonts/style.css";
const MobileMenu = ({ text }) => {
  return (
    <div className="flex items-center gap-2.5">
      <div className="text-black font-['font-regular'] text-2xl font-normal leading-[45px] tracking-[0.2px]">
        {text}
      </div>
    </div>
  );
};

export default MobileMenu;

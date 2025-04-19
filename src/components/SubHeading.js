import React from "react";
import "../../public/fonts/style.css";
const SubHeading = ({ paragraph }) => {
  return (
    <div className="flex items-center px-2.5 gap-2.5">
      <div className="text-white text-center text-[20px] font-['font-regular']  font-normal leading-[30px] tracking-[0.2px]">
        {paragraph}
      </div>
    </div>
  );
};

export default SubHeading;

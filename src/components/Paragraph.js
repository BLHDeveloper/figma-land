import React from "react";
const Paragraph = ({ paragraph, className }) => {
  return (
    <div className="flex items-center gap-[10px] p-[10px]">
      <p className={`text-base leading-6 ${className}`}>{paragraph}</p>
    </div>
  );
};

export default Paragraph;

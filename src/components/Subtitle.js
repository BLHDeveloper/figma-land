import React from "react";

const Subtitle = ({ text }) => {
  return (
    <div className="flex items-center gap-[10px] px-[10px]">
      <span>{text}</span>
    </div>
  );
};

export default Subtitle;

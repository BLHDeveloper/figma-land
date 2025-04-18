import React from "react";
const SubHeading = ({ paragraph }) => {
  return (
    <div className="flex items-center gap-[10px] p-[10px]">
      <p className="text-lg leading-7">{paragraph}</p>
    </div>
  );
};

export default SubHeading;

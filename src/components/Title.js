import React from "react";
const Title = ({ title, className }) => {
  return (
    <div className="flex p-2.5 items-center gap-2.5">
      <h3 className={className}>{title}</h3>
    </div>
  );
};

export default Title;

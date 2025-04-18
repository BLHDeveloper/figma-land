import React from "react";

const Link = ({ href, text }) => {
  return (
    <div className="flex items-center gap-[10px] p-[10px]">
      <a href={href}>{text}</a>
    </div>
  );
};

export default Link;

import React from "react";

const Link = ({ href, text, className }) => {
  return (
    <div className="flex items-center gap-[10px] p-[10px]">
      <a href={href} className={className}>
        {text}
      </a>
    </div>
  );
};

export default Link;

import React from "react";

const Link = ({ href, text, className, className2 }) => {
  return (
    <div className={`flex items-center gap-[10px] p-[10px]${className2}`}>
      <a href={href} className={className}>
        {text}
      </a>
    </div>
  );
};

export default Link;

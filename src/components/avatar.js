import React from "react";

const Avatar = ({ className, imageUrl }) => {
  return (
    <div
      className={`w-[50px] h-[50px] rounded-[50px] bg-gray-300 bg-cover bg-center flex justify-center items-center flex-shrink-0 ${className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  );
};

export default Avatar;

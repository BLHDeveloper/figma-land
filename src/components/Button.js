import React from "react";
import "../../public/fonts/style.css";
import TextButton from "./TextButton"; 
const Button = ({ text, className }) => {
  return (
    <button
      className={`inline-flex h-13 px-9 py-5 items-center flex-shrink-0 bg-[#4452FE] shadow-[0px_4px_31px_0px_rgba(0,0,0,0.15)]${className}`}
    >
      <TextButton text={text} />
    </button>
  );
};

export default Button;

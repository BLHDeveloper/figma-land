import React from 'react';

const Input = ({ type, placeholder, value, onChange }) => {
    return (
      <>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="inline-flex h-[52px] px-[28px] py-[33px] items-center gap-[10px] shrink-0 rounded-[10px] border border-[#D0D0D0] bg-[#EFEFEF] placeholder:text-[#5C5C5C] placeholder:font-roboto placeholder:text-[15px] placeholder:font-bold placeholder:leading-[24px] placeholder:tracking-[0.2px]"
        />
      </>
    );
};

export default Input;
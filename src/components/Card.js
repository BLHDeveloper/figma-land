import React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';
import Button from './Button';
const Card = ({ title, description, text }) => {
  return (
    <div className="flex w-[430px] px-0 py-[40px] flex-col items-center gap-[30px] rounded-[10px] border border-[#D3D3D3] bg-white">
      <Title title={title} className="text-black text-center" />
      <Paragraph
        paragraph={description}
        className="text-[#5C5C5C] text-center"
      />
      <Button
        text={text}
        className="flex h-[52px] px-[29px] py-[20px] items-center"
      />
    </div>
  );
};

export default Card;
import React from "react";
import SecondHeadline from "@/components/SecondHeadline";
import Button from "./Button";
import Image from "next/image";

const Cta = () => {
  return (
    <div className="flex flex-col items-center py-[80px] self-stretch">
      {/* Version pour les écrans > sm */}
      <div className="hidden sm:flex h-[370px] items-center gap-[86px] rounded-[33px] bg-[#343434] shadow-[0px_4px_31px_0px_rgba(0,0,0,0.15)]">
        <div className="flex w-[544px] pl-[58px] flex-col items-start gap-[37px]">
          <SecondHeadline text="OpenType features and Variable fonts" />
          <Button text="Try For Free" />
        </div>
        <div className="flex h-[364px] px-[2px] items-center">
          <Image
            src="/images/Chart.png"
            alt="Illustration"
            width={585}
            height={453.43}
            className="bg-lightgray bg-[4.52px_77.935px] bg-cover bg-no-repeat rounded-r-[33px]"
          />
        </div>
      </div>

      {/* Version pour les écrans <= sm */}
      <div className="flex sm:hidden flex-col items-center gap-[2px] self-stretch">
        <div className="flex w-[407px] pl-[45px] py-[104px] flex-col items-center gap-[37px]">
          <SecondHeadline text="OpenType features and Variable fonts" />
          <Button text="Try For Free" />
        </div>
        <div className="flex h-[383px] items-center shadow-[0px_4px_31px_0px_rgba(0,0,0,0.15)] p-5">
          <Image
            src="/images/Chart.png"
            alt="Illustration"
            width={541}
            height={473.5}
            className="bg-lightgray bg-cover bg-no-repeat"
          />
        </div>
      </div>
    </div>
  );
};

export default Cta;

import React from "react";
import Logodark from "@/components/logodark";
import Link from "@/components/Link";
import Button from "./Button";
import "../../public/fonts/style.css";
import Image from "next/image";
const Header = () => {
  return (
    <header className="flex flex-col items-center gap-[35px] self-stretch">
      {/* navbar*/}
      <div className="flex items-center justify-between w-[1097px] h-[119px]">
        <Logodark />
        <div className="inline-flex items-center gap-2.5">
          <div className="flex items-center gap-[31px]">
            <Link href="" text="Home" />
            <Link href="" text="Product" />
            <Link href="" text="About" />
            <Link href="" text="Contact" />
          </div>
        </div>
        <Button
          text="Login"
          className=" bg-[#181818] h-[52px] border border-white shadow-[0px_4px_31px_rgba(0,0,0,0.15)]"
        />
      </div>
      {/* Text */}
      <div className="flex flex-col items-center py-[50px] gap-[17px] self-stretch">
        <div className="flex p-2.5 items-center gap-2.5">
          <h1>
            Work at the speed <br /> of thought
          </h1>
        </div>
        <div className="flex items-center gap-[10px] p-[10px]">
          <div className="text-white text-center  text-[20px] font-normal leading-[30px] tracking-[0.2px]">
            Most calendars are designed for teams. Slate is designed for <br />
            freelancers who want a simple way to plan their schedule.
          </div>
        </div>
      </div>
      {/* buttons */}
      <div className="flex items-center gap-[35px]">
        <Button text="Try For Free" />
        <Button
          text="Learn More"
          className=" bg-[#181818] h-[52px] border border-white shadow-[0px_4px_31px_rgba(0,0,0,0.15)]"
        />
      </div>
      <Image
        src="/images/screens.png"
        alt="Illustration"
        width={1441}
        height={993}
        className="flex"
      />
    </header>
  );
};

export default Header;

import React from "react";
import Logodark from "@/components/logodark";
import Link from "@/components/Link";
import Button from "./Button";
import "../../public/fonts/style.css";
import Image from "next/image";
import Headline from "@/components/headline";
import SubHeading from "@/components/SubHeading";

const Header = () => {
  return (
    <>
      <header className=" flex-col items-center gap-[35px] self-stretch hidden sm:flex">
        {/* navbar*/}
        <div className="flex items-center justify-between w-[1000px] h-[119px]">
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
          <Headline
            title={
              <>
                Work at the speed <br />
                of thought
              </>
            }
          />
          <SubHeading
            paragraph={
              <>
                Most calendars are designed for teams. Slate is designed for
                <br />
                freelancers who want a simple way to plan their schedule.
              </>
            }
          />
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
      <header className="flex flex-col items-center gap-[57px] self-stretch sm:hidden">
        {/* navbar */}
        <div className="flex flex-col items-start gap-[24px] self-stretch">
          <div className="flex justify-end items-center gap-[82px] self-stretch px-[16px] pt-[15px] pb-[14px] pl-[24px]">
            <Logodark />
            <div className="inline-flex items-center gap-[16px]">
              <Button
                text="Login"
                className=" bg-[#181818] h-[52px] border border-white shadow-[0px_4px_31px_rgba(0,0,0,0.15)]"
              />
              <div className="w-[66px] h-[53px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="66"
                  height="53"
                  viewBox="0 0 66 53"
                  fill="none"
                >
                  <path
                    d="M11 13.25H55V17.6667H11V13.25ZM22 24.2917H55V28.7083H22V24.2917ZM35.75 35.3333H55V39.75H35.75V35.3333Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Text */}
        <div className="flex flex-col items-center gap-[7px]">
          <Headline
            title={
              <>
                Work at the
                <br /> speed of <br />
                thought.
              </>
            }
          />
          <SubHeading
            paragraph={
              <>
                Most calendars are designed for teams. <br />
                Slate is designed for freelancers who
                <br />
                want a simple way to plan their schedule.
              </>
            }
          />
        </div>
        {/* buttons */}
        <div className="flex flex-col items-center gap-[21px]">
          <Button text="Try For Free" />
          <Button
            text="Learn More"
            className=" bg-[#181818] h-[52px] border border-white shadow-[0px_4px_31px_rgba(0,0,0,0.15)]"
          />
        </div>
        <Image
          src="/images/screens.png"
          alt="Illustration"
          width={549}
          height={435}
          className="self-stretch"
        />
      </header>
    </>
  );
};

export default Header;

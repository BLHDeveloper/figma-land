import React from "react";
import SecondHeadline from "@/components/SecondHeadline";
import SubHeading from "@/components/SubHeading";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import Image from "next/image";
const Content = () => {
  return (
    <div className="flex flex-col items-center gap-[35px] p-[50px_199px] self-stretch">
      <div className="flex flex-col items-center gap-[44px]">
        <div className="flex flex-col items-center">
          <SecondHeadline text="Contents" />
          <SubHeading
            paragraph={
              <>
                We focus on ergonomics and meeting you where you work.
                <br />
                It's only a keystroke away.{" "}
              </>
            }
          />
        </div>
        <div className="flex items-center gap-[33px]">
          <div className="flex flex-col items-center w-[476px] py-[40px] gap-[57px] rounded-[10px] border border-[#D3D3D3] bg-white shadow-[0px_4px_31px_0px_rgba(0,0,0,0.15)]">
            <div className="flex flex-col items-center gap-[10px]">
              <Title title="Work" className="text-center !text-[#000]" />
              <Paragraph
                paragraph={
                  <>
                    Ever wondered if you're too reliant
                    <br />
                    on a client for work? Slate helps <br />
                    you identify .
                  </>
                }
                className="!text-[#5C5C5C] text-center"
              />
            </div>
            <Button text="Sign Up" />
            <Image
              src="/images/Macbook.png"
              alt="Illustration"
              width={405.125}
              height={226.523}
              className="flex"
            />
          </div>
          <div className="flex flex-col items-center w-[476px] py-[40px] gap-[30px] rounded-[10px] border border-[#D3D3D3] bg-white shadow-[0px_4px_31px_0px_rgba(0,0,0,0.15)]">
            <div className="flex flex-col items-center gap-[10px]">
              <Title
                title="Design with real data"
                className="text-center !text-[#000]"
              />
              <Paragraph
                paragraph={
                  <>
                    Ever wondered if you're too reliant <br />
                    on a client for work? Slate helps <br />
                    you identify .
                  </>
                }
                className="!text-[#5C5C5C] text-center"
              />
            </div>
            <Button text="Try For Free" />
            <Image
              src="/images/Board.jpeg"
              alt="Illustration"
              width={379}
              height={276}
              className="rounded-xl bg-cover bg-center bg-light-gray shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

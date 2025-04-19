import React from "react";
import SecondHeadline from "@/components/SecondHeadline";
import Avatar from "@/components/avatar";
import Link from "@/components/Link";
import Subtitle from "@/components/Subtitle";
import Paragraph from "./Paragraph";

const testimonials = [
  {
    id: 1, // Ajout d'un identifiant unique
    imageUrl: "/images/Elipes2.png",
    name: "Claire Bell",
    role: "Designer",
  },
  {
    id: 2, // Ajout d'un identifiant unique
    imageUrl: "/images/Elipes3.png",
    name: "Ralph Fisher",
    role: "Designer",
  },
  {
    id: 3, // Ajout d'un identifiant unique
    imageUrl: "/images/Elipes4.png",
    name: "Francisco Lane",
    role: "Designer",
  },
  {
    id: 4, // Ajout d'un identifiant unique
    imageUrl: "/images/Elipes5.png",
    name: "Jorge Murphy",
    role: "Designer",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center gap-[50px] py-[50px] px-[20px] self-stretch">
      <SecondHeadline text="Testimonials" />
      <div className="flex items-start gap-[23px]">
        <div className="flex flex-col items-center gap-5">
          <>
            {testimonials.slice(0, 2).map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex w-[430px] p-10 flex-col items-start gap-[30px] rounded-[10px] border border-[#DEDEDE] bg-[#181818]"
              >
                <div className="flex items-center gap-[13px]">
                  <Avatar imageUrl={testimonial.imageUrl} />
                  <div className="flex flex-col items-start">
                    <Link
                      href=""
                      text={testimonial.name}
                      className2="!gap-[0px] px-[10px]"
                    />
                    <Subtitle text={testimonial.role} />
                  </div>
                </div>
                <Paragraph paragraph="Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year." />
              </div>
            ))}
          </>
        </div>
        <div className="flex flex-col items-center gap-5">
          <>
            {testimonials.slice(2, 4).map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex w-[430px] p-10 flex-col items-start gap-[30px] rounded-[10px] border border-[#DEDEDE] bg-[#181818]"
              >
                <div className="flex items-center gap-[13px]">
                  <Avatar imageUrl={testimonial.imageUrl} />
                  <div className="flex flex-col items-start">
                    <Link
                      href=""
                      text={testimonial.name}
                      className2="!gap-[0px] px-[10px]"
                    />
                    <Subtitle text={testimonial.role} />
                  </div>
                </div>
                <Paragraph paragraph="Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year." />
              </div>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

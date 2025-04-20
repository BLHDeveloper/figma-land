import React from "react";
import SecondHeadline from "@/components/SecondHeadline";
import SubHeading from "@/components/SubHeading";
import Button from "@/components/Button";
import Image from "next/image";

const Gallery = () => {
  const images = [
    { src: "/images/Card.png", alt: "Illustration 1" },
    { src: "/images/Card2.png", alt: "Illustration 2" },
    { src: "/images/Card3.png", alt: "Illustration 3" },
    { src: "/images/Card4.png", alt: "Illustration 4" },
  ];

  const additionalImages = [
    { src: "/images/Card5.png", alt: "Illustration 5", width: 395 },
    { src: "/images/Card6.png", alt: "Illustration 6", width: 225 },
    { src: "/images/Card7.png", alt: "Illustration 7", width: 401 },
  ];

  return (
    <>
      <div className="hidden sm:flex flex-col items-center gap-[35px] px-[199px] py-[50px] self-stretch">
        <div className="flex flex-col items-center gap-11">
          <div className="flex flex-col items-center">
            <SecondHeadline text="Gallery" />
            <SubHeading
              paragraph={
                <>
                  We focus on ergonomics and meeting you where you work.
                  <br />
                  It's only a keystroke away.
                </>
              }
            />
          </div>
          <div className="flex items-center gap-[33px]">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={225}
                height={285}
                className="flex items-center rounded-lg bg-cover bg-center bg-lightgray shadow-lg"
              />
            ))}
          </div>
          <div className="flex items-center gap-[33px]">
            {additionalImages.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={285}
                className="flex items-center rounded-lg bg-cover bg-center bg-lightgray shadow-lg"
              />
            ))}
          </div>
          <Button
            text="See more"
            className=" bg-[#181818] h-[52px] border border-white shadow-[0px_4px_31px_rgba(0,0,0,0.15)]"
          />
        </div>
      </div>
      <div className="flex sm:hidden flex-col items-center gap-[35px] px-[199px] py-[50px] self-stretch">
        <div className="flex flex-col items-center gap-11 w-[400px]">
          <div className="flex flex-col items-center">
            <SecondHeadline text="Gallery" />
            <SubHeading
              paragraph={
                <>
                  We focus on ergonomics and meeting <br />
                  you where you work.
                  <br />
                  It's only a keystroke away.
                </>
              }
            />
          </div>
          <div className="flex flex-col items-center gap-[33px] stretch">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={329}
                height={285}
                className="flex items-center rounded-xl bg-cover bg-center bg-lightgray bg-no-repeat shadow-[0px_4px_31px_0px_rgba(0,0,0,0.15)]"
              />
            ))}
          </div>
          <Button
            text="See more"
            className=" bg-[#181818] h-[52px] border border-white shadow-[0px_4px_31px_rgba(0,0,0,0.15)]"
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;

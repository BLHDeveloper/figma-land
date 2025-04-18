"use client";
import React from "react";
import Headline from "@/components/headline";
import SecondHeadline from "@/components/SecondHeadline";
import Title from "@/components/Title";
import SubHeading from "@/components/SubHeading";
import TextButton from "@/components/TextButton";
import Paragraph from "@/components/Paragraph";
import Subtitle from "@/components/Subtitle";
import Link from "@/components/Link";
import MobileMenu from "@/components/MobileMenu";
import Logo from "@/components/logo";
import Logodark from "@/components/logodark";
import Button from "@/components/Button";
import Input from "@/components/input";
import MailingInput from "@/components/mailinginput";
import Card from "@/components/Card";
import Avatar from "@/components/avatar";
export default function Home() {
  return (
    <>
      {/* <Logo />
      <Logodark />
      <Avatar imageUrl="/images/avatar.png" />
      <Card
        title="Work better together"
        description="Ever wondered if you're too reliant on a client for work? Slate helps you identify ."
        text="Try For Free"
      />
      <Input type="email" placeholder="Enter Your Adress Email" />
      <MailingInput onSubmit={(email) => console.log(email)} />
      <Button text="Click me" />
      <Headline title="Hello World!" />
      <SecondHeadline text="This is a second headline" />
      <Title title="This is a title" />
      <SubHeading paragraph="This is a subheading" />
      <TextButton text="Click me" />
      <Paragraph paragraph="This is a paragraph" />
      <Subtitle text="This is a subtitle" />
      <Link href="https://www.example.com" text="This is a link" />
      <MobileMenu text="This is a mobile menu" /> */}
    </>
  );
}

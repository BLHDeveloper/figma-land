"use client";
import React from "react";
// import MobileMenu from "@/components/MobileMenu";
// import Logo from "@/components/logo";
// import Input from "@/components/input";
// import MailingInput from "@/components/mailinginput";

import Header from "@/components/Header";
import Feature from "@/components/Feature";
import Content from "@/components/Content";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
export default function Home() {
  return (
    <>
      <Header />
      <Feature />
      <Content />
      <Gallery />
      <Partners />
      <Testimonials />
      <Cta />
    </>
  );
}

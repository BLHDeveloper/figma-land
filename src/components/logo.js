import React from "react";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="inline-flex p-[10px] items-start gap-[10px]">
      <Image
        src="/images/logo.png"
        alt="Illustration"
        width={186}
        height={58}
        className="flex"
      />
    </div>
  );
};

export default Logo;

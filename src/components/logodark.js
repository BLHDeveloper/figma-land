import React from "react";
import Image from "next/image";
const Logodark = () => {
  return (
    <div className="inline-flex p-[10px] items-start gap-[10px]">
      <Image
        src="/images/Logodark.png"
        alt="Illustration"
        width={186}
        height={58}
        style={{ width: "auto", height: "auto" }} // Ensure aspect ratio is maintained
      />
    </div>
  );
};

export default Logodark;

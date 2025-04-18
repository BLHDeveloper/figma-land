import React from "react";
const Headline = ({ title }) => {
  return (
    <div className="flex p-2.5 items-center gap-2.5">
      <h1>{title}</h1>
    </div>
  );
};

export default Headline;

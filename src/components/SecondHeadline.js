import React from 'react';

const SecondHeadline = ({ text }) => {
    return (
      <div className="flex p-2.5 items-center gap-2.5">
        <h2>
          {text}
        </h2>
      </div>
    );
};

export default SecondHeadline;
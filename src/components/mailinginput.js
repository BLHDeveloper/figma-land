"use client";
import React, { useState } from 'react';
import TextButton from './TextButton';
const MailingInput = ({}) => {
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted email:", email); // Remplacez cette ligne par une logique spécifique si nécessaire
        setEmail('');
    };

    return (
      <form
        onSubmit={handleFormSubmit}
        className="inline-flex flex-col items-start gap-3"
      >
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Enter Your Adress Email"
          className="flex flex-col items-center text-center gap-[6px] p-[16px_48px] self-stretch rounded-[10px] border border-[#D0D0D0] bg-[#EFEFEF] placeholder:text-[#5C5C5C] placeholder:text-center placeholder:font-roboto placeholder:text-[15px] placeholder:not-italic placeholder:font-bold placeholder:leading-[24px] placeholder:tracking-[0.2px] placeholder:w-[228px]"
          required
        />
        <button
          type="submit"
          className="flex flex-col items-center p-[13px_184px] self-stretch rounded-[10px] bg-[#4452FE] shadow-[0px_4px_31px_rgba(0,0,0,0.15)]"
        >
          <TextButton text="Subscribe"  />
        </button>
      </form>
    );
};

export default MailingInput;
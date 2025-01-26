"use client";

import React, { useState } from "react";
import faqData from "../data/faq.json";
import FaqElement from "./FaqElement";

const FaQ: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  return (
    <>
      <section id="faqs" className="containerr relative my-16 font-montserrat">
        <h1 className="flex justify-center mb-5 bg-gradient-to-b from-primaryBlueStart to-primaryBlueEnd z-20 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
          FAQ&apos;s
        </h1>
        <img
          src="/duckprint3.svg"
          className="transform absolute lg:scale-[90%] scale-[75%] -left-[12rem] overflow-hidden md:-left-[12rem] lg:-left-[16rem] -top-16 lg:-top-8 z-[-10]"
        />
        <img
          src="/duckprint5.svg"
          className="transform lg:scale-[90%] scale-[80%] overflow-hidden absolute -right-[4.5rem] md:-right-[6rem] 2xl:-right-[17rem] -bottom-64 lg:-bottom-56 xl:-bottom-64 z-[-10]"
        />

        {/* DESKTOP */}
        <div className="hidden justify-center gap-1 lg:flex mb-32">
          {/* left column */}
          <div className="flex flex-col w-1/2 mt-1 gap-1">
            {faqData.map((question, index) =>
              index % 2 === 0 ? (
                <FaqElement
                  key={index}
                  question={question.q}
                  answer={question.a}
                  active={index === activeFaq}
                  show={true}
                  onToggle={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  } // Toggle active FAQ
                />
              ) : null
            )}
          </div>
          {/* right column */}
          <div className="flex flex-col w-1/2 mt-1 gap-1">
            {faqData.map((question, index) =>
              index % 2 !== 0 ? (
                <FaqElement
                  key={index}
                  question={question.q}
                  answer={question.a}
                  active={index === activeFaq}
                  show={true}
                  onToggle={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  } // Toggle active FAQ
                />
              ) : null
            )}
          </div>
        </div>
        {/* MOBILE VIEW */}
        <div className="grid lg:hidden grid-cols-1 gap-1">
          {faqData.map((question, index) => (
            <FaqElement
              key={index}
              question={question.q}
              answer={question.a}
              active={index === activeFaq}
              show={true}
              onToggle={() => setActiveFaq(activeFaq === index ? null : index)} // Toggle active FAQ
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default FaQ;

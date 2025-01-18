"use client";

import React, { useState } from "react";
import faqData from "../data/faq.json";
import FaqElement from "./FaqElement";

interface FaqQuestion {
  q: string;
  a: string;
}

const FaQ: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  return (
    <>
      <section id="faq" className="containerr my-16">
        <h1 className="flex justify-center mb-5 bg-gradient-to-b from-primaryBlueStart to-primaryBlueEnd z-20 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
          FAQ's
        </h1>
        {/* DESKTOP */}
        <div className="hidden justify-center gap-1 lg:flex">
          {/* left column */}
          <div className="flex flex-col w-1/2 mt-1 gap-1">
            {faqData.map((question, index) =>
              index % 2 === 0 ? (
                <FaqElement
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

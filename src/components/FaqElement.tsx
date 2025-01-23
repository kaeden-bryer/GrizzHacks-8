import React from "react";
import DOMPurify from "dompurify"; //recommended security

interface FaqElementProps {
  question: string;
  answer: string;
  active: boolean;
  show: boolean;
  onToggle: () => void;
}

const FaqElement: React.FC<FaqElementProps> = ({
  question,
  answer,
  active,
  show,
  onToggle,
}) => {
  if (!show) {
    return null;
  }

  const sanitizedAnswer = DOMPurify.sanitize(answer);

  return (
    <>
      <div className="relative">
        {/* duck */}
        {active && (
          <div className="absolute -top-[5rem] right-0 w-20">
            <img src="/faqduck.svg" alt="" className="w-full h-auto" />
          </div>
        )}

        <div
          className={`rounded-md text-blackColor ring-1 ring-primary ${
            active ? "bg-faqColor" : "bg-navWhite"
          } hover:bg-faqColor flex flex-col justify-start p-3`}
        >
          {/* Clickable Header */}
          <div
            className="flex justify-between cursor-pointer"
            onClick={onToggle}
            role="button"
            tabIndex={0}
          >
            <h5 className="xl:text-2xl md:text-xl text-lg font-semibold">
              {question}
            </h5>
            <img
              src="/faq-arrow.svg"
              alt="Expand"
              className={`w-5 transition-all duration-300 ${
                active ? "rotate-90" : ""
              }`}
            />
          </div>

          {/* Expandable Content */}
          {active && (
            <div className="w-fit">
              <p
                className="my-1 xl:text-lg"
                dangerouslySetInnerHTML={{ __html: sanitizedAnswer }}
              ></p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FaqElement;

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
      <div
        className={`rounded-md ${
          active ? "bg-neutral-950/60" : "bg-neutral-950/80"
        } hover:bg-neutral-900/40 flex flex-col justify-start p-3`}
      >
        {/* Clickable Header */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={onToggle}
          role="button"
          tabIndex={0}
        >
          <h5 className="xl:text-2xl md:text-xl text-lg text-white font-semibold">
            {question}
          </h5>
          <img
            src="/images/arrow.svg"
            alt="Expand"
            className={`w-4 transition-all duration-300 ${
              active ? "rotate-90" : ""
            }`}
          />
        </div>
        {/* Expandable Content */}
        {active && (
          <div className="w-fit">
            <p
              className="my-1 text-white xl:text-lg"
              dangerouslySetInnerHTML={{ __html: sanitizedAnswer }}
            ></p>
          </div>
        )}
      </div>
    </>
  );
};

export default FaqElement;

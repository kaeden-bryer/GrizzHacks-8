import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="font-montserrat flex justify-between py-3 mt-5 items-center containerr px-2 bg-navWhite text-blackColor mt-24">
        <Link href="/" className="md:text-base xl:text-lg text-xs">
          &copy; GrizzHacks {new Date().getFullYear()}
        </Link>
        <a
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
        >
          <h3 className="underline text-xs md:text-base underline-offset-2 hover:underline-offset-4">
            MLH Code of Conduct
          </h3>
        </a>
        <div className="flex gap-1 md:gap-2 items-center">
          <a target="_blank" href="mailto:grizzhacksou@gmail.com">
            <img className="w-6 md:w-10" src="/email-dark.svg" alt="" />
          </a>
          <a target="_blank" href="https://www.instagram.com/grizzhacks/">
            <img className="w-6 md:w-10" src="/insta-dark.svg" alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/grizzhacks/?viewAsMember=true"
          >
            <img className="w-6 md:w-10" src="/linkedin-dark.svg" alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

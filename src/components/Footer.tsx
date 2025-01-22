import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between py-3 mt-5 items-center containerr px-10 bg-white text-blackColor">
        <a href="/" className="md:text-2xl text-lg">
          &copy; GrizzHacks {new Date().getFullYear()}
        </a>
        <div className="flex gap-2 items-center">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/grizzhacks/?viewAsMember=true"
          >
            <img className="w-6 md:w-10" src="/images/linkedin.svg" alt="" />
          </a>
          <a target="_blank" href="https://twitter.com/GrizzHacks">
            <img className="w-6 md:w-10" src="/images/twitter.svg" alt="" />
          </a>
          <a target="_blank" href="https://www.tiktok.com/@grizzhacks">
            <img className="w-6 md:w-10" src="/images/tiktok.svg" alt="" />
          </a>
          <a target="_blank" href="https://www.instagram.com/grizzhacks/">
            <img className="w-6 md:w-10" src="/images/instagram.svg" alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

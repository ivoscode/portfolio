import React from "react";
import ContactForm from "./contactForm";
const Footer = () => {
  return (
    <footer className="bg-gray-800 md:flex justify-center">
      <div className="md:flex md:justify-around w-full max-w-7xl">
        <ContactForm />
        <ContactDetails />
      </div>
    </footer>
  );
};

export default Footer;

export const ContactDetails = () => {
  return (
    <div className="md:w-1/2 text-white text-lg px-5 sm:px-10  mx-auto max-w-xl ">
      <div className="mt-10">
        <div className="invert inline-block h-5 w-5 mr-4">
          <img className="" src="/images/mail.svg" alt="mail" />
        </div>
        <span> ilegzdins@yahoo.com</span>
      </div>
      <div className="mt-8">
        <div className="h-5 w-5 invert inline-block  mr-5">
          <img className="" src="/images/call.svg" alt="call" />
        </div>
        <span> +44 744 524 7009</span>
      </div>
      <div className="mt-8 ">
        <a href="https://github.com/ivoscode">
          <img
            className="invert inline-block mb-10 h-10 w-10"
            alt="github"
            src="/images/github.svg"
          />
        </a>
      </div>
    </div>
  );
};

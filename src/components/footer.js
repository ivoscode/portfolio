import React from 'react';
//import { Link } from 'gatsby';
import mail from '../images/mail.svg';
import call from '../images/call.svg';
import github from '../images/github.svg';

import ContactForm from './contactForm';

const Footer = () => {
  return (
    <footer id='contact' className=' w-full px-3 py-8 mx-auto md:px-11 md:py-5'>
      <div className='bg-black md:flex md:justify-around w-full rounded-3xl'>
        <ContactForm />
        <ContactDetails />
      </div>
    </footer>
  );
};

export default Footer;

export const ContactDetails = () => {
  return (
    <div className='md:w-1/2  '>
      <section className='text-white px-10 mx-auto md:w-1/2 '>
        <div className='mt-10'>
          <img
            className='invert inline-block h-5 w-5 mr-4'
            src={mail}
            alt='mail'
          />
          <span> ilegzdins@yahoo.com</span>
        </div>
        <div className='mt-8'>
          <img
            className='invert inline-block h-5 w-5 mr-5'
            src={call}
            alt='call'
          />
          <span> +44 744 524 7009</span>
        </div>
        <div className='mt-8 '>
          <a href='https://github.com/ivoscode'>
            <img
              className='invert inline-block mb-10 h-10 w-10'
              alt='github'
              src={github}
            />
          </a>
        </div>
      </section>
    </div>
  );
};

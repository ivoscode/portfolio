import React from 'react';

const Hero = () => {
  return (
    <div className='md:flex'>
      <div className='md:w-1/2'>
        <h2 className='hero-h2 mb-10 md:text-sm '>WEB DEVELOPER FOR HIRE</h2>
        <h1 className=' text-5xl font-bold text-gray-700 md:text-7xl '>
          I build
        </h1>
        <h1 className='mark  text-5xl font-bold mt-5 md:text-7xl'>
          fast sites & apps.
        </h1>
        <p className='mt-8'>
          Maximize your business potential with performant websites built with
          the latest, innovative technologies.
        </p>
        <div>
          <button
            className=' mt-10 bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-7 rounded-full'
            type='submit'
          >
            Get in touch
          </button>
        </div>
      </div>
      <div className=' w-1/2 hidden md:block  bg-gray-400 '></div>
    </div>
  );
};

export default Hero;

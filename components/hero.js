
import Image from 'next/image';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
const Hero = () => {
 
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <div className=" h-screen -mt-20 lg:flex">
      <div className="lg:w-7/12 h-full flex flex-col justify-center ">
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={400}
          distance="30px"
        >
          <h2 className="hero-h2 mb-10 md:text-sm ">WEB DEVELOPER FOR HIRE</h2>
          <h1 className=" text-5xl font-bold text-gray-800 md:text-7xl ">
            I build
          </h1>
          <h1 className=" text-5xl font-bold mt-5  text-gray-800 md:text-7xl">
            fast sites & apps.
          </h1>
          <div className="flex mt-10 ">
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <button
                className=" mt-10 mr-5 bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-7 rounded-full"
                type="submit"
              >
                <Link href="#contact"> Get in touch</Link>
              </button>
              <button
                className=" mt-10 bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-7 rounded-full ml-3 lg:ml-6"
                type="submit"
              >
                <Link
                  href="https://drive.google.com/file/d/1wrrtuqjUJKueLeJXvgUQcdFu0dmImANc/view?usp=sharing"
                  target="blank"
                >
                  View CV
                </Link>
              </button>
            </Fade>
          </div>
        </Fade>
      </div>
      <div className=" w-5/12 h-full  flex-col justify-center  hidden lg:flex">
        <Fade
          right={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={400}
          distance="30px"
        >
          <div className="h-96 relative  ">
            <div className="react anim" >
            <Image 
              src={'/images/react-icon.png'}
               width={100}
      height={80}
             /></div>

          <div className="gatsby anim">  <Image
              
              src={'/images/gatsby-icon.png'}
               width={50}
      height={50}
            /></div>
            <div  className="node anim md:hidden lg:inline-block"><Image
              
             src={'/images/node-icon.png'}
              width={80}
      height={50}
            /></div>
           <div  className="nextjs anim"> <Image
             
               width={50}
      height={50}
              src={'/images/nextjs-icon.png'}
            /></div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;

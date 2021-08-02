
import Image from 'next/image';
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import github from "../public/images/github.svg";
import project1 from '../public/images/project1.jpg';
import project2 from '../public/images/project2.jpg';
import project3 from '../public/images/project3.jpg';
import project4 from '../public/images/project4.png';
import project5 from '../public/images/project5.png';
console.log(project5)
const Project = () => {
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
  
  const projectData = [
    {
      title: "Restaurant",
      image: project4,
      text: "Landing page for a restaurant built with Next.js.",
      code: "https://github.com/ivoscode/restaurant",
      live: "https://restaurant-snowy.vercel.app/",
    },
    {
      title: "Pizza shop",
      image: project5,
      text:
        "Landing page for a pizza shop with functioning shopping cart. Built with Next.js implementing react portal and useReducer hook.",
      code: "https://github.com/ivoscode/pizza-shop/tree/main",
      live: "https://pizza-shop-4ij3jhrik-ivoscode.vercel.app/",
    },
    {
      title: "Travel Fun",
      image: project1,
      text: "React site styled with Tailwind and Slick carousel",
      code: "https://github.com/ivoscode/holiday-spots",
      live: "https://travel-fun.netlify.app/",
    },

    {
      title: "Todo App",
      image: project2,
      text: "Mobile app built with React Native.",
      code: "https://github.com/ivoscode/todo-app-react-native",
      live: "https://expo.io/@ilegzdins/projects/todoapp",
    },
    {
      title: "Timer App",
      image: project3,
      text: "Mobile app built with React Native.",
      code: "https://github.com/ivoscode/timer-react-native",
      live: "https://expo.io/@ilegzdins/projects/timer",
    },
  ];

  return (
    <div className=" mb-24  ">
      <h1 className="  text-4xl text-center font-bold text-gray-900 md:text-5xl  ">
        PROJECTS
      </h1>

      {projectData.map(({ title, image, text, code, live }) => {
        return (
          <div
            key={title}
            className=" flex flex-col lg:flex-row mt-32 h-full shadow-sm rounded-2xl  overflow-hidden  "
          >
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={300}
              delay={100}
              distance="30px"
            >
              <div className="  lg:w-5/12 px-9 pb-10 lg:pb-0">
                <h1 className="mt-5 mb-3 text-3xl">{title} </h1>
                <p> {text}</p>
                <div className="">
                  <a
                    href={live}
                    target="blank"
                    className=" mt-10 bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-7 rounded-full"
                    type="submit"
                  >
                    Visit The Site
                  </a>
                  <a href={code} target="blank">
                    <Image
                      className=" inline-block mb-1 ml-10 h-10 w-10  hover:bg-gray-300 rounded-3xl "
                      alt="github"
                      src={github}
                    />
                  </a>
                </div>
              </div>
            </Fade>
            <Fade
              right={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className="overflow-hidden h-full lg:w-7/12"> <Image src={image}/></div>
            </Fade>
          </div>
        );
      })}
    </div>
  );
};

export default Project;

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import project5 from "../public/images/project5.png";
console.log(project5);
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
      image: "/v1627938681/project4_yafchw.png",
      text: "Landing page for a restaurant built with Next.js.",
      code: "https://github.com/ivoscode/restaurant",
      live: "https://restaurant-snowy.vercel.app/",
    },
    {
      title: "Pizza shop",
      image: "/v1627938685/project5_x1tdf1.png",
      text: "Landing page for a pizza shop with functioning shopping cart. Built with Next.js implementing react portal and useReducer hook.",
      code: "https://github.com/ivoscode/pizza-shop/tree/main",
      live: "https://pizza-shop-4ij3jhrik-ivoscode.vercel.app/",
    },
    {
      title: "Travel Fun",
      image: "/v1627938676/project1_k0nvso.jpg",
      text: "React site styled with Tailwind and Slick carousel",
      code: "https://github.com/ivoscode/holiday-spots",
      live: "https://travel-fun.netlify.app/",
    },

    {
      title: "Todo App",
      image: "/v1627938676/project2_qdfjly.jpg",
      text: "Mobile app built with React Native.",
      code: "https://github.com/ivoscode/todo-app-react-native",
      live: "https://expo.io/@ilegzdins/projects/todoapp",
    },
    {
      title: "Timer App",
      image: "/v1627938676/project3_t7scnm.jpg",
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
                <h1 className="mt-5 mb-4 text-3xl">{title} </h1>
                <p> {text}</p>
                <div className=" flex items-center mt-4">
                  {/*----live site----*/}
                  <div>
                    <a
                      href={live}
                      target="blank"
                      className="  bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-7 rounded-full"
                      type="submit"
                    >
                      Visit The Site
                    </a>
                  </div>
                  {/*------git hub---*/}
                  <div className="flex justify-center items-center ml-10 ">
                    <a href={code} target="blank">
                      <img
                        alt="github"
                        width={40}
                        height={40}
                        src="/images/github.svg"
                        className=" hover:bg-gray-200   rounded-3xl"
                      />
                    </a>
                  </div>
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
              <div className="overflow-hidden h-full lg:w-7/12">
                <Image src={image} width={500} height={300} />
              </div>
            </Fade>
          </div>
        );
      })}
    </div>
  );
};

export default Project;

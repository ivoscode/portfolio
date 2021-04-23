import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import github from "../images/github.svg";

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
  const data = useStaticQuery(graphql`
    query {
      project1: file(relativePath: { eq: "project1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      project2: file(relativePath: { eq: "project2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project3: file(relativePath: { eq: "project3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project4: file(relativePath: { eq: "project4.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project5: file(relativePath: { eq: "project5.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const projectData = [
    {
      title: "Restaurant",
      image: <Img fluid={data.project4.childImageSharp.fluid} />,
      text: "Landing page for a restaurant built with Next.js.",
      code: "https://github.com/ivoscode/restaurant",
      live: "https://restaurant-snowy.vercel.app/",
    },
    {
      title: "Pizza shop",
      image: <Img fluid={data.project5.childImageSharp.fluid} />,
      text:
        "Landing page for a pizza shop with functioning shopping cart. Built with Next.js implementing react portal and useReducer hook.",
      code: "https://github.com/ivoscode/pizza-shop/tree/main",
      live: "https://pizza-shop-4ij3jhrik-ivoscode.vercel.app/",
    },
    {
      title: "Travel Fun",
      image: <Img fluid={data.project1.childImageSharp.fluid} />,
      text: "React site styled with Tailwind and Slick carousel",
      code: "https://github.com/ivoscode/holiday-spots",
      live: "https://travel-fun.netlify.app/",
    },

    {
      title: "Todo App",
      image: <Img fluid={data.project2.childImageSharp.fluid} />,
      text: "Mobile app built with React Native.",
      code: "https://github.com/ivoscode/todo-app-react-native",
      live: "https://expo.io/@ilegzdins/projects/todoapp",
    },
    {
      title: "Timer App",
      image: <Img fluid={data.project3.childImageSharp.fluid} />,
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
                    <img
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
              <div className="overflow-hidden h-full  lg:w-7/12">{image}</div>
            </Fade>
          </div>
        );
      })}
    </div>
  );
};

export default Project;

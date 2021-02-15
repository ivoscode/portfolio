import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import github from '../images/github.svg';

const Project = () => {
  const data = useStaticQuery(graphql`
    query {
      project1: file(relativePath: { eq: "project1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      project2: file(relativePath: { eq: "project2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project3: file(relativePath: { eq: "project3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const projectData = [
    {
      title: 'Travel Fun',
      image: <Img fluid={data.project1.childImageSharp.fluid} />,
      text: 'React site styled with Tailwind and Slick carousel',
      code: 'https://github.com/ivoscode/holiday-spots',
      live: 'https://travel-fun.netlify.app/',
    },

    {
      title: 'Todo App',
      image: <Img fluid={data.project2.childImageSharp.fluid} />,
      text: 'Mobile app built with React Native.',
      code: 'https://github.com/ivoscode/todo-app-react-native',
      live: 'https://expo.io/@ilegzdins/projects/todoapp',
    },
    {
      title: 'Timer App',
      image: <Img fluid={data.project3.childImageSharp.fluid} />,
      text: 'Mobile app built with React Native.',
      code: 'https://github.com/ivoscode/timer-react-native',
      live: 'https://expo.io/@ilegzdins/projects/timer',
    },
  ];

  return (
    <div className='mt-24 mb-24'>
      <h1 className=' mb-8 text-3xl font-bold text-gray-700 md:text-3xl md:mt-9 '>
        Latest work
      </h1>
      <div className='md:flex md:justify-between'>
        {projectData.map(({ title, image, text, code, live }) => {
          return (
            <div
              key={title}
              className='lg:w-1/3 md:w-1/2 mx-5  p-10 shadow-lg rounded-lg bg-gray-100  '
            >
              <div className='overflow-hidden md:h-52 rounded-lg'>{image}</div>{' '}
              <h1 className='mt-5 mb-3 text-xl'>{title} </h1>
              <p> {text}</p>
              <div className=''>
                <a
                  href={live}
                  target='blank'
                  className=' mt-10 bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-7 rounded-full'
                  type='submit'
                >
                  Visit The Site
                </a>

                <a href={code} target='blank'>
                  <img
                    className=' inline-block mb-1 ml-10 h-10 w-10  hover:bg-gray-300 rounded-3xl '
                    alt='github'
                    src={github}
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;

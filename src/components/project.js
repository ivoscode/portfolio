import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import github from '../images/github.svg';

const Project = () => {
  const data = useStaticQuery(graphql`
    query {
      project1: file(relativePath: { eq: "project1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      project2: file(relativePath: { eq: "project2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const projectData = [
    {
      title: 'React app',
      image: <Img fluid={data.project1.childImageSharp.fluid} />,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    },

    {
      title: 'Reactapp2',
      image: <Img fluid={data.project2.childImageSharp.fluid} />,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    },
  ];

  return (
    <div className='mt-24 mb-24'>
      <h1 className=' mb-8 text-3xl font-bold text-gray-700 md:text-5xl '>
        Latest work
      </h1>
      <div className='flex md:justify-between'>
        {projectData.map(({ title, image, text }) => {
          return (
            <div
              key={title}
              className='w-1/3 mx-5  p-10 shadow-lg rounded-lg bg-gray-100  '
            >
              <div className='overflow-hidden  rounded-lg'>{image}</div>{' '}
              <h1 className='mt-5 mb-3 text-xl'>{title} </h1>
              <p> {text}</p>
              <div className=''>
                <a
                  href='https://github.com/ivoscode'
                  className=' mt-10 bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-7 rounded-full'
                  type='submit'
                >
                  Visit The Site
                </a>

                <a href='https://github.com/ivoscode'>
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

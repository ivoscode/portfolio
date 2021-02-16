import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Img from 'gatsby-image';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      react: file(relativePath: { eq: "react-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      gatsby: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      node: file(relativePath: { eq: "node-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nextjs: file(relativePath: { eq: "nextjs-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className='md:flex'>
      <div className='md:w-1/2'>
        <h2 className='hero-h2 mb-10 md:text-sm '>WEB DEVELOPER FOR HIRE</h2>
        <h1 className=' text-5xl font-bold text-gray-700 md:text-7xl '>
          I build
        </h1>
        <h1 className=' text-5xl font-bold mt-5  text-gray-700 md:text-7xl'>
          fast sites & apps.
        </h1>

        <div className='flex '>
          <button
            className=' mt-10 bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-7 rounded-full'
            type='submit'
          >
            <Link to='#contact'> Get in touch</Link>
          </button>
          <button
            className=' mt-10 bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-7 rounded-full ml-3 lg:ml-6'
            type='submit'
          >
            <OutboundLink
              href='https://drive.google.com/file/d/1pw3OKXtWcqLyhJ6LMu2YpDJbRPEAOa-A/view?usp=sharing'
              target='blank'
            >
              View CV
            </OutboundLink>
          </button>
        </div>
      </div>
      <div className=' w-1/2  relative hidden md:flex'>
        <Img className='react anim' fluid={data.react.childImageSharp.fluid} />
        <Img
          className='gatsby anim'
          fluid={data.gatsby.childImageSharp.fluid}
        />
        <Img
          className='node anim md:hidden lg:inline-block'
          fluid={data.node.childImageSharp.fluid}
        />
        <Img
          className='nextjs anim'
          fluid={data.nextjs.childImageSharp.fluid}
        />
      </div>
    </div>
  );
};

export default Hero;

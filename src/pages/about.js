/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function AboutPage() {
  return (
    <Layout>
      <SEO keywords={[`portfolio`, `Ivo Legzdins`]} title='About' />

      <section className='mb-24'>
        <h1 className=' mb-10 text-3xl font-bold text-gray-700 md:text-5xl '>
          About Me
        </h1>
        <p className=''>
          Hi, my name's Ivo and I'm a web developer who's passionate about all
          things JavaScript. I'm a developer, because I love to learn and this
          portfolio is a great example of that!
        </p>
        <p className='mt-10'>
          I'm currently looking for an opportunity to work with a JavaScript
          framework and I'd ultimately like to end up working on mobile
          applications.
        </p>
        <p className='mt-10'>
          When I'm not busy building apps, you can find me working in a garden
          and playing with my kids. If you'd like to learn more about what makes
          me tick feel free to visit my contact section.
        </p>
      </section>
    </Layout>
  );
}

export default AboutPage;

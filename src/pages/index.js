import React from 'react';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Project from '../components/project';
import SEO from '../components/seo';
function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`portfolio`, `react`]} title='Home' />
      <Hero />
      <Project />
    </Layout>
  );
}

export default IndexPage;

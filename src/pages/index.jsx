import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import '../index.css';
import { DeveloperCard } from '../components/DeveloperCard';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <DeveloperCard
      path="mariokandut"
      title="Mario Kandut"
      titleImage={require('../assets/awesome-portfolio-logo.svg')}
      description="I help organizations build and ship products and services with confidence and velocity."
      tags={['typescript, react, angular']}
    />
  </Layout>
);

export default IndexPage;

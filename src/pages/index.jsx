import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import '../index.css';
import { Developers } from '../components/Developers';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Developers />
  </Layout>
);

export default IndexPage;

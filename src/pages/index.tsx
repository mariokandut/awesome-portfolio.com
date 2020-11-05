import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello Developer</h1>
    <p>We are building an index for awesome developer portfolios.</p>
  </Layout>
);

export default IndexPage;

import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import Layout from '../components/layout';

export default function developerPortfolioTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark;
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1>{frontmatter.name}</h1>
        <h2>{frontmatter.date}</h2>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        name
      }
    }
  }
`;

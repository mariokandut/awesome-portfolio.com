import { useStaticQuery, graphql } from 'gatsby';

export default function useAllDeveloperPortfolios() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              id
              frontmatter {
                description
                slug
                mainTag
                tags
                name
                titleImage {
                  childImageSharp {
                    fixed(height: 200) {
                      src
                    }
                  }
                }
                portfolioUrl
                description
              }
            }
          }
        }
      }
    `,
  );

  return allMarkdownRemark.edges;
}

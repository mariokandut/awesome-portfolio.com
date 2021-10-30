module.exports = {
  siteMetadata: {
    title: `Awesome-Portfolio.com`,
    description: `Only awesome developer portfolios.`,
    author: `Awesome developers`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/portfolios`,
        name: `portfolios`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/awesome-portfolio-logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
};

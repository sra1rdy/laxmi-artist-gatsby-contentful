var dotenv = require("dotenv");
dotenv.config();

const { spaceId, accessToken } = process.env;
if(!spaceId || !accessToken) return `Contentful spaceId and accessToken are required`;
module.exports = {
  siteMetadata: {
    title: `Laxmi Narayana -  Artist`,
    description: `An e-commerce website for hand drawn pictures by Laxmi`,
    author: `@sravan`,
    twitterHandle: '@abc',
    url:`https://myclicks.netlify.com/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`,   
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-artist.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-source-contentful`,
        options: {
          spaceId,
          accessToken
        }
    },

    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/portfolio/*`] },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `sanket_patel_me`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
  

}

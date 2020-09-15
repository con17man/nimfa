const path = require('path');

const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Nimfa`,
    description: `Cel mai mare furnizor de tevi laminate din Romania`,
    website: `tevi-laminate.ro`,
    author: `Pixelots Digital Agency & CTRD`,
  },
  plugins: [
    // {
    //     resolve: `gatsby-plugin-mdx`,
    //     options: {
    //         defaultLayouts: { default: path.resolve('./src/components/layout.js') },
    //     }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node }) => {
          return node.relativePath.split('.').slice(0, -1).join('.')
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig)
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NIMFA`,
        short_name: `NIMFA`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.red,
        theme_color: fullConfig.theme.colors.blue,
        display: `minimal-ui`,
        icon: `src/assets/images/nimfa_favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

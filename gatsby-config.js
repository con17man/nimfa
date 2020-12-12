const path = require('path');
require("dotenv").config();

const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Nimfa`,
    description: `Cel mai mare furnizor de tevi laminate din Romania`,
    siteUrl: `https://www.tevi-laminate.ro`,
    author: `Pixelots Digital Agency & Constantin R.`,
  },
  plugins: [
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
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.tevi-laminate.ro`,
      },
    },
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-QSYETR36M5", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/categorii-subcategorii.xml`,
        createLinkInHead: true,
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: ({site}) => site.siteMetadata.siteUrl,
        serialize: ({ site, allSitePage }) => {
          return allSitePage.nodes.map((node) => {
            const { siteUrl } = site.siteMetadata;
            return {
              url: `${siteUrl}${node.path}`,
              lastmod: new Date(1607731505384).toISOString().slice(0,10), // hardcoded Date for now, as we don't have another way of getting "last modified" date
            };
          })
        }
      }
    },
    {
      resolve: `gatsby-image-sitemap`, // change default name inside the plugin (as the options feature is not available to overwite default settings)
      options: {
        output: `/pagini-produs.xml`,
        createLinkInHead: true,
      }
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://www.tevi-laminate.ro`,
        sitemap: [
          `https://www.tevi-laminate.ro/categorii-subcategorii.xml`,
          `https://www.tevi-laminate.ro/pagini-produs.xml`,
        ],
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
}

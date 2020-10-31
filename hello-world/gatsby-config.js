/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Gusu.ch`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-apiserver`,
      options: {
        typePrefix: "internal__",
        url: `https://green-pebble-083ffca03.azurestaticapps.net/api/gusuEntity`,
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
        data: {},
      }
    }

  ],
}
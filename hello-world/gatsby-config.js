/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const gusuEntity = {
  id: 1,
  name: 'string'
}

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
        entitiesArray: [
          {
            url: `https://green-pebble-083ffca03.azurestaticapps.net/api/gusuEntity`,
            method: "get",
            headers: {
              "Content-Type": "application/json"
            },
            data: {},
            name: `gusuEntities`,
            schemaType: gusuEntity
          },
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-azure-storage",
      options: {
        tables: [
          {
            name: "gusuEntities"
          }
        ]
      }
    }
  ],
}

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    // {
    //   resolve: `gatsby-source-graphcms`,
    //   options: {
    //     endpoint: `graphql_endpoint`,
    //     token: `graphql_token`,
    //     query: `{
    //       allArtists {
    //         id
    //         name
    //       }
    //     }`,
    //   },
    // },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `ishallbe`,
        accessToken: `MC5XaVFrVGlvQUFFSkZ0LWpQ.77-977-9Fe-_vVwn77-9Su-_vWLvv70a77-977-977-9Vu-_ve-_ve-_vXAd77-977-977-977-9Hu-_ve-_ve-_ve-_ve-_ve-_vQ`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typography`,
    `gatsby-plugin-glamor`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
  ],

}

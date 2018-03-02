module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/pages/posts`,
      }
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `ishallbe`,
        accessToken: `MC5XaVFrVGlvQUFFSkZ0LWpQ.77-977-9Fe-_vVwn77-9Su-_vWLvv70a77-977-977-9Vu-_ve-_ve-_vXAd77-977-977-977-9Hu-_ve-_ve-_ve-_ve-_ve-_vQ`,
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `rocybtov1ozk`,
    //     accessToken: `6f35edf0db39085e9b9c19bd92943e4519c77e72c852d961968665f1324bfc94`,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typography`,
    `gatsby-plugin-glamor`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    `gatsby-plugin-twitter`,
    // {
    //   resolve: `gatsby-source-twitter`,
    //   options: {
    //     q: `@wesbos`,
    //     credentials: {
    //       consumer_secret: "INSERT_HERE_YOUR_CONSUMER_KEY",
    //       consumer_secret: "INSERT_HERE_YOUR_CONSUMER_SECRETE",
    //       bearer_token: "INSERT_HERE_YOUR_BEARER_TOKEN",
    //     },
    //     tweet_mode: 'extended'
    //   }
    // }
  ],

}

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
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `fupty2cdhse7`,
    //     accessToken: `e975e1e367e750f9d2146965eac631c66297e45275a4f2933a958188e0aa9e85`,
    //   }
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typography`,
    `gatsby-plugin-glamor`,
    `gatsby-transformer-remark`
  ],

}

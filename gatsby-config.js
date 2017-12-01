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
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `Testingabc`,
        accessToken: `MC5XaUcwLVIwQUFJSlFET0xf.77-977-977-977-9ARTvv73vv73vv73vv70977-977-977-977-977-9cExc77-977-977-9NF54SO-_ve-_ve-_ve-_vQho`,
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typography`,
    `gatsby-plugin-glamor`,
    `gatsby-transformer-remark`
  ],

}

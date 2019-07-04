module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ekwr4qpr063w`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'f_TetIjLDlas20w_A4JCEtAhlxCiwHqdomUxDDFwx1k',
        downloadLocal: true,
      },
    },
  ],
}

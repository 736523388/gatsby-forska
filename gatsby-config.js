module.exports = {
  siteMetadata: {
    title: `Forska Blog`,
    siteUrl: `https://gatsbyforskamain.gatsbyjs.io/`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ]
};
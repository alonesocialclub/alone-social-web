module.exports = {
  siteMetadata: {
    title: `Alone Social`,
    image: `/img/og.jpeg`,
    siteUrl: `https://alone.social`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/drafts`],
      },
    }
  ],
}

module.exports = {
  siteMetadata: {
    title: `Développeur Web Freelance`,
    description: `Boostez votre activité d'indépendant grâce à un site qui vous correspond.`,
    author: `@achrafash`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Achraf ASH`,
        short_name: `Achraf ASH`,
        start_url: `/`,
        background_color: `#785486`,
        theme_color: `#785486`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}

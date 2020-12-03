module.exports = {

  siteMetadata: {
    title: 'Mayank Raghuvanshi | Portfolio',
    siteUrl: 'https://mayank-raghuvanshi.me',
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Architects Daughter','Source Sans Pro'
        ],
      }
    }

  ],

}

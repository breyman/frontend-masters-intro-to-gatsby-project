module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.example.com',
    title: 'Intro to Gatsby',
    description: 'Front End Masters Course Project',
    image:
      'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    'gatsby-transformer-remark',
  ],
};

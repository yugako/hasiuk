module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false
      }
    }
  ],
  siteMetadata: {
    title: "Home",
    titleTemplate: "%s · Hasiuk",
    description:
      "Hello! I’m George Hasiuk a self-taught & hard-working Frontend & Wordpress Developer with over 2 years work experience. If you want a blog, site for your company or even some Single Page Application, then you're in the right place.",
    image: '/favicon.ico',
    url: "https://hasiuk.web.app", // No trailing slash allowed!,
    twitterUsername: "yugako"
  },
}

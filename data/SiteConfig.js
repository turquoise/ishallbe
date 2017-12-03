
module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  siteTitle: "I Shall Be", // Site title.
  siteTitleAlt: "I Shall Be", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://i-shall-be.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "I Shall Be", // Website description used for RSS feeds/meta description tag.
  siteRss: "/", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: "Culture", // Default category for posts.
  userName: "Patricia Clarke", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "UK", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:
    "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Advanced User", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

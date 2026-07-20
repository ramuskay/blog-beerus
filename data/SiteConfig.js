const config = {
  siteTitle: 'Homelabeur blog',
  siteTitleShort: 'Homelabeur blog',
  siteTitleAlt: 'Homelabeur blog',
  siteLogo: '/favicon/favicon-256.png',
  siteUrl: 'https://homelabeur.eu',
  repo: 'https://github.com/ramuskay/blog-beerus',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'DD MMMM, YYYY',
  siteDescription:
    'Le blog d\'un passionné de sysadmin et de Devops !',
  siteRss: '/rss.xml',
  postDefaultCategoryID: 'Tech',
  userName: 'Homelabeur Inc.',
  userEmail: '',
  userTwitter: '',
  googleSiteVerification: "18MIKg3LXM5E_B-fq-2nGUfIsFItgDJlbt6lMVSGtUw",
  menuLinks: [
    {
      name: 'GitHub',
      link: 'https://github.com/ramuskay',
      type: 'external',
      mobile: true,
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff'
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config

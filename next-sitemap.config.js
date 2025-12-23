module.exports = {
  siteUrl: process.env.SITE_URL || 'https://yusufbahrudin.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pricamposcroche.com.br',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,

  // Customizar dados por URL
  transform: async (config, url) => {
    let priority = 0.5;
    let changefreq = 'monthly';

    if (url === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (url === '/produtos') {
      priority = 0.8;
      changefreq = 'daily';
    } else if (url === '/receitas') {
      priority = 0.6;
      changefreq = 'weekly';
    }

    return {
      loc: url,
      lastmod: new Date().toISOString(),
      changefreq,
      priority,
    };
  },
};

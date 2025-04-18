const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const fs = require('fs');
const path = require('path');

const sitemap = new SitemapStream({ hostname: 'https://your-portfolio.vercel.app' });

const writeStream = createWriteStream(path.resolve(__dirname, '../public/sitemap.xml'));
sitemap.pipe(writeStream);

// Add your pages here
sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });
sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/projects', changefreq: 'monthly', priority: 0.8 });

sitemap.end();

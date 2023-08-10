const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const links = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/uber', changefreq: 'monthly', priority: 0.8 },
  { url: '/spenden', changefreq: 'monthly', priority: 0.8 },
  { url: '/aktuelles', changefreq: 'monthly', priority: 0.8 },
  { url: '/kontakt', changefreq: 'monthly', priority: 0.8 },
  { url: '/mitglied', changefreq: 'monthly', priority: 0.8 },
  { url: '/impressum', changefreq: 'monthly', priority: 0.8 },
  { url: '/datenschutz', changefreq: 'monthly', priority: 0.8 },
  // Add more URLs
];

  // Create a stream to write to
  const stream = new SitemapStream( { hostname: 'https://dorfgemeinschaftlichtenberg.de' } )

  // Return a promise that resolves with your XML string
  return streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  )
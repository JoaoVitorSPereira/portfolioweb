const withFonts = require('next-fonts');

// module.exports = withFonts();

// PARA DEPLOY

module.exports = withFonts({
  basePath: '/portfolioweb',
  assetPrefix: '/portfolioweb',
});

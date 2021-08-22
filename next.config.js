const withFonts = require('next-fonts');

// module.exports = withImages();

// PARA DEPLOY

module.exports = withFonts({
  basePath: '/',
  assetPrefix: '/',
});

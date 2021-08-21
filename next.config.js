const withImages = require('next-images');

// module.exports = withImages();

// PARA DEPLOY

module.exports = withImages({
  basePath: '/portfolioweb',
  assetPrefix: '/portfolioweb',
});

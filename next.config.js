// const withImages = require('next-images');
const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
   [withPWA, {
      pwa: {
         dest: 'public',
         // disable: true,
      },
   }],
   // [withImages],
]);

// module.exports = withImages();

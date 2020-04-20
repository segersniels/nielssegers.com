require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const Dotenv = require('dotenv-webpack');
const path = require('path');

const webpack = (config) => {
  config.plugins = config.plugins || [];

  config.plugins = [
    ...config.plugins,
    new Dotenv({
      path: path.join(__dirname, '.env'),
      systemvars: true,
    }),
  ];

  return config;
};

module.exports = withPlugins([[optimizedImages]], {
  webpack,
});

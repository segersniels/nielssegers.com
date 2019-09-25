const path = require('path');
const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');
const optimizedImages = require('next-optimized-images');
const fonts = require('next-fonts');
const client = require('./sanity');

const webpack = config => {
  config.plugins = config.plugins || [];
  return config;
};

module.exports = withPlugins([[css], [fonts], [optimizedImages]], {
  webpack,
  target: 'serverless',
});

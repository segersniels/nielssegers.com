const sanityClient = require('@sanity/client');
const config = require('./studio/sanity.json')

module.exports = sanityClient({
    ...config.api,
    useCdn: true,
});

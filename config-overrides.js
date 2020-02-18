const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    components: path.join(__dirname, './src/components'),
    design: path.join(__dirname, './src/designSystem'),
    helpers: path.join(__dirname, './src/helpers'),
    assets: path.join(__dirname, './src/assets'),
  }),
);

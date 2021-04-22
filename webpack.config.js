const path = require('path');

module.exports = {
  mode: 'production',
  entry: './script/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};

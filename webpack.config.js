const webpack = require('webpack');
const path = require('path');
// var nodeExternals = require('webpack-node-externals');

// module.exports = {
//   target: 'web',
//   mode: 'development',
//   output: {
//     library: 'resumeChecker'
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'public'),
//     },
//     port: 9000
//   },
//   // plugins: [
//   //   new webpack.ProvidePlugin({
//   //     URL: ['url', 'URL'],
//   //     Buffer: ['buffer', 'Buffer'],
//   //     Uint8Array: ['buffer', 'Uint8Array']
//   //   })
//   // ]
//   devtool: 'inline-cheap-module-source-map',
//   optimization: {
//         minimize: false
//     }
// };

module.exports = {
  target: 'webworker',
  mode: 'development',
  entry: './src/alg.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'alg.js',
    library: 'alg'
  },
  devtool: 'inline-cheap-module-source-map',
  optimization: {
    minimize: false
  }
};
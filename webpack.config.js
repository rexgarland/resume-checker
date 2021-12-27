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
  target: 'node',
  mode: 'development',
  entry: './src/alg.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'alg.js',
    library: 'alg'
  },
  module: {
    rules: [
      {
        include: path.resolve(__dirname, "node_modules/canvas"),
        use: "null-loader"
      }
    ],
  },
  externals: {
    // canvas: "commonjs canvas", // Important (2)
    bufferutil: "commonjs bufferutil",
    "utf-8-validate": "commonjs utf-8-validate"
  },
  devtool: 'inline-cheap-module-source-map',
  optimization: {
    minimize: false
  }
};
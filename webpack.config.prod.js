var webpack = require('webpack');

module.exports = {
  entry: "./app/js/app.js",
  output: {
      path: __dirname + "/public",
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=react,presets[]=es2015'
      }
    ],
    postLoaders: [
      {
        loader: 'transform?envify'
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        minimize:true,
        compress: { warnings: false },
        output: {comments: false}
      }
    ),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};

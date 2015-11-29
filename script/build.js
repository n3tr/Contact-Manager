var webpack = require('webpack');
var config = require('../webpack.config.prod.js');

// Build Webpack
var compiler = webpack(config);
compiler.run(function(err, state){
  
});

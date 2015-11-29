// ---
// Compile and code build using webpack.
// A convenience way to build without install webpack globally

var webpack = require('webpack');
var config = require('../webpack.config.js');

// Create compiler from webpack config
var compiler = webpack(config);

// Start watching
compiler.watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
    // pass a number to set the polling interval
}, function(err, stats) {
  console.log("Compile done!");
});

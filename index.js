var miniharp = function(root) {
  var connect = require('connect');
  var serveStatic = require('serve-static');
  var mHarp = connect();
  mHarp.use(serveStatic(root));
  return mHarp;
}

module.exports = miniharp;

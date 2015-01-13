var miniHarpHandler = function(req, root) {

  var extname = path.extname(req.url);
  if (extname === ".html"){
    makeJade(root + req.url);
  }
}

var miniharp = function(root) {
  var connect = require('connect');
  var serveStatic = require('serve-static');
  var path = require('path');
  var makeJade = require('./lib/processor/jade');
  var mHarp = connect();
  mHarp.use(serveStatic(root));
  mHarp.use(makeJade(root));
  return mHarp;
}

module.exports = miniharp;

var miniharp = function(root) {
  var connect = require('connect');
  var serveStatic = require('serve-static');
  var path = require('path');
  var makeJade = require('./lib/processor/jade');
  var makeLess = require('./lib/processor/less');
  var rewriteURL = require('./lib/URLrewrite');
  var mHarp = connect();
  mHarp.use(rewriteURL());
  mHarp.use(serveStatic(root));
  mHarp.use(makeJade(root));
  mHarp.use(makeLess(root));
  return mHarp;
}

module.exports = miniharp;

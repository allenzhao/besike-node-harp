module.exports = makeJade;

function makeJade(root) {
  var fs = require('fs');
  var path = require('path');
  var jade = require('jade');
  return function (req, res, next) {
    if(path.extname(req.url) === '.html'){
      var jadeFile = root + req.url.split('.')[0]+'.jade';

      fs.readFile(jadeFile, {encoding: "utf8"}, function(err, data){
        if (err){
          next();
        } else{
          res.end(jade.render(data));
        }
      });
    } else{
      next();
    }
  }
}

#!/usr/bin/env node
var minimist = require('minimist');
var createMiniHarp = require('../index');
var app = createMiniHarp();
var parseArgs = minimist(process.argv.slice(2));
var port = parseArgs.port || 4000;
app.listen(port);
console.log("App start listening on port " + port);

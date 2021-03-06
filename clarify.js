/**
 * Copyright (c) 2012 Andreas Madsen
 * MIT License
 */

var chain = require('stack-chain');
var pathSeparator = require('path').sep;
var stringIndexOf = String.prototype.indexOf;

chain.filter.attach(function (error, frames) {
  return frames.filter(function (callSite) {
    var name = callSite && callSite.getFileName();
    return (name && stringIndexOf.call(name, sep) !== -1);
  });
});

'use strict';

var isNil  = require('is-nil');
var toPath = require('to-path');

module.exports = function (object, path) {

  if (!isNil(object)) {

    var paths  = toPath(path);
    var key    = paths[paths.length - 1];
    var parent = getParent(object, paths);

    if (!isNil(parent) && Object.prototype.hasOwnProperty.call(parent, key)) {
      delete parent[key];
    }
  }

  return object;
};


function getParent(object, paths) {

  var length = paths.length;

  if (length === 1) {
    return object;
  }

  var last  = length - 1;
  var index = 0;

  while (!isNil(object) && index < last) {
    object = object[paths[index++]];
  }

  return (index && index === last) ? object : null;
}

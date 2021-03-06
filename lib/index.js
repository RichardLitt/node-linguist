// Generated by CoffeeScript 1.7.1
var Linguist, exec, path;

exec = require('child_process').exec;

path = require('path');

Linguist = (function() {
  function Linguist() {}

  Linguist.prototype.detect = function(path, cb) {
    return exec(path.join(__dirname, '../bin', 'linguist.rb') + (" " + path), function(err, stdout, stderr) {
      var e, json;
      if (err) {
        return cb(err);
      }
      try {
        json = JSON.parse(stdout);
      } catch (_error) {
        e = _error;
        return cb(new Error('Not a valid JSON response'));
      }
      return cb(null, json);
    });
  };

  return Linguist;

})();

module.exports = Linguist;

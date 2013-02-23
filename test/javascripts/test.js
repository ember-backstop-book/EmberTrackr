(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name) {
    var path = expand(name, '.');

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.brunch = true;
})();

window.require.register("test/helpers-test", Function('exports, require, module', "require('app');\n\n//@ sourceURL=test/helpers-test.js"));
window.require.register("test/models/comment-test", Function('exports, require, module', "require('models/comment');\n\ndescribe('App.Comment', function() {\n\n  it('is defined', function() {\n    expect(App.Comment).to.exist;\n  });\n});\n//@ sourceURL=test/models/comment-test.js"));
window.require.register("test/models/ticket-test", Function('exports, require, module', "require('models/ticket');\n\ndescribe('App.Ticket', function() {\n\t\n\tit('is defined', function() {\n\t\texpect(App.Ticket).to.exist;\n\t});\n});\n//@ sourceURL=test/models/ticket-test.js"));
window.require.register("test/models/user-test", Function('exports, require, module', "require('models/user');\n\ndescribe('App.User', function() {\n  it('is defined', function() {\n    expect(App.User).to.exist;\n  }),\n\n  it('displayName', function() {\n    var user = App.User.createRecord({firstName: \"Tom\", lastName: \"Dale\"});\n    expect(user.get('displayName')).to.eql(\"Tom Dale\")\n  }),\n\n  describe('gravatarURL', function() {\n    it(\"with email\", function(){\n      var user = App.User.createRecord({email: \"tom@example.com\"})\n      expect(user.get('gravatarURL')).to.eql(\"http://www.gravatar.com/avatar/e4f7cd8905e896b04425b1d08411e9fb.jpg?s=80\")\n    }),\n    it(\"with blank email\", function(){\n      var user = App.User.createRecord({email: \"\"})\n      expect(user.get('gravatarURL')).to.eql(\"http://www.gravatar.com/avatar/00000000000000000000000000000000.jpg?s=80\")\n    }),\n    it(\"without email\", function(){\n      var user = App.User.createRecord()\n      expect(user.get('gravatarURL')).to.eql(\"http://www.gravatar.com/avatar/00000000000000000000000000000000.jpg?s=80\")\n    })\n  })\n});\n//@ sourceURL=test/models/user-test.js"));
window.require('test/helpers-test');
window.require('test/models/comment-test');
window.require('test/models/ticket-test');
window.require('test/models/user-test');

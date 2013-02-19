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

window.require.register("app", Function('exports, require, module', "App = Ember.Application.create();\n\nrequire('store');\nrequire('router');\n\nrequire('controllers/application');\n\nrequire('templates/application');\nrequire('templates/index');\n\n\n//@ sourceURL=app.js"));
window.require.register("controllers/application", Function('exports, require, module', "App.ApplicationController = Ember.Controller.extend({\n\n\tyear: function() {\n\t\tvar now = new Date;\n\t\treturn now.getFullYear();\n\t}.property()\n\t\n});\n//@ sourceURL=controllers/application.js"));
window.require.register("router", Function('exports, require, module', "App.Router.map(function() {\n  this.route('index', { path: '/'});\n});\n\n//@ sourceURL=router.js"));
window.require.register("store", Function('exports, require, module', "App.Store = DS.Store.extend({\n  revision: 11\n});\n\n\n//@ sourceURL=store.js"));
window.require.register("templates/application", Function('exports, require, module', "module.exports = Ember.TEMPLATES[module.id.replace('templates/','')] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\nthis.compilerInfo = [2,'>= 1.0.0-rc.3'];\nhelpers = helpers || Ember.Handlebars.helpers; data = data || {};\n  var buffer = '', hashTypes, escapeExpression=this.escapeExpression;\n\n\n  data.buffer.push(\"<header class=\\\"header\\\">\\n\t<h1>EmberTrackr</h1>\\n</header>\\n\\n\");\n  hashTypes = {};\n  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, \"outlet\", {hash:{},contexts:[depth0],types:[\"ID\"],hashTypes:hashTypes,data:data})));\n  data.buffer.push(\"\\n\\n<footer class=\\\"footer\\\">\\n\t<div class=\\\"container\\\">\\n\t\t<p>Copyright © \");\n  hashTypes = {};\n  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, \"year\", {hash:{},contexts:[depth0],types:[\"ID\"],hashTypes:hashTypes,data:data})));\n  data.buffer.push(\" MyCompany</p>\\n\t</div>\\n</footer>\");\n  return buffer;\n  \n});\n//@ sourceURL=templates/application.hbs"));
window.require.register("templates/index", Function('exports, require, module', "module.exports = Ember.TEMPLATES[module.id.replace('templates/','')] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\nthis.compilerInfo = [2,'>= 1.0.0-rc.3'];\nhelpers = helpers || Ember.Handlebars.helpers; data = data || {};\n  var buffer = '';\n\n\n  return buffer;\n  \n});\n//@ sourceURL=templates/index.hbs"));

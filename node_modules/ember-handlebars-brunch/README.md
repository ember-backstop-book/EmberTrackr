## Ember Handlebars for Brunch

This plugin adds [Ember Handlebars](http://emberjs.com/) template pre-compiling to
[brunch](http://brunch.io), utilizing the latest and greatest EmberJS build (compatible with the new ember v3 router).

## Usage

Add `"ember-handlebars-brunch": "git+ssh://git@github.com:icholy/ember-handlebars-brunch.git"`. to `package.json` of your brunch app.

set the templates compiler in `config.coffee` set `precompile` to `true` if you want to enable it

    templates:
      precompile: true  # default is false
      root: 'templates/'
      defaultExtension: 'hbs'
      joinTo: 'javascripts/app.js' : /^app/

place your handlebars templates in the `app/templates/` directory and give them a `.hbs` extension

	app/
	  templates/
      application.hbs
	    my_template.hbs
      subdir/
        another_template.hbs

the template name will be the path without the `root`

	App.MyView = Ember.View.extend({
		templateName: 'my_template'
	});

Also accessible through `Ember.TEMPLATES`

    var anotherTemplate = Ember.TEMPLATES['subdir/another_template'];

If you wish to `require` the template, you have to use the full path

    require('templates/application');

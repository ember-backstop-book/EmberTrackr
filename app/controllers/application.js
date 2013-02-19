App.ApplicationController = Ember.Controller.extend({

	year: function() {
		var now = new Date;
		return now.getFullYear();
	}.property()
	
});
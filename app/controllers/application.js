App.ApplicationController = Ember.Controller.extend({

	currentYear: function() {
		var now = new Date;
		return now.getFullYear();
	}.property()
	
});
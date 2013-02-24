App.ApplicationController = Ember.Controller.extend({

	currentYear: function() {
		var now = new Date;
		return now.getFullYear();
	}.property(),

  currentUser: function() {
    var userId  = $.cookie("emberTrackr");
    var user    = App.User.find(userId)
    if(userId && user.get('isLoaded')){
      return user;
    }
  }.property()

});
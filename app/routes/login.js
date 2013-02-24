App.LoginRoute = Ember.Route.extend({
  model: function() {
    return App.User.find();
  },
  redirect: function(){
    if(this.controllerFor("application").get("currentUser")){
      this.transitionTo("index");
    }
  },
  events: {
    loginUser: function(userId) {
      $.cookie("emberTrackr", userId);
      this.controllerFor("application").notifyPropertyChange("currentUser");
      this.transitionTo("index");
    }
  }
});
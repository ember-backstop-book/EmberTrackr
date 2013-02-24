App.ApplicationRoute = Ember.Route.extend({
  events: {
    logout: function(){
      $.removeCookie("emberTrackr");
      this.controllerFor("application").notifyPropertyChange("currentUser");
      this.transitionTo("index");
    }
  }
})
require('models/ticket');

App.TicketsRoute = Ember.Route.extend({
  model: function() {
    return App.Ticket.find();
  },

  setupController: function(model, controller) {
    this.controllerFor("users").set("content", App.User.find());
  },

  redirect: function() {
    if(!this.controllerFor("application").get("currentUser")){
      this.transitionTo("login");
    }
  }
});
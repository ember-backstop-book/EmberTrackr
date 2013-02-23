require('models/ticket');

App.TicketsRoute = Ember.Route.extend({
  model: function() {
    return App.Ticket.find();
  }
});
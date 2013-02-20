require('models/ticket');

App.TicketsIndexRoute = Ember.Route.extend({
	model: function() {
		return App.Ticket.find();
	}
});
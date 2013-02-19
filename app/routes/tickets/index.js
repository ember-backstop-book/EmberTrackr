require('models/ticket');

App.TicketsIndexRoute = Ember.Route.extend({
	model: function() {
		console.log('a');
		return App.Ticket.find();
	}
});
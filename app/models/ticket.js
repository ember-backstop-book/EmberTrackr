App.Ticket = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	status: DS.attr('string'),
	createdAt: DS.attr('date')
});

App.Ticket.FIXTURES = [
	{ id: 1, title: 'Create a User model', description: 'Users create tickets and are assigned to tickets.' },
	{ id: 2, title: 'Allow ticket creation' }
];
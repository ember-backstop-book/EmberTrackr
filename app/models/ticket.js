App.Ticket = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	status: DS.attr('string'),  // new | open | resolved
	createdAt: DS.attr('date'),
    
    reportedBy: DS.belongsTo('App.User')
});

App.Ticket.FIXTURES = [
	{ id: 1, title: 'Create a User model', description: 'Users create tickets and are assigned to tickets.', status: 'new', reportedBy: 2 },
	{ id: 2, title: 'Allow ticket creation', status: 'resolved', reportedBy: 1 }
];
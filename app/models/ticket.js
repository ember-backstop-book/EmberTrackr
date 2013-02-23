App.Ticket = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	status: DS.attr('string'),  // New | Open | Resolved
	createdAt: DS.attr('date'),
    
    reportedBy: DS.belongsTo('App.User')
});

App.loadFixtureData(App.Ticket, [
    { id: 1, title: 'Create a User model', description: 'Users create tickets and are assigned to tickets.', status: 'New', reportedBy: 2 },
    { id: 2, title: 'Allow ticket creation', status: 'Resolved', reportedBy: 1 }
]);
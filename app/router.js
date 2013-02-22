App.Router.map(function() {
	this.route('index', { path: '/'});
	this.resource('tickets', function() {
		this.route('show', { path: '/:ticket_id' });
		this.route('new', { path: '/new' });
	});
});

require('routes/tickets/index');
require('routes/tickets/new');
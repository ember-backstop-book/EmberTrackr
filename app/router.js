App.Router.map(function() {
	this.route('index', { path: '/'});
	this.resource('tickets', function() {
		this.route('show', { path: '/:ticket_id' });
	});
});

require('routes/tickets/index');
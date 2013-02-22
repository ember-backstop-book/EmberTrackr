App.Router.map(function() {
	this.route('index', { path: '/'});
	this.resource('tickets', function() {
		this.route('new', { path: '/new' });
		this.route('show', { path: '/:ticket_id' });
		this.route('edit', { path: '/:ticket_id/edit' });
	});
    this.resource('users', function() {
		this.route('show', { path: '/:user_id' });
    });
});

require('routes/tickets/index');
require('routes/tickets/new');
require('routes/tickets/edit');
require('routes/users/index');
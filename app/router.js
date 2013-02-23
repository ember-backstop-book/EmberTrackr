App.Router.map(function() {
  this.route('index', { path: '/'});
  this.resource('tickets', function() {
    this.route('new', { path: '/new' });
    this.route('show', { path: '/:ticket_id' });
    this.route('edit', { path: '/:ticket_id/edit' });
  });
  this.resource('users', function() {
    this.route('new', { path: '/new' });
    this.route('show', { path: '/:user_id' });
    this.route('edit', { path: '/:user_id/edit' });
  });
});

require('routes/tickets');
require('routes/tickets/new');
require('routes/tickets/edit');
require('routes/users');
require('routes/users/new');
require('routes/users/edit');

App = Ember.Application.create();

require('store');
require('router');

require('controllers/application');
require('controllers/users');
require('controllers/ticketsEdit');
require('controllers/ticketsNew');

require('templates/application');
require('templates/index');
require('templates/tickets');
require('templates/tickets/index');
require('templates/tickets/show');
require('templates/tickets/new');
require('templates/tickets/edit');
require('templates/users');
require('templates/users/index');
require('templates/users/show');
require('templates/users/new');
require('templates/users/edit');

require('views/applicationView');
require('views/tickets');
require('views/users');
require('views/ticketStatus');
require('views/userSelect');

require('models/ticket');

App.TicketsEditRoute = Ember.Route.extend({
    
    model: function(params) {
        return App.Ticket.find(params.ticket_id);
	},
    
    events: {
        save: function() {
            var transaction = this.get('store.defaultTransaction');
            
            // Save the transaction
            transaction.commit();
            
            // Transition back to the ticket page
            this.transitionTo('tickets.show', this.modelFor('tickets.edit'));
        },
        
        cancel: function() {
            var transaction = this.get('store.defaultTransaction');
            
            // Discard any changes in the transaction
            transaction.rollback();
            
            // Transition back to the ticket page
            this.transitionTo('tickets.show', this.modelFor('tickets.edit'));
        }
    }
});

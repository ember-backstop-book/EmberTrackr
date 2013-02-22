require('models/user');

App.UsersEditRoute = Ember.Route.extend({
    
    model: function(params) {
        return App.User.find(params.user_id);
	},
    
    events: {
        save: function() {
            var transaction = this.get('store.defaultTransaction');
            
            // Save the transaction
            transaction.commit();
            
            // Transition back to the ticket page
            this.transitionTo('users.show', this.modelFor('users.edit'));
        },
        
        cancel: function() {
            var transaction = this.get('store.defaultTransaction');
            
            // Discard any changes in the transaction
            transaction.rollback();
            
            // Transition back to the ticket page
            this.transitionTo('users.show', this.modelFor('users.edit'));
        }
    }
});

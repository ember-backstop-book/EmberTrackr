require('models/user');

App.UsersNewRoute = Ember.Route.extend({
    
    model: function() {
        return App.User.createRecord();
	},
    
    events: {
        save: function() {
            var transaction = this.get('store.defaultTransaction');
            
            // Save the transaction
            transaction.commit();
            
            // Transition back to the ticket page
            this.transitionTo('users.show', this.modelFor('users.new'));
        },
        
        cancel: function() {
            var transaction = this.get('store.defaultTransaction');
            
            // Discard any changes in the transaction
            transaction.rollback();
            
            // Transition back to the ticket page
            this.transitionTo('users.show', this.modelFor('users.new'));
        }
    }
});

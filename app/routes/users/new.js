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
            
            // Show the newly created user 
            this.transitionTo('users.show', this.modelFor('users.new'));
        },
        
        cancel: function() {
            var transaction = this.get('store.defaultTransaction');
            
            // Discard any changes in the transaction
            transaction.rollback();
            
            // Transition back to the user page
            this.transitionTo('users.index');
        }
    }
});

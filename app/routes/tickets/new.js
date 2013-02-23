require('models/ticket');

App.TicketsNewRoute = Ember.Route.extend({

  model: function() {
    return App.Ticket.createRecord();
  },

  events: {
    save: function() {
      var transaction = this.get('store.defaultTransaction');

      // Save the transaction
      transaction.commit();

      // Show the newly created ticket
      this.transitionTo('tickets.show', this.modelFor('tickets.new'));
    },

    cancel: function() {
      var transaction = this.get('store.defaultTransaction');

      // Discard any changes in the transaction
      transaction.rollback();

      // Transition back to the ticket list
      this.transitionTo('tickets.index');
    }
  }
});
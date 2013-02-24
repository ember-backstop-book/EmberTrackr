require('models/comment');

App.TicketsShowRoute = Ember.Route.extend({
  events: {
    createComment: function(body, user) {
      var ticket = this.modelFor('tickets.show');
      
      // Create a new comment
      ticket.get('comments').createRecord({
        body: body,
        user: user,
        created: (new Date())
      });
    }
  }
});

require('models/user');

App.UsersRoute = Ember.Route.extend({
  model: function() {
    return App.User.find();
  }
});
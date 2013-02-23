App.User = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('email'),

  displayName: function() {
    return '%@ %@'.fmt(this.get('firstName'), this.get('lastName'));
  }.property('firstName', 'lastName'),

  gravatarURL: function() {
    var email = this.get('email'),
        computedMD5;

    if(Ember.isEmpty(email)) {
      computedMD5 = "00000000000000000000000000000000";
    } else {
      computedMD5 = md5(email);
    }

    return 'http://www.gravatar.com/avatar/%@.jpg?s=80'.fmt(computedMD5);
  }.property('email')
});

App.loadFixtureData(App.User, [
  { id: 1, firstName: 'Tom', lastName: 'Dale', email: 'tom@tomdale.net' },
  { id: 2, firstName: 'Yehuda', lastName: 'Katz', email: 'wycats@gmail.com' },
  { id: 3, firstName: 'Peter', lastName: 'Wagenet', email: 'peter.wagenet@gmail.com' }
]);

App.User = DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
    
    displayName: function() {
        return '%@ %@'.fmt(this.get('firstName'), this.get('lastName'));
    }.property('firstName', 'lastName')
});

App.User.FIXTURES = [
    { id: 1, firstName: 'Tom', lastName: 'Dale' },
    { id: 2, firstName: 'Yehuda', lastName: 'Katz' }
];

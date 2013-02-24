App.CommentField = Ember.View.extend({
  tagName: "form",
  submit: function(event) {
    event.preventDefault();
    
    // Send the event to the controller to be handled
    this.get('controller').send('createComment', this.get("body"), this.get("user"));
    
    // Reset the properties
    this.set('body', null);
  }
});

App.CommentField = Ember.View.extend({
  tagName: "form",
  submit: function(event) {
    event.preventDefault();
    
    // Send the event to the controller to be handled
    this.get('controller').send('createComment', 
      this.get("body"), 
      this.get("controller.controllers.application.currentUser")
    );
    
    // Reset the properties
    this.set('body', null);
  }
});

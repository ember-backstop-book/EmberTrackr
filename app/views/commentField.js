// Review: Not sure if this should be a view thing?

App.CommentField = Ember.View.extend({
  tagName: "form",
  submit: function(event) {
    event.preventDefault()
    var comment = this.get('context.comments').createRecord({
      body: this.get("body"),
      user: this.get("user"),
      created: (new Date())
    })
    // comment.get("transaction").commit()
    this.setProperties({
      // user: null,
      body: null
    })
  }
})
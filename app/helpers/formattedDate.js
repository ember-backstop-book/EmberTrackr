Ember.Handlebars.registerBoundHelper("formattedDate", function(date) {
  if(!date) { return ""}
  return date.toLocaleTimeString()
})
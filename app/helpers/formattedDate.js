Ember.Handlebars.registerBoundHelper("formattedDate", function(date) {
  if(!date) { return ""}
  // TODO moment.js?
  return date.toLocaleTimeString()
})
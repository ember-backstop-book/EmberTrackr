App.Comment = DS.Model.extend({
  ticket:   DS.belongsTo("App.Ticket"),
  user:     DS.belongsTo("App.User"),
  body:     DS.attr("string"),
  created:  DS.attr("date", {
    defaultValue: (new Date())
  })
})

App.loadFixtureData(App.Comment, [
  { id: 1, body: 'Okely Dokely', user: 1, ticket: 1 },
  { id: 2, body: "Let's do this", user: 2, ticket: 2 }
]);
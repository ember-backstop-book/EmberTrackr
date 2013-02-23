require('models/user');

describe('App.User', function() {
  it('is defined', function() {
    expect(App.User).to.exist;
  }),

  it('displayName', function() {
    var user = App.User.createRecord({firstName: "Tom", lastName: "Dale"});
    expect(user.get('displayName')).to.eql("Tom Dale")
  }),

  describe('gravatarURL', function() {
    it("with email", function(){
      var user = App.User.createRecord({email: "tom@example.com"})
      expect(user.get('gravatarURL')).to.eql("http://www.gravatar.com/avatar/e4f7cd8905e896b04425b1d08411e9fb.jpg?s=80")
    }),
    it("with blank email", function(){
      var user = App.User.createRecord({email: ""})
      expect(user.get('gravatarURL')).to.eql("http://www.gravatar.com/avatar/00000000000000000000000000000000.jpg?s=80")
    }),
    it("without email", function(){
      var user = App.User.createRecord()
      expect(user.get('gravatarURL')).to.eql("http://www.gravatar.com/avatar/00000000000000000000000000000000.jpg?s=80")
    })
  })
});
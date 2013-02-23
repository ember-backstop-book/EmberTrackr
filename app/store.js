/**
    Patch the fixture serializer to properly serialize values. Normally
    this would not be necessary if we were using the RESTAdapter and it's serializer.
*/
DS.FixtureSerializer.reopen({
    addAttribute: function(hash, key, value) {
        hash[key] = value;
    },
    
    addId: function(hash, key, id) {
        hash[key] = id;
    },
    
    addBelongsTo: function(hash, record, key, relationship) {
        var id = Ember.get(record, relationship.key+'.id');
        if (!Ember.isNone(id)) { hash[key] = id; }
    }
});

/**
    Patch the fixture serializer to properly generate ids. Normally this would
    not be necessary if we were using the RESTAdapter and it's serializer.
*/
DS.FixtureAdapter.reopen({
    generateIdForRecord: function(store, record) {
        return Ember.guidFor(record).replace(/^ember/, '');
    }
});

/**
    Normal fixtures aren't very desirable for this app. Fixture data is reloaded
    each time `find` is invoked for a record. Effectively overriding and previous
    changes the user may have made.
    
    Instead we'll just load the data like it had come from the server.
*/
App.loadFixtureData = function(type, data) {
    // Falsify an empty fixture array.
    type.FIXTURES = [];
    
    // Wait to load the fixture data until after the app has booted.
    Ember.onLoad('application', function() {
        var store = Ember.get(DS, 'defaultStore'),
            adapter = store.adapterForType(type);

        if(adapter) { adapter.didFindMany(store, type, data); }
    });
};

/**
    Define the store class. The router will instantiate an instance for us.
 */
App.Store = DS.Store.extend({
	revision: 11,
	adapter: DS.FixtureAdapter
});


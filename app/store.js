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
    Define the store class. The router will instantiate an instance for us.
 */
App.Store = DS.Store.extend({
	revision: 11,
	adapter: DS.FixtureAdapter
});


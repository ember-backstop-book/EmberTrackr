// REVIEW: It'd be nice to get a review on this. We often do this in our app, but I'm not sure
//         if it's proper.
App.UserSelect = Ember.Select.extend({
    optionValuePath: 'content.id',
    optionLabelPath: 'content.displayName'
});

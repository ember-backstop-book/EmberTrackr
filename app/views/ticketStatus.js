// REVIEW: It'd be nice to get a review on this. We often do this in our app, but I'm not sure
//         if it's proper.
App.TicketStatus = Ember.Select.extend({
    content: ['New', 'Open', 'Resolved'],
    optionValuePath: 'content',
    optionLabelPath: 'content'
});

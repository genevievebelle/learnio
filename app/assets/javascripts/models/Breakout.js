var Breakout = Backbone.Model.extend({
  initialize: function(){
  },
    defaults: function(){
      return {
        id: 0,
        title: 'Default title',
        sum_tip_votes: 0
      }
    }
});

var BreakoutCollection = Backbone.Collection.extend({
  comparator: function(item) {
    return -item.get('sum_tip_votes');
  },
  model: Breakout,
  url: '/breakouts'
})

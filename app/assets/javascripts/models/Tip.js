var Tip = Backbone.Model.extend({
  initialize: function(){
  },
    defaults: {
      id: 0,
      content: 'Default content',
      vote_count: 0
    }
});

var TipCollection = Backbone.Collection.extend({
  comparator: function(item) {
    return -item.get('vote_count');
  },
  model : Tip,
  url: '/tips'
});


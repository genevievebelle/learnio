var Tip = Backbone.Model.extend({
  initialize: function(){
    alert("Making new tip!");
  },
    defaults: {
      id: 0,
      content: 'Default content',
      voteCount: 0
    }
});

var TipsCollection = Backbone.Collection.extend({
  model : Tip,
  url: '/tips'
});


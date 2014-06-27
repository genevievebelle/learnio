var TipView = Backbone.View.extend({
  tagName: "div",
  className: "tip",

  render: function() {
    this.el.innerHTML = this.model.get("content");
    return this;
  }
});

var TipsCollectionView = Backbone.View.extend({
  el: '#loose-tips',

  initialize : function() {
    var that = this;

    var coll = new TipsCollection();
    coll.fetch({success: function(){that.render();}});

  },

  render : function() {
    this.$el.html('Tips');
    return this
  }
});


tip = new Tip ({
  content: "I am a tippy tip"
});

tip.set({content : 'New content'})
alert( tip.get('content') );

tips = new TipsCollection();
tips.fetch({ data: {breakout: 'none'} });

tips.save

tipView = new TipView ({
  model: tip
});

var tipV = tipView.render().el





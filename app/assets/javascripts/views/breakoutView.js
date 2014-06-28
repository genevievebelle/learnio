var BreakoutView = Backbone.View.extend({
  tagName: "div",
  className: "breakout",

  render: function() {
    this.el.innerHTML = this.model.get("title") + ", total number of votes" + this.model.get("sum_tip_votes");
    this.el.id = this.model.get("id");

    return this;
  }
});

var BreakoutCollectionView = Backbone.CollectionView.extend( {
  modelView : BreakoutView
} );


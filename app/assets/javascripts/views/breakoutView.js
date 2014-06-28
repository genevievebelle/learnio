var BreakoutView = Backbone.View.extend({
  tagName: "div",
  className: "breakout",

  render: function() {
    this.el.innerHTML = this.model.get("title") + ", total number of votes" + this.model.get("sum_tip_votes");
    this.el.id = this.model.get("id");

    return this;
  }
});

var UpdatingBreakoutView = BreakoutView.extend({
  initialize : function(options) {
    this.render = _.bind(this.render, this);
    this.model.bind('change', this.render);
  }
});

var BreakoutCollectionView = Backbone.View.extend({
  initialize : function() {
    _(this).bindAll('add', 'remove');
    this._breakoutViews = [];
    this.collection.each(this.add);
    this.collection.bind('add', this.add);
    this.collection.bind('remove', this.remove);
  },

  add : function(breakout) {
    var breakoutView = new UpdatingBreakoutView({
        model : breakout,
        tagName : 'li'
    });

    this._breakoutViews.push(breakoutView);

    if (this._rendered) {
      $(this.el).append(breakoutView.render().el);
    }

  },

  remove : function(model) {
    var viewToRemove = _(this._breakoutViews).select(function(v) { return v.model === model; })[0];
    this._breakoutViews = _(this._breakoutViews).without(viewToRemove);

    if (this._rendered) $(viewToRemove.el).remove();
  },


  render : function() {
    this._rendered = true;

    $(this.el).empty();

    _(this._breakoutViews).each(function(dv) {
      this.$('ul.breakout-list').append(dv.render().el);
    });

    return this;
  },

});


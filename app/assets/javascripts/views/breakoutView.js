var BreakoutView = Backbone.View.extend({
  tagName: "div",
  className: "breakout-container",

  render: function() {
    this.el.id = this.model.get("id");
    this.el.innerHTML = "<li class='breakout-columns \
        tips-container' dataid="+this.model.attributes.id+">"+
        "<div class='column-header'>"+this.model.get("title")+
        "<br>total votes " + this.model.get("sum_tip_votes")+"</div>"+
        "<ul class='tips' groupid="+this.el.id+"></ul></li>"

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
    this.collection.model.bind("change", this.render);
    this.collection.each(this.add);
    this.collection.bind('add', this.add);
    this.collection.bind('remove', this.remove);
    this.collection.bind('reset', this.render);
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
    this.$('.breakout-container').empty();
    _(this._breakoutViews).each(function(bv) {
      this.$('.breakout-container').append(bv.render().el.innerHTML);
      });
    setupDroppable();

    return this;
  },

});


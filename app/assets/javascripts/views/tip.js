var TipView = Backbone.View.extend({
  tagName: "div",
  className: "tip",

  render: function() {
    this.el.innerHTML = this.model.get("content") + ", votes: " + this.model.get("vote_count");
    this.el.id = this.model.get("id");

    return this;
  }
});

var UpdatingTipView = TipView.extend({
  initialize : function(options) {
    this.render = _.bind(this.render, this);
    this.model.bind('change', this.render);
  }
});

var TipCollectionView = Backbone.View.extend({
  initialize : function() {
    _(this).bindAll('add', 'remove');
    this._tipViews = [];
    this.collection.each(this.add);
    this.collection.bind('add', this.add);
    this.collection.bind('remove', this.remove);
    this.collection.bind("reset", _.bind(this.render, this));
  },

  add : function(tip) {
    var tipView = new UpdatingTipView({
        model : tip,
        tagName : 'li'
    });

    this._tipViews.push(tipView);

    if (this._rendered) {
      $(this.el).append(tipView.render().el);
    }

  },

  remove : function(model) {
    var viewToRemove = _(this._tipViews).select(function(v) { return v.model === model; })[0];
    this._tipViews = _(this._tipViews).without(viewToRemove);

    if (this._rendered) $(viewToRemove.el).remove();
  },


  render : function() {
    this._rendered = true;

    $(this.el).empty();

    _(this._tipViews).each(function(dv) {
      this.$('ul.loose-tips').append(dv.render().el);
    });

    return this;
  },

});

var destroyView = function(view) {
    Backbone.View.prototype.remove.call(view);
    view.unbind()
}

var createViewObjectAndView = function(model, dom) {
  var view = new TipCollectionView({ collection: model, el : dom});
  view.render();
  return view
}













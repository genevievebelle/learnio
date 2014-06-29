var TipView = Backbone.View.extend({
  tagName: "div",
  className: "tip",

  render: function() {
    this.el.innerHTML = this.model.get("content") +
     "<br>votes: " + this.model.get("vote_count");
    this.el.id = this.model.get("id");
    $(this.el).draggable( {
      containment: 'document',
      snapMode: 'inner'
      } );
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
    this.collection.bind('reset', this.render);
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

  render : function(id) {
    this._rendered = true;
    var dom = $("ul[groupid="+id+"]");
    $(this.el).empty();

    _(this._tipViews).each(function(dv) {
      this.$(dom).append(dv.render().el);
    });

    return this;
  },

});

var destroyView = function(view) {
    Backbone.View.prototype.remove.call(view);
    view.unbind()
}















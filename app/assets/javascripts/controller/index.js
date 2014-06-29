LOOSETIPS = 0

var getBreakoutColumns = function() {
  var breakoutColumns = new BreakoutCollection();
  breakoutColumns.fetch().done(function() { resetBreakoutColumnsView(breakoutColumns); });
};

var resetBreakoutColumnsView = function(breakoutColumns) {
  var breakoutColumnsView = new BreakoutCollectionView({ collection: breakoutColumns});
  breakoutColumnsView.render();
  populateColumns(breakoutColumnsView._breakoutViews);
};

var populateColumns = function(views) {
  _(views).each(function(view) { getTips(view.model.attributes.id); });
}

var getTips = function(id) {
  var tips = new TipCollection();
  tips.fetch({data: {breakout: id}}).done( function() { resetTipsView(id, tips); });
};

var resetTipsView = function(id, tips) {
  var view = new TipCollectionView( { collection: tips});
  view.render(id);
};

getTips(LOOSETIPS)

getBreakoutColumns();















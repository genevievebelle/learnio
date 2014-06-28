
var getLooseTips = function() {
  looseTips = new TipCollection();
  looseTipsView = new TipCollectionView({ collection: looseTips, el : $('ul.loose-tips')[0]});
  looseTips.fetch({ data: {breakout: 'none'} } ).done(function() { looseTipsView.render(); });
};

var resetLooseTipsView = function() {
  looseTipsView = new TipCollectionView({ collection: looseTips, el : $('ul.loose-tips')[0]});
  looseTipsView.render();
};

getLooseTips();

var getBreakoutColumns = function() {
  breakoutColumns = new BreakoutCollection();
  breakoutColumnsView = new BreakoutCollectionView({ collection: breakoutColumns, el : $('ul.breakout-list')[0]});
  breakoutColumns.fetch().done(function() { breakoutColumnsView.render(); });
};

var resetBreakoutColumnsView = function() {
  breakoutColumnsView = new BreakoutCollectionView({ collection: breakoutColumns, el : $('ul.breakout-list')[0]});
  breakoutColumnsView.render();
};

getBreakoutColumns();








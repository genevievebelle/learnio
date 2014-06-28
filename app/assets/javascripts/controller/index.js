
var getLooseTips = function() {
  var looseTips = new TipCollection();
  var looseTipsView = new TipCollectionView({ collection: looseTips });
  looseTips.fetch({ data: {breakout: 'none'} } ).done(function() {
  resetLooseTipsView(looseTips);});
};

var resetLooseTipsView = function(tips) {
  var dom = $('ul.loose-tips')[0];
  var looseTipsView = new TipCollectionView({ collection: tips, el : dom});
  looseTipsView.render(dom);
};

getLooseTips();

var getBreakoutColumns = function() {
  breakoutColumns = new BreakoutCollection();
  breakoutColumnsView = new BreakoutCollectionView({ collection: breakoutColumns });
  breakoutColumns.fetch().done(function() { resetBreakoutColumnsView(); });
};

var resetBreakoutColumnsView = function() {
  breakoutColumnsView = new BreakoutCollectionView({ collection: breakoutColumns, el : $('ul.breakout-list')[0]});
  breakoutColumnsView.render();
};

getBreakoutColumns();

var getBreakoutTips = function(id) {
  var breakoutTips = new TipCollection();
  var breakoutTipsView = new TipCollectionView({collection: breakoutTips});
  breakoutTips.fetch({ data: {breakout: id} } ).done( function() {
    resetBreakoutTipsView(id, breakoutTips);
  });
};

var resetBreakoutTipsView = function(id, tips) {
  // var dom = $('.breakout-columns').find("#"+id)[0];
  var dom = $("ul[groupid="+id+"]");
  var view = new TipCollectionView( {
    collection: tips,
    el : dom
  });
  view.render(dom);
};






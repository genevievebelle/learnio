var getLooseTips = function() {
  looseTips = new TipCollection();
  looseTipsView = new TipCollectionView({ collection: looseTips, el : $('ul.loose-tips')[0]});
  looseTips.fetch({ data: {breakout: 'none'} } ).done(function() { looseTipsView.render(); });
  looseTips.save
}

var resetLooseTipsView = function() {
  looseTipsView = new TipCollectionView({ collection: looseTips, el : $('ul.loose-tips')[0]});
  looseTipsView.render();
}

getLooseTips()






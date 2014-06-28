var getAndViewLooseTips = function() {
  tips = new TipCollection();
  tips.fetch({ data: {breakout: 'none'} }).then(function() {
    tips.save
    tipCollectionView = createViewObjectAndView(tips, $('ul.loose-tips')[0] );
    tips.models[0].set({content: 'different'});
  });
  return tips
}


getAndViewLooseTips()


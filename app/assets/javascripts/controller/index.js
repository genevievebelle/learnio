




bc = new BreakoutCollection()
bc.fetch().done(function() {
  bcv = new BreakoutCollectionView({el : $( ".breakout-list" ), collection : bc});}
);



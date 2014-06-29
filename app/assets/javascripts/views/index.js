$( setupDroppable );

function setupDroppable() {

  $('.tips-container').droppable( {
    drop: handleDropEvent,
    tolerance: "fit"
  } );

}

var handleDropEvent = function( event, ui ) {
  var id = ui.draggable.attr('id');
  var from = $(ui.draggable).parent().attr('groupid');
  var to = $(this).attr('dataid')
  $(ui.draggable).parent().attr('groupid', to);
  // alert( 'The square with ID "' + ui.draggable.attr('id') + '" was dropped onto me!' );
  console.log('move tip '+ id+' from breakout '+ from +' to breakout id ' + to);
  if (from != to) {
    tip = columns[from].get(id)
    tip.set({breakout_id: to})

    columns[from].remove(tip);
    columns[to].add(tip);

    tip.save()

  }
};


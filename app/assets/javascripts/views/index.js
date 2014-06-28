$( setupDroppable );

function setupDroppable() {

  $('.tips-container').droppable( {
    drop: handleDropEvent,
    tolerance: "fit"
  } );

}

var handleDropEvent = function( event, ui ) {
  // alert( 'The square with ID "' + ui.draggable.attr('id') + '" was dropped onto me!' );
  alert($(this).attr('dataid'));
};

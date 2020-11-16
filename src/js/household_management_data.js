
var t = TrelloPowerUp.iframe();

var cards = t.arg('cards')

t.render(function(){
    // this function we be called once on initial load
    // and then called each time something changes that
    // you might want to react to, such as new data being
    // stored with t.set()
    cards.then(function(card){
        console.log(card);
        return 1;
      })

  });
  
  // Important! If you are using the overlay, you should implement
  // the following two methods to ensure that closing the overlay
  // is simple and consistent for the Trello user
  
  // close overlay if user clicks outside our content
  document.addEventListener('click', function(e) {
    if(e.target.tagName == 'BODY') {
      t.closeOverlay().done();
    }
  });
  
  // close overlay if user presses escape key
  document.addEventListener('keyup', function(e) {
    if(e.keyCode == 27) {
      t.closeOverlay().done();
    }
  });
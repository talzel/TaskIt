
var t = TrelloPowerUp.iframe();

var text = t.arg('text')
console.log(text)

// var cards = t.arg('cards')
// cards.then(function(card){
//     console.log(card);
//     return 1;
//   })
// t.card('all').then(function(card){
//   console.log(card);
//   return 1;
// })

var lists = t.lists('cards')
console.log(lists)
// console.log(lists[0])

console.log(text)

// console.log(t.card('all'))

var cards = t.cards('id', 'name', 'members', 'labels')
console.log(cards)
console.log(cards[20])
console.log(text)


// t.render(function(){
//     // this function we be called once on initial load
//     // and then called each time something changes that
//     // you might want to react to, such as new data being
//     // stored with t.set()
//     cards.then(function(card){
//         console.log(card);
//         return 1;
//       })

//   });
  
  // Important! If you are using the overlay, you should implement
  // the following two methods to ensure that closing the overlay
  // is simple and consistent for the Trello user
  
  // close overlay if user clicks outside our content
//   document.addEventListener('click', function(e) {
//     if(e.target.tagName == 'BODY') {
//       t.closeOverlay().done();
//     }
//   });
  
//   // close overlay if user presses escape key
//   document.addEventListener('keyup', function(e) {
//     if(e.keyCode == 27) {
//       t.closeOverlay().done();
//     }
//   });
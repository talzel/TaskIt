
var t = TrelloPowerUp.iframe();

// var text = t.arg('text')
// console.log(text)

console.log('-----------------------------------')
var lists = t.lists('all')
console.log(lists)
console.log('-----------------------------------')

// lists.then(function(l){
//   console.log('~~')
//   console.log(l)
//   console.log('~~')
// })


// console.log('-----------------------------------')
var lists = t.lists('all')
members = lists.then(function(lists){
  return lists.map( list => list.cards.map(card => card.members)) //.map( member => {member.initials)))
}).then(function(lists){
  return lists.flat().filter(function(el){
    return el != []
  }).flat()
}).then(function(members){
  return members.sort()
})
console.log('-----------------------------------')
console.log(members)
console.log('-----------------------------------')

console.log('-----------------------------------')
distincts = members.then(function(ms){
  let acc = {};
  for (i = 0; i < ms.length; i++) {
    if (ms[i].initials in acc){
      // console.log('~~')
      // console.log(acc)
      // console.log('~~')
      acc[ms[i].initials] = acc[ms[i].initials] + 1
      // console.log('~~~')
      // console.log(acc)
      // console.log('~~~')
    } else {
      // console.log('~~~!')
      // console.log(acc)
      // console.log('~~~!')
      acc[ms[i].initials] = 0
      // console.log('~~~~')
      // console.log(acc)
      // console.log('~~~~')
    }
  }
  return acc
});

console.log(distincts)
console.log('-----------------------------------')

distinct.then(function(dists){

  data = dists.values()

  var svg = d3.select("#weekly_chores"),
  width = svg.attr("width"),
  height = svg.attr("height"),
  radius = Math.min(width, height) / 2,
  g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var color = d3.scaleOrdinal(['#FFDDD3','#CBE1EF']);

  // Generate the pie
  var pie = d3.pie();

  // Generate the arcs
  var arc = d3.arc()
          .innerRadius(0)
          .outerRadius(radius);

  //Generate groups
  var arcs = g.selectAll("arc")
          .data(pie(data))
          .enter()
          .append("g")
          .attr("class", "arc")

  //Draw arc paths
  arcs.append("path")
  .attr("fill", function(d, i) {
      return color(i);
  })
  .attr("d", arc);
})

// var cards = t.arg('cards')
// cards.then(function(card){
//     console.log(card);
//     return 1;
//   })
// t.card('all').then(function(card){
//   console.log(card);
//   return 1;
// })



// console.log(lists[0])

// console.log(text)

// // console.log(t.card('all'))
// // t.member

// var cards = t.cards('id', 'name', 'members', 'labels')
// console.log(text)

// console.log("bobo")
// var cards2 = cards.then(function(card){

//     console.log(card)
//     return []
// });

// console.log(cards2)
// console.log("koko")
// // var lucky = cards.prototype.filter(function(card) {
// //     return card.members[0] == t.member;
// //   });
// // console.log(lucky)
// console.log(text)


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
var WHITE_ICON = '../img/house_hold_managment_icon.jpg';
var BLACK_ICON = '../img/house_hold_managment_icon.jpg';

var onClickHouseManagementData = function (t, opts) {
  // console.log('Someone clicked the button');
  t.modal({
    // the url to load for the iframe
    url: './household_management_data.html',
    // optional arguments to be passed to the iframe as query parameters
    // access later with t.arg('text')
    args: { text: 'Hello',cards: t.card('all')},
    // optional color for header chrome
    accentColor: '#F2D600',
    // initial height for iframe
    height: 500, // not used if fullscreen is true
    // whether the modal should stretch to take up the whole screen
    fullscreen: true,
    // optional function to be called if user closes modal (via `X` or escape, etc)
    callback: () => console.log('Goodbye.'),
    // optional title for header chrome
    title: 'Household Management Data',
    // optional action buttons for header chrome
    // max 3, up to 1 on right side
    actions: [
      // {
    //   icon: './images/icon.svg',
    //   url: 'https://google.com',
    //   alt: 'Leftmost',
    //   position: 'left',
    // }, {
    //   icon: './images/icon.svg',
    //   callback: (tr) => tr.popup({
    //     title: tr.localizeKey('appear_in_settings'),
    //     url: 'settings.html',
    //     height: 164,
    //   }),
    //   alt: 'Second from left',
    //   position: 'left',
    // }, {
    //   icon: './images/icon.svg',
    //   callback: () => console.log(':tada:'),
    //   alt: 'Right side',
    //   position: 'right',
    // }
  ],
  })
};

TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      // we can either provide a button that has a callback function
      icon: {
        dark: WHITE_ICON,
        light: BLACK_ICON
      },
      text: 'Household Management Data',
      callback: onClickHouseManagementData,
      condition: 'always'
    }
    // }, {
    //   // or we can also have a button that is just a simple url
    //   // clicking it will open a new tab at the provided url
    //   icon: {
    //     dark: WHITE_ICON,
    //     light: BLACK_ICON
    //   },
    //   text: 'URL',
    //   condition: 'always',
    //   url: 'https://trello.com/inspiration',
    //   target: 'Inspiring Boards' // optional target for above url
    // }
  ];
  }
});
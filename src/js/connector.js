var WHITE_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-white.svg';
var BLACK_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-black.svg';

var onBtnClick = function (t, opts) {
  console.log('Someone clicked the button');
  t.modal({
    // the url to load for the iframe
    url: './modal.html',
    // optional arguments to be passed to the iframe as query parameters
    // access later with t.arg('text')
    args: { text: 'Hello' },
    // optional color for header chrome
    accentColor: '#F2D600',
    // initial height for iframe
    height: 500, // not used if fullscreen is true
    // whether the modal should stretch to take up the whole screen
    fullscreen: true,
    // optional function to be called if user closes modal (via `X` or escape, etc)
    callback: () => console.log('Goodbye.'),
    // optional title for header chrome
    title: 'appear.in meeting',
    // optional action buttons for header chrome
    // max 3, up to 1 on right side
    actions: [{
      icon: './images/icon.svg',
      url: 'https://google.com',
      alt: 'Leftmost',
      position: 'left',
    }, {
      icon: './images/icon.svg',
      callback: (tr) => tr.popup({
        title: tr.localizeKey('appear_in_settings'),
        url: 'settings.html',
        height: 164,
      }),
      alt: 'Second from left',
      position: 'left',
    }, {
      icon: './images/icon.svg',
      callback: () => console.log(':tada:'),
      alt: 'Right side',
      position: 'right',
    }],
  })
};

window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      // we can either provide a button that has a callback function
      icon: {
        dark: WHITE_ICON,
        light: BLACK_ICON
      },
      text: 'Callback',
      callback: onBtnClick,
      condition: 'always'
    }, {
      // or we can also have a button that is just a simple url
      // clicking it will open a new tab at the provided url
      icon: {
        dark: WHITE_ICON,
        light: BLACK_ICON
      },
      text: 'URL',
      condition: 'always',
      url: 'https://trello.com/inspiration',
      target: 'Inspiring Boards' // optional target for above url
    }];
  }
});
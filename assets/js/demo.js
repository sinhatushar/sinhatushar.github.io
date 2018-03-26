
WebFontConfig = {
  google: { families: [ 'Lato:400,700,300:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

// Initialize Share-Buttons
$.contactButtons({
  effect  : 'slide-on-scroll',
  buttons : {
    'facebook':   { class: 'facebook', use: true, link: 'https://goo.gl/dPwLHd', extras: 'target="_blank"' },
    'linkedin':   { class: 'linkedin', use: true, link: 'https://goo.gl/3rSGUB', extras: 'target="_blank"' },
    'twitter':    { class: 'twitter',  use: true,icon: 'twitter',link: 'https://goo.gl/WDWJKW',extras: 'target="_blank"' },
    'mybutton':   { class: 'git',      use: true, icon: 'github',link: 'https://goo.gl/MD5X3U', extras: 'target="_blank"' },
    'email':      { class: 'email',    use: true, link: 'heeramani.15342@gmail.com' }
  }
});
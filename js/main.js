var $banner = $('.banner');
var width = $banner.outerWidth();
var height = $banner.outerHeight();
var i = 0;
var $star = 75;
var $newstar;

for (i= 0; i < 75; i++) {
  $newstar = $('<div>');
  $newstar.addClass('star');

  $newstar.css({
    top: Math.random() * height,
    left: Math.random() * width,
    transform: 'rotate(' + Math.random() * 360 + 'deg) scale(' + Math.random() + ')',
    opacity: Math.random()
  });
  $banner.append($newstar);
}


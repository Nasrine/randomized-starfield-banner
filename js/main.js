var $body = $('.banner');
var $star = $('.banner');
var width = $body.outerWidth();
var height = $body.outerHeight();

for (1= 0; i < 75; i++) {
  $star = $('<div>');
  $star.addClass('star');
  $star.css({
    top: Math.random() * height,
    left: Math.random() * width,
    opacity: Math.random(),
    transform: 'rotate(' + Math.random() * 360 + 'deg) scale(' + Math.random() + ')',
  });
  $body.append($star);
}


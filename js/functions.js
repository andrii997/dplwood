$(window).on('load', function() {
  if ($('#preloader').length) {
      $('#preloader').delay(500).fadeOut('slow');
  }
});

$('.carousel').carousel({
  interval: 3000,
  ride: "carousel",
  pause: false
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
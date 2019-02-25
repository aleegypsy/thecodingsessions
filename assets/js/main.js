/* global $ */
$(document).ready(function () {

 // hide navbar on scroll
  $(function () {
    var lastScrollTop = 0;
    var $navbar = $('.navbar');

    $(window).scroll(function(event){
      var st = $(this).scrollTop();
      if (st > lastScrollTop) { // scroll down
        $navbar.fadeOut()
      } else { // scroll up
        $navbar.fadeIn()
      }
      lastScrollTop = st;
    });
  });

 // transparent to solid
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 500) { 
        $('.navbar').addClass('solid');
    } else {
        $('.navbar').removeClass('solid');
    }
  });

  // Scroll to Top
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});

  // Background Set
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

  // instafeed
  var userFeed = new Instafeed({
    get: 'user',
    userId: 9973885412,
    accessToken: '9973885412.1677ed0.39d48b8129eb485699394c2aab13468e'
  });
  userFeed.run();

});



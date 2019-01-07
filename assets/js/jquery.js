
//fade in sections
$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadein').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1000);
            }
            
        }); 
    });
});

// fadein jumbotron
  $(".opening").hide().fadeIn(2000);

//cookies
window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#bfadad",
        "text": "#ffffff"
  },
    "button": {
      "background": "#000000",
        "text": "#e3c1c1"
        }
      },
      "theme": "edgeless",
      "content": {
        "message": "We use cookies to ensure you get the best experience on our website.",
        "dismiss": "GOT IT",
        "link": "LEARN MORE"
      }
    })});

  // scroll down button
  $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  });
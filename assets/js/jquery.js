
//fade in sections
$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadein').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},500);
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

  
 // hide navbar on scroll 

  $(function () {
    var lastScrollTop = 0;
    var $navbar = $('.navbar');
  
    $(window).scroll(function(event){
      var st = $(this).scrollTop();
  
      if (st > lastScrollTop) { // scroll down
        
        // use this is jQuery full is used
        $navbar.fadeOut()
        
        // use this to use CSS3 animation
        // $navbar.addClass("fade-out");
        // $navbar.removeClass("fade-in");
        
        // use this if no effect is required
        // $navbar.hide();
      } else { // scroll up
        
        // use this is jQuery full is used
        $navbar.fadeIn()
        
        // use this to use CSS3 animation
        // $navbar.addClass("fade-in");
        // $navbar.removeClass("fade-out");
        
        // use this if no effect is required
        // $navbar.show();
      }
      lastScrollTop = st;
    });
  });


  // ===== Scroll to Top ==== 
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

// parallax effect
(function(){

  var parallax = document.querySelectorAll("body, calloutcontainer"),
      speed = 0.1;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();

// form submission

$(function()
{
    function after_form_submitted(data)
    {
        if(data.result == 'success')
        {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' );
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });

        }//else
    }

	$('#reused_form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' );
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });


                    $.ajax({
                type: "POST",
                url: 'handler.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json'
            });

      });
});
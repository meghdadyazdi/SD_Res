$(document).ready(function(){
    $('.sidenav').sidenav();
    $('#cook').mouseenter(function (){
        $('#img-cook').removeClass('work-img');
    });
    $('#cook').mouseleave(function (){
        $('#img-cook').addClass('work-img');
    });
    $('#tetris').mouseenter(function (){
        $('#img-tetris').removeClass('work-img');
    });
    $('#tetris').mouseleave(function (){
        $('#img-tetris').addClass('work-img');
    });
    $('#gym').mouseenter(function (){
        $('#img-gym').removeClass('work-img');
    });
    $('#gym').mouseleave(function (){
        $('#img-gym').addClass('work-img');
    });
    
    $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  });
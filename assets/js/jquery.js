$(document).ready(function() {
    $('.sidenav').sidenav();
    $('#auction').mouseenter(function() {
        $('#img-auction').removeClass('work-img');
    });
    $('#auction').mouseleave(function() {
        $('#img-auction').addClass('work-img');
    });
    $('#cook').mouseenter(function() {
        $('#img-cook').removeClass('work-img');
    });
    $('#cook').mouseleave(function() {
        $('#img-cook').addClass('work-img');
    });
    $('#tetris').mouseenter(function() {
        $('#img-tetris').removeClass('work-img');
    });
    $('#tetris').mouseleave(function() {
        $('#img-tetris').addClass('work-img');
    });
    $('#gym').mouseenter(function() {
        $('#img-gym').removeClass('work-img');
    });
    $('#gym').mouseleave(function() {
        $('#img-gym').addClass('work-img');
    });

    $("a").click(function(event) {

        // $("a").on('click', function(event) {

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
            }, 1000, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if



        $(document).scroll(function() {
            var y = $(this).scrollTop();
            if (y > 290) {
                $('.go-home').fadeIn();
            }
            else {
                $('.go-home').fadeOut();
            }
        });
    });




    $("#submit").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        var contact = $("#contact").val();
        $("#returnmessage").empty(); // To empty previous error/success message.
        // Checking for blank fields.
        if (name == '' || email == '' || contact == '') {
            alert("Please Fill Required Fields");
        }
        else {
            // Returns successful data submission message when the entered information is stored in database.
            $.post("contact_form.php", {
                name1: name,
                email1: email,
                message1: message,
                contact1: contact
            }, function(data) {
                $("#returnmessage").append(data); // Append returned message to message paragraph.
                if (data == "Your Query has been received, We will contact you soon.") {
                    $("#form")[0].reset(); // To reset form fields on success.
                }
            });
        }
    });



});
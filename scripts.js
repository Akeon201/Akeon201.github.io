// Scroll behavior
$(document).ready(function () {

  // Add smooth scrolling to all links
  $("a.nav-link[href^='#'], a.navbar-brand[href^='#'], #header-button, #about-button, #footer-link").on("click", function (event) {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Calculate adjusted target position
    var navbarHeight = $(".navbar").outerHeight();
    var targetPosition;

    // Check if the navbar is in the collapsed state (mobile view)
    if ($(window).width() < 992) {
      targetPosition = $(hash).offset().top - 53;
    } else {
      targetPosition = $(hash).offset().top - navbarHeight;
    }
    
    // Use animate() function to make the scrolling smooth
    $("html, body").animate({
      scrollTop: targetPosition
    }, 800, function(){
      // Add hash to URL (default click behavior) without jumping to hash
      history.pushState(null, null, hash);
    });
  });
});

//Submit behavior
$(document).ready(function(){
  $("form").on('submit', function(event){
      event.preventDefault();

      if (!this.checkValidity()) {
        // Form is not valid, so don't submit it
        event.stopPropagation();
        $(this).addClass('was-validated');
      } else {
      // AJAX call to submit the form.
      $.ajax({
          type: $(this).attr('method'),
          url: $(this).attr('action'),
          data: $(this).serialize(),
          dataType: 'json',
          success: function(response) {
              $("form").hide();
              $("#submitBtn").prop("disabled", true); // disable the button
              $("#submitBtn").addClass("btn-disabled"); // add a class for styling
              $("#errorMsg").remove(); // remove previous error message
              $("#successMsg").remove(); // remove previous success message
              $("#contact .container").append("<h2 id='successMsg'>Submitted!</h2>");
          },
          error: function(err) {
              $("#successMsg").remove(); // remove previous success message
              $("#errorMsg").remove(); // remove previous error message
              $("#contact .container").append("<h2 id='errorMsg'>Submission failed.</h2>");
              setTimeout(function(){
                  $('#errorMsg').fadeOut('slow');
              }, 3000); // Wait for 3 seconds, then fade out slowly
          }
      });
    }
  });
});

// disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// Initialize Flickity with wrapAround and draggable options
var carousel = document.querySelector('.js-flickity');
var flkty = new Flickity( carousel, {
  wrapAround: true,
  draggable: true
});

flkty.on( 'staticClick', function( event, pointer, cellElement, cellIndex ) {
  // check if image was clicked
  if (!cellElement) return;

  var clickedImage = cellElement.querySelector('img');

  // check if a valid image element exists
  if (!clickedImage) return;

  // get the modal id from the data-section attribute
  var modalId = clickedImage.dataset.section;

  // get the corresponding modal
  var modalElement = document.getElementById(modalId);

  // make sure a valid modal exists
  if (!modalElement) return;

  // create a bootstrap modal instance
  var modal = new bootstrap.Modal(modalElement);

  // open the modal
  modal.show();
});

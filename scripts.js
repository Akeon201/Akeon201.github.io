$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a.nav-link[href^='#']").on("click", function (event) {
      // Prevent default anchor click behavior
      event.preventDefault();
  
      // Store hash
      var hash = this.hash;
  
      // Animate
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    });
  });
  
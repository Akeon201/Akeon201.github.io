$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a.nav-link[href^='#'], #header-button").on("click", function (event) {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Calculate adjusted target position
    var navbarHeight = $(".navbar").outerHeight();
    var targetPosition = $(hash).offset().top - navbarHeight;

    // Use animate() function to make the scrolling smooth
    $("html, body").animate({
      scrollTop: targetPosition
    }, 800, function(){
      // Add hash to URL (default click behavior) without jumping to hash
      history.pushState(null, null, hash);
    });
  });
});

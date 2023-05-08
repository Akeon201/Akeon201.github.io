$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a.nav-link[href^='#'], #header-button").on("click", function (event) {
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

// Add active class to nav-item when corresponding section is in view
$(document).ready(function() {
  var navItems = $('.nav-item');
  var navHeight = $('header').outerHeight();

  $(window).on('scroll', function() {
    var curPos = $(this).scrollTop();

    // loop through sections to find which one is currently in view
    $('section').each(function() {
      var top = $(this).offset().top - navHeight;
      var bottom = top + $(this).outerHeight();

      if (curPos >= top && curPos <= bottom) {
        navItems.removeClass('active');
        $('.nav-item a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
      }
    });
  });
});

(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  // owl-carousel
  $(".hero-slider-active").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    responsiveClass: true,
    nav: true,
    navText: [
      '<img src="images/arrow-left-white.svg"  alt="" class="arr-right" /> PREV',
      'NEXT <img src="images/arrow-right-white.svg"  alt="" class="arr-right" />',
    ],
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });

  // countdown
  $("[data-countdown]").each(function () {
    var $this = $(this),
      finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      $this.html(
        event.strftime(
          '<div class="time-count">%D <span class="title">days</span></div><div class="time-count">%H <span class="title">hours</span></div><div class="time-count">%M <span class="title">minutes</span></div><div class="time-count">%S <span class="title">Seconds</span></div>'
        )
      );
    });
  });
})(jQuery);

$(document).ready(function () {
  // scroll up
  $(function () {
    $.scrollUp();
  });

  // nice-select
  $(".nice-select").niceSelect();

  // preloader
  $("#preloader").fadeOut(500);
});

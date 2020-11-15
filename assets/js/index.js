$(function () {
  let scroll = $(document).scrollTop();
  let navHeight = $(".nav-area").outerHeight();
  $(window).scroll(function () {
    let scrolled = $(document).scrollTop();
    if (scrolled > (navHeight + 100)) {
      $(".nav-area").addClass("animate sticky");
    } else {
      $(".nav-area").removeClass("animate");
    }
    scroll = $(document).scrollTop();
  });
});



$(".burger").click(function() {
  $(".lg-nav").toggleClass("active");
  if ($(".lg-nav").hasClass("active")) {
    $(".nav-area").addClass("animate sticky");
  }
});
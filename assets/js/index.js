$(function () {
  let scroll = $(document).scrollTop();
  let navHeight = $(".nav-area").outerHeight();
  $(window).scroll(function () {
    let scrolled = $(document).scrollTop();
    if (scrolled > navHeight) {
      $(".nav-area").addClass("animate sticky");
    } else {
      $(".nav-area").removeClass("animate");
    }
    // if (scrolled > scroll) {
    //   $(".nav-area").removeClass("sticky");
    // } else {
    //   $(".nav-area").addClass("sticky");
    // }
    scroll = $(document).scrollTop();
  });
});

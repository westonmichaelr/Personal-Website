var Navigation = $(".nav_bar");
    stickyDiv = "sticky";
    Header = $('.header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > Header ) {
    Navigation.addClass(stickyDiv);
  } else {
    Navigation.removeClass(stickyDiv);
  }
});

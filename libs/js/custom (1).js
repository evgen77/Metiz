$(document).ready(function() {
  //registerForm
  $('#registration').click(function() {
    $('#registerForm').fadeIn(400);
  });
  $('#in').click(function() {
    $('#inForm').fadeIn(400);
  });
  $('.popupCall .close').click(function(){
    $('.popupCall').fadeOut(400);
  });
 $('.box-slider').slick({
  arrows: false,
  slidesToshow: 1,
  dots:true,
 responsive: [
    {
      breakpoint: 500,
      settings: {
        dots: false,
        slidesToshow: 1,
      }
    }
    ]
 });
 $('#pagination a').click(function() {
    $(this).addClass('active-page');
 });
 $('.menu-btn').click(function() {
  $('#menu').toggleClass('fixed');
 });
});
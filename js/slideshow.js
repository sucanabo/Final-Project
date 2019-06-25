$(document).ready(function(){
    $('.sildeshow').slick({
      dots:true,
      fade:true,
      autoplay:true,
      autoplaySpeed:3000,
      nextArrow: '<i class="fas fa-chevron-right"></i>',
      prevArrow: '<i class="fas fa-chevron-left"></i>',
      focusOnSelect:true
    });
  });
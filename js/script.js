$(function () {
    $('.slide1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        speed:1000,
        pauseOnHover: false,
        pauseOnFocus: false,
        prevArrow:".left",
        nextArrow:'.right',
        dots:true,
      });
      $('.slide2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
        focusOnSelect:true,
        autoplay: false,
        prevArrow:".left2",
        nextArrow:'.right2',
       });
})

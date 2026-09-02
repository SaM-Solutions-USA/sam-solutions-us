jQuery(function($){ 
  $('.advantages-disadvantages').slick({ 
  arrows: false,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 900, 
      settings: {
        infinite: false,
        arrows: true,
        dots: false,
        slidesToShow: 2.3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 680,
      settings: {
        infinite: false,
      	arrows: false,
  		  dots: false,
        slidesToShow: 1.3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 370,
      settings: {
        infinite: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


  

});
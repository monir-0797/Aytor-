$(function(){

    $(`#banner`).slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows:false,
        dots:true,
    });
    $(".product_slider").slick({
        slidesToShow: 4,
        speed: 300,
        slidesToScroll: 1,
        arrows:true,
        prevArrow:".left_arrow",
        nextArrow:".right_arrow",

        responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });


    // Deals Section
    // Count Down Js Start's
    $(".countdown").countdown("2024/05/30 13:00:00",function(e){
     let time = e.strftime('%D days %H:%M:%S');
   $(".countdown .days").html( e.strftime('%D'));
   $(".countdown .hour").html( e.strftime('%H'));
   $(".countdown .min").html( e.strftime('%M'));
   $(".countdown .sec").html( e.strftime('%S'));
    });
  //  Count Down Js End's

    // Deals slider Start's
    $(".deal_slider").slick({
      slidesToShow: 2,
      speed: 300,
      slidesToScroll: 1,
      arrows:true,
      dots:true,
      arrows:false,
      responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow:2,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },
  
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
  });
  $("seller_product .product_slider").slick({
    slidesToShow:0,
    slidesToScroll:0,
    arrows:false,
  });

  //  Deals slider End's
  new VenoBox({
    selector: ".venobox",
});
// News_slider Start's
$(".news_slider").slick({
  slidesToShow:4,
  slidesToScroll:2,
  arrows:false,
  dots:true,
})
// News_slider End's

})
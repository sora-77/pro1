$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', 
        infinite: true,
        dots: true
      });

    $(".regular").slick({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2

    });
})
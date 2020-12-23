$(function(){
    $("#topbanner .close").click(function(){
        $("#topbanner").slideUp();
        $(this).hide("fast");
    })


    //$(".icon-menu-box").click(function(){
     //   $(".sitemap__close").slideDown("slow");
     //   $(".sitemap__background").animate({width: "300rem", height: "300rem", top: "-50%", right: "-50%"}).css({opacity: 1}, "slow");
    //})
    // 사이트맵 닫기버튼
    $(".sitemap__close").click(function(){
        $(this).fadeOut("slow");
        $(".sitemap__background").animate({width: "0", height: "0", top: "13.5rem", right: "16.5rem"});
    })
// 공지사항 팝업
    var slide;
    slide = setInterval(function(){
        
        $(".rolling__box .notice__list > li:first-child").animate({marginTop: "-3.2rem"}, 800, function(){
            $(".rolling__box .notice__list").append($(".rolling__box .notice__list > li:first-child"))
        });
            $(".rolling__box .notice__list > li:last-child").css({marginTop: "0rem"});
        }, 3000);

        
    slide = setInterval(function(){
        
        $(".rolling__box .purp__list > li:first-child").animate({marginTop: "-3.2rem"}, 800, function(){
            $(".rolling__box .purp__list").append($(".rolling__box .purp__list > li:first-child"))
        });
            $(".rolling__box .purp__list > li:last-child").css({marginTop: "0rem"});
        }, 3000);

        // 공지사항 닫기 버튼
        $("#rolling-banner .close").each(function(){
           $(this).click(function(){
               $(this).parent("div").fadeOut();
           })
        }) 

        $(window).scroll(function(){
            if ($(document).scrollTop() >= 600) {
            //&& $(document).scrollTop() <= $("#popup").offset().top - 1000) {
              $("#quickmenu").fadeIn("slow");
                
              // $("header").addClass("active");
            }  else {
                $("#quickmenu").fadeOut("slow");
            }
          })
      
})
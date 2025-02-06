jQuery(document).ready(function ($) { //(document).ready pise se jer da bi se trigerovao jQuery ceo dokument mora biti ucitan

    // preloader animacija, namerno stavljen timeout da bi se videla animacija
    setTimeout(function (){
        $(".loader-wrapper").fadeOut();
    }, 1000)

    // klik na search ikonicu prikazace search wrapper sa inputom za pretragu
    $("#search-btn").click(function (e) {
        e.preventDefault();
        
        $(".search-wrapper").fadeIn();
    });

    // klik na x dugme za zatvaranje sklonice search wrapper 
    $("#close-search").click(function (e){
        e.preventDefault();

        $(".search-wrapper").fadeOut();
    });


    // hamburger menu opening and closing
    $("#hamburger-btn").click(function(){
        
        if($(this).hasClass('opened')){
            $("nav ul").slideUp()
        } else {
            $("nav ul").slideDown();
        }

        $(this).toggleClass('opened');
    });

    // scroll animation
    $(window).scroll(function () {
        if($(window).scrollTop() > 10) {
            $("nav").addClass('fixed-nav');
        } else {
            $("nav").removeClass('fixed-nav');
        }
    });

});




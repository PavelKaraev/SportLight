$(document).ready(function(){
    $('.feedback-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-next"></button>',
        responsive:[
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.show-menu').on('click', showMenu)
    function showMenu(){
        $(".main-nav").animate({"right": "+=290px"}, "slow");
        $('.show-menu').off('click', showMenu);
        $('.show-menu').on('click', closeMenu);
    }
    function closeMenu(){
        $(".main-nav").animate({"right": "-=290px"}, "slow");
        $('.show-menu').off('click', closeMenu);
        $('.show-menu').on('click', showMenu);
    }

    function mainBannerHeight(){
        var headerHeight = $('header').outerHeight();
        var windowHeight = $(window).height();
        $('.main-banner').height(windowHeight - headerHeight);
    }
    mainBannerHeight();
    $(window).resize(mainBannerHeight);
})
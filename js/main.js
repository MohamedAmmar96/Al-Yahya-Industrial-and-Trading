$(window).on('load', function() {

    $(".loading-overlay .loading-overlay-box").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})


// // Scroll To Top Button 
// var scrollButton = $(".scroll-top");
// $(window).scroll(function() {
//     ($(this).scrollTop() >= 500) ? scrollButton.show(600): scrollButton.hide(600);
// });
// // Click Button to scroll top 
// scrollButton.click(function() {
//     $("html,body").animate({ scrollTop: 0 }, 600);
// });

var wow = new WOW();
wow.init();

$(document).ready(function() {


    //Main Slider Carousel
    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1200,
        rtl: true,
        margin: 20,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsiveClass: true,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });

    //This is to make Clients slider in small screens
    if ($(window).width() <= 991) {
        $(".clients .clients-box").addClass("owl-carousel owl-theme");
        $(".clients-box .client").removeClass("owl-carousel");
        $('.clients .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1200,
            margin: 20,
            rtl: true,
            responsiveClass: true,
            nav: false,
            dots: true,
            dotsEach: true,
            responsive: {
                0: {
                    items: 2
                },
                550: {
                    items: 3
                }
            }
        })
    } else {
        $(".clients .clients-box").removeClass("owl-carousel");
        $(".clients-box .client").removeClass("owl-carousel");
    };

    //This is to make News Section slider in small screens
    if ($(window).width() <= 991) {
        $(".my-news .news-box").addClass("owl-carousel owl-theme");
        $(".news-box .news").removeClass("owl-carousel");
        $('.my-news .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1200,
            margin: 0,
            rtl: true,
            responsiveClass: true,
            nav: false,
            dots: true,
            dotsEach: true,
            responsive: {
                0: {
                    items: 1
                },
                550: {
                    items: 2

                }
            }
        })
    } else {
        $(".my-news .news-box").removeClass("owl-carousel");
        $(".news-box .news").removeClass("owl-carousel");
    };

    // Footer Section Start --------------------------------------------------------------------------------------------------------------------
    // To Toggle Between Footer Slide Menus
    if ($(window).width() >= 992) {
        $(".slide-list").addClass("show")
        $('.footer-link').on('click', function(e) {
            e.stopPropagation();
        });
    }
    //This is To Change between footer collapse link ----------------------------------------------------------------
    // First Collapse ---------------------------
    $(".footer-heading .footer-link").click(function() {
        var x = $(".slide-list")
        if (x.hasClass("collapse")) {
            $(".footer-heading .footer-link").addClass("rotate")
            $(".footer-heading .footer-link").removeClass("rotate-reverse")
        }
    });
    $(".footer-heading .footer-link").click(function() {
        var x = $(".slide-list")
        if (x.hasClass("show")) {
            $(".footer-heading .footer-link").removeClass("rotate")
            $(".footer-heading .footer-link").addClass("rotate-reverse")
        }
    });


    //This is to Open Side Menu in Small Screens
    $(".menu").click(function() {
        $("body").addClass("overflow")
        $(".menu .menu-icon").removeClass("open-menu")
        $(".menu .menu-icon").addClass("close-menu")
        $(".mo-nav").addClass("menu-open");
        $(".overlay-box2").fadeIn(500);
    });
    $(".close,.overlay-box2").click(function() {
        $("body").removeClass("overflow")
        $(".menu .menu-icon").addClass("open-menu")
        $(".menu .menu-icon").removeClass("close-menu")
        $(".mo-nav").removeClass("menu-open");
        $(".overlay-box2").fadeOut(500);
    });


    if ($(window).width() <= 991) {
        $(".sub-menu .nav-link").click(function() {
            $(this).toggleClass("rotate")
            $(this).siblings(".sub-list").slideToggle(300);
        });
    }

    if ($(window).width() <= 991) {
        $(".sub-sub-menu .sub-link").click(function() {
            $(this).toggleClass("rotate")
            $(this).siblings(".sub-sub-list").slideToggle(300);
        });
    }

    if ($(window).width() <= 991) {
        $(".lang-name").click(function() {
            $(this).toggleClass("rotate")
            $(".lang-list").slideToggle(300);
        });
    }
});
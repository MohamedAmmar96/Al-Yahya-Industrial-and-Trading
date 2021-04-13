$(window).on('load', function() {

    $(".loading-overlay .loading-overlay-box").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})
$(window).scroll(function() {
    if (($(this).scrollTop() >= 30)) {
        $(".mo-header").addClass("fixed")
        $(".logo-box").addClass("scroll-width")
        $(".lang-name").addClass("scroll-color")
        if ($(window).width() >= 992) {
            $(".nav-list>li>a").addClass("scroll-color")
        }
    } else {
        $(".mo-header").removeClass("fixed");
        $(".logo-box").removeClass("scroll-width")
        $(".nav-list>li>a").removeClass("scroll-color")
        $(".lang-name").removeClass("scroll-color")
    }
});


// // Scroll To Top Button 
// var scrollButton = $(".scroll-top");
// $(window).scroll(function() {
//     ($(this).scrollTop() >= 500) ? scrollButton.show(600): scrollButton.hide(600);
// });
// // Click Button to scroll top 
// scrollButton.click(function() {
//     $("html,body").animate({ scrollTop: 0 }, 600);
// });

// var wow = new WOW();
// wow.init();

// init Swiper:
const swiper = new Swiper();

$(document).ready(function() {

    var mySwiper1 = new Swiper('.main-slider .swiper-container', {
        effect: 'coverflow',
        direction: 'horizontal',
        loop: true,
        speed: 1700,
        spaceBetween: 30,
        slidesPerView: 1,
        updateOnWindowResize: true,
        // freeMode: true,
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
        breakpoints: {
            0: { slidesPerView: 1, },
            500: { slidesPerView: 1, },
            768: { slidesPerView: 1, },
            992: { slidesPerView: 1, },
            1200: { slidesPerView: 1, },
        }
    })

    //This is to make Clients slider in small screens
    if ($(window).width() <= 991) {
        $(".my-clients").addClass("swiper-container")
        $(".my-clients").removeClass("clients-box")
        $(".client").addClass("swiper-slide")
        $(".client.swiper-slide").wrapAll("<div class='swiper-wrapper'></div>")
    }
    var mySwiper2 = new Swiper('.clients .swiper-container', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 15,
        updateOnWindowResize: true,
        // autoplay: false,
        allowTouchMove: false,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
                allowTouchMove: true,
                autoplay: true,
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 15,
                allowTouchMove: true,
                autoplay: {
                    delay: 4000,
                }
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
                allowTouchMove: true,
                autoplay: {
                    delay: 4000,
                }
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 15,
            },
        },
        pagination: {
            el: '.clients .swiper-pagination',
            clickable: true,
        },
    });


    var mySwiper3 = new Swiper('.my-news .swiper-container', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 30,
        updateOnWindowResize: true,
        autoplay: false,
        allowTouchMove: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
                allowTouchMove: true,
                autoplay: true,
                autoplay: {
                    delay: 2000,
                }
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 30,
                allowTouchMove: true,
                autoplay: true,
                autoplay: {
                    delay: 4000,
                }
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
                allowTouchMove: true,
                autoplay: true,
                autoplay: {
                    delay: 4000,
                }
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        pagination: {
            el: '.my-news .swiper-pagination',
            clickable: true,
        },
    });


    //This is to Open Side Menu in Small Screens
    $(".menu").click(function() {
        $("body").toggleClass("overflow")
        $(".menu .menu-icon").toggleClass("open-menu")
        $(".menu .menu-icon").toggleClass("close-menu")
        $(".mo-header").toggleClass("white-back")
        $(".lang-name").toggleClass("scroll-black")
        $(".mo-nav").slideToggle(300);
        // $(".overlay-box2").fadeIn(500);
    });
    // $(".close,.overlay-box2").click(function() {
    //     $("body").removeClass("overflow")
    //     $(".menu .menu-icon").addClass("open-menu")
    //     $(".menu .menu-icon").removeClass("close-menu")
    //     $(".mo-nav").removeClass("menu-open");
    //     $(".overlay-box2").fadeOut(500);
    // });


    if ($(window).width() <= 991) {
        $(".sub-menu>a").click(function() {
            $(this).toggleClass("rotate")
            $(this).siblings(".sub-list").slideToggle(300);
        });
    }

    if ($(window).width() <= 991) {
        $(".sub-sub-menu>a").click(function() {
            $(this).toggleClass("rotate")
            $(this).siblings(".sub-sub-list").slideToggle(300);
        });
    }

    // if ($(window).width() <= 991) {
    //     $(".lang-name").click(function() {
    //         $(this).toggleClass("rotate")
    //         $(".lang-list").slideToggle(300);
    //     });
    // }
});
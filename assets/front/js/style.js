$(document).ready(function () {





    /* Preloader */
    // $(window).on('load', function() {
    //     var preloaderFadeOutTime = 500;

    //     function hidePreloader() {
    //         var preloader = $('.spinner-wrapper');
    //         setTimeout(function() {
    //             preloader.fadeOut(preloaderFadeOutTime);
    //         }, 500);
    //     }
    //     hidePreloader();
    // });

    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 1500,
        loop: true,
        smartSpeed: 250,
        nav: true
    })




});
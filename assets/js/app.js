// $(window).on('load', function () {
//     AOS.refresh();
// });

$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        fade: true,
        cssEase: 'linear',
    });
    $('.list-cards-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    // Mobile Menu
    $('.header-toggle__menu').on('click', function () {
        $('.mobile-nav-overlay').toggle();
        $('.mobile-nav').slideToggle();
    });

    $(window).scroll(function () {
        $('.mobile-nav-overlay').fadeOut();
        $('.mobile-nav').fadeOut();
    });

    $('.mobile-nav__list .header-navbar__item .header-navbar__item-icon').click(function () {
        $('.mobile-nav__list .header-sub-nav').slideToggle();
        $(this).toggleClass('open');
    });

    $('.mobile-nav-overlay').click(function () {
        $(this).fadeOut();
        $('.mobile-nav').fadeOut();
        $('.mobile-nav__list .header-sub-nav').slideUp();
        $('.mobile-nav__list .header-navbar__item .header-navbar__item-icon').removeClass('open');
    });

    // Fixed Header When Window Scroll

    if ($(window).width() > 992) {
        let positionOfBanner = $('.slider').offset().top;
        console.log(positionOfBanner);
        $(window).scroll(function () {
            if ($(window).scrollTop() >= positionOfBanner) {
                $('.fixed-header').show();
            } else {
                $('.fixed-header').hide();
            }
        });
    }
});

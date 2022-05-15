$('.header__burger').on('click', function () {
    $('.mobile-nav').fadeIn(300)
})

$('.mobile-nav__close').on('click', function () {
    $('.mobile-nav').fadeOut(300)
})

$('.first-block__btn, .service-detail__btn, .promotion__btn').on('click', function () {
    $('.modal').fadeIn(300)
})

$('.modal__outside').on('click', function () {
    $('.modal').fadeOut(300)
})

$('.services__card').on('click', function () {
    window.location = $(this).find('a').attr('href')
})

$('.services-list__card').on('click', function () {
    window.location = $(this).find('a').attr('href')
})

$('.gallery__slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    responsive: [
        {
            breakpoint: 850,
            settings: {
                arrows: false
            }
        }
    ]
})
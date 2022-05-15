$('.aniview').AniView({
    animateClass: 'animate__animated',
    animateThreshold: 100,
    scrollPollInterval: 20
})

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

const patternMask = IMask($('.modal input[name=phone]')[0], {
    mask: '+{7} (000) 000-00-00'
});

$('.modal input[name=name]').on('blur', checkName)
$('.modal input[name=phone]').on('blur', checkPhone)

$('.modal form').on('submit', function (e) {
    e.preventDefault()

    if (checkName() && checkPhone()) {
        $(this).html(`
            <p>Заявка успешно отправлена! В ближайшее время наш менеджер с вами свяжется!</p>
        `)
    }
})

function checkName () {
    if ($('.modal input[name=name]').val().trim().length === 0) {
        $('.modal input[name=name]').removeClass('done')
        $('.modal input[name=name]').addClass('error')
        return false
    } else {
        $('.modal input[name=name]').removeClass('error')
        $('.modal input[name=name]').addClass('done')
        return true
    }
}

function checkPhone () {
    if ($('.modal input[name=phone]').val().trim().length !== 18) {
        $('.modal input[name=phone]').removeClass('done')
        $('.modal input[name=phone]').addClass('error')
        return false
    } else {
        $('.modal input[name=phone]').removeClass('error')
        $('.modal input[name=phone]').addClass('done')
        return true
    }
}
AOS.init()

isToggled = false;
$(function () {
    $(window).on('scroll', function () {
        if (!isToggled) {
            if ($(window).scrollTop() > 50) {
                $('nav').addClass("nav-active");
            }
            else {
                $('nav').removeClass("nav-active");
            }
        }

        if ($(window).scrollTop() >= $(
            '.specArea .informationBar').offset().top + $('.specArea .informationBar').
                outerHeight() - window.innerHeight) {
            countUp();
        }
    });
});

function togglerStatus() {
    $('.navbar-toggler').click(function (e) {
        if (!$('nav').hasClass("nav-active")) {
            $('nav').addClass("nav-active");
        }
        else if ($(window).scrollTop() < 50) {
            $('nav').removeClass("nav-active");
        }

        $('.toggleMe').toggleClass("toggle-active");
        isToggled = !isToggled;
    });
}


function triggerNav() {
    if ($(window).width() < 1200 && $(window).scrollTop() > 100) {
        $('nav').addClass("nav-active");
    } else {
        $('nav').removeClass("nav-active");
    }
}

function scrollCheck() {
    if ($(window).scrollTop() > 50) {
        $('nav').addClass("nav-active");
    }
    else {
        $('nav').removeClass("nav-active");
    }
}

$(window).on('load', function () {
    triggerNav();
    togglerStatus();
    scrollCheck();
});


$(window).resize(function () {
    triggerNav();
});


$(".scrollMe").click(function () {
    $('html,body').animate({
        scrollTop: $(".clearfix").offset().top
    },
        'fast');
});

/* Slick Area $Start */

$('.conceptArea .slide-img').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: $('.conceptArea .slide-text'),
    adaptiveHeight: true,
});

$('.conceptArea .slide-text').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: $('.conceptArea .slide-img'),
});

$('.specArea .slide-img').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: $('.specArea .slide-text'),
    adaptiveHeight: true,
});

$('.specArea .slide-text').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: $('.specArea .slide-img'),
});

var $slickGallery = $('.galleryArea .slide-img');
var $left = $('#left')
var $right = $('#right')

$slickGallery.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $left.text(i.toLocaleString('tr-TR', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })) + $right.text(slick.slideCount.toLocaleString('tr-TR', {
        minimumIntegerDigits: 2,
        useGrouping: false
    }));
});


$slickGallery.slick({
    infinite: true,
    centerMode: true,
    centerPadding: '300px',
    slidesToShow: 1,
    arrows: true,
    prevArrow: $('.galleryArea .prev'),
    nextArrow: $('.galleryArea .next'),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                centerPadding: '100px',
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerPadding: '25px',
            }
        },
    ],
});

/* Slick Area $End */

/* Count Up $Start */
function countUp() {
    const counters = document.querySelectorAll('.number');
    const speed = 1000;

    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('arg0');
            const data = +counter.innerText;

            const time = value / speed;
            if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 50);
            } else {
                counter.innerText = value;
            }

        }

        animate();
    });

}
/* Count Up $End */

const year = document.getElementById('year');
const currentYear = new Date().getFullYear();

year.innerHTML = (currentYear);
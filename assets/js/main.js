TweenMax.to(".first", 1.5, {
    delay: .5,
    top: "-100%",
    ease: Expo.easeInOut
});

TweenMax.to(".second", 1.5, {
    delay: .7,
    top: "-100%",
    ease: Expo.easeInOut
});

TweenMax.to(".third", 1.5, {
    delay: .9,
    top: "-100%",
    ease: Expo.easeInOut
});


var t1 = new TimelineMax({ paused: true });

t1.to(".one", 0.5, {
    y: 6,
    rotation: 45,
    ease: Expo.easeInOut
});
t1.to(".two", 0.5, {
    y: -6,
    rotation: -45,
    ease: Expo.easeInOut,
    delay: -0.8
});

t1.to(".menu", 1, {
    right: "0%",
    ease: Expo.easeInOut,
    delay: -2
});

t1.staggerFrom(".menu h1", 1, { x: -200, opacity: 0, ease: Expo.easeOut }, 0.2);

t1.reverse();
$(document).on("click", ".toggle-btn", function () {
    t1.reversed(!t1.reversed());
});
$(document).on("click", "a", function () {
    t1.reversed(!t1.reversed());
});


// 


var $cursor = $(".cursor"),
    $overlay = $(".menu-overlay");

function moveCircle(e) {
    TweenMax.to($cursor, 0.5, {
        css: {
            left: e.pageX,
            top: e.pageY
        },
        delay: 0.03
    });
}

$(".l-1").hover(function () {
    $(".cursor").css({ "background-image": "url(assets/images/5.jpg)" });
});
$(".l-2").hover(function () {
    $(".cursor").css({ "background-image": "url(assets/images/6.jpg)" });
});
$(".l-3").hover(function () {
    $(".cursor").css({ "background-image": "url(assets/images/7.jpg)" });
});
$(".l-4").hover(function () {
    $(".cursor").css({ "background-image": "url(assets/images/2.jpg)" });
});

var flag = false;
$($overlay).mousemove(function () {
    flag = true;
    TweenMax.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
    $($overlay).on("mousemove", moveCircle);
});

$($overlay).mouseout(function () {
    flag = false;
    TweenMax.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
});


// var sickPrimary = {
//     autoplay: true,
//     autoplaySpeed: 2400,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     speed: 1800,
//     cssEase: 'cubic-bezier(.84, 0, .08, .99)',
//     asNavFor: '.slider-text',
//     centerMode: true,
//     prevArrow: $('.prev'),
//     nextArrow: $('.next')
// }

// var sickSecondary = {
//     autoplay: true,
//     autoplaySpeed: 2400,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     speed: 1800,
//     cssEase: 'cubic-bezier(.84, 0, .08, .99)',
//     asNavFor: '.image-slider',
//     prevArrow: $('.prev'),
//     nextArrow: $('.next')
// }

// $('.image-slider').slick(sickPrimary);
// $('.slider-text').slick(sickSecondary);


TweenMax.from(".logo", 1, {
    delay: 3,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
})
TweenMax.from(".logo h1", 1.4, {
    delay: 3.5,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".menu ul li", 1, {
    delay: 3.2,
    opacity: 0,
    x: -110,
    ease: Expo.easeInOut
}, 0.1)

TweenMax.from(".ellipse-container", 1, {
    delay: 2,
    opacity: 0,
    x: -110,
    ease: Expo.easeInOut
})

TweenMax.from(".yellow", 1, {
    delay: 3,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.from(".circle1", 1, {
    delay: 2.9,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".circle2", 1, {
    delay: 2.3,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".circle1 span", 1.2, {
    delay: 3.1,
    opacity: 0,
    x: 110,
    ease: Expo.easeInOut
})

TweenMax.from(".circle2 span", 1.2, {
    delay: 2.5,
    opacity: 0,
    x: -110,
    ease: Expo.easeInOut
})

TweenMax.from(".slider-content .title", 1, {
    delay: 2.6,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
})

TweenMax.from(".slider-content p", 1, {
    delay: 3.2,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
})

TweenMax.from(".watchnow", 1.5, {
    delay: 2.7,
    x: 360,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(".media ul li", 1, {
    delay: 3,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
}, 0.08)

TweenMax.from(".scrolldown", 1, {
    delay: 3.7,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
})



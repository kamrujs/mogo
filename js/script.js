// Js Plugin

// ----banner slider
$('.banner_slider').slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (slider, i) {
        return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '<i class="fa fa-sort-asc"></i></button>';
    },
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
// ----banner slider



// ----banner slider
$('.counter').counterUp({
    delay: 10,
    time: 500
});
// ----banner slider


// ----msg_slider slider
$('.msg_slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-chevron-left left_arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right right_arrow"></i>',
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
// ----msg_slider slider


// ----say_slider slider
$('.say_slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-chevron-left left_arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right right_arrow"></i>',
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 376,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// ----say_slider slider


// ----grid aline
$('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnheight: 40
});

// ----grid aline


// ----derHover
$('.grid_img').directionalHover({
    overlay: "overlay",
    easing: "swing",
    // <a href="https://www.jqueryscript.net/animation/">Animation</a> speed in ms
    speed: 220,
});
// ----derHover


// ----derHover
$(".map_click").click(function () {
    $(".location").fadeToggle()
})
// ----derHover


// ----scroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
});
// ----scroll


// ====back to top 
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 300) {
        back_to_top.style.display = "block";
    } else {
        back_to_top.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// ====back to top 





// ====annimation
AOS.init({

});
// ====annimation
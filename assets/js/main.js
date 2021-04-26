var MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight = '0px';

function menutoggle() {
    if (MenuItems.style.maxHeight == '0px') {
        MenuItems.style.maxHeight = '200px';
    } else {
        MenuItems.style.maxHeight = '0px';
    }
}

// Modal
var modal = document.getElementById("myModal");


document.getElementById("mi-sitio").addEventListener("click", function() {
    modal.style.display = "block";
    document.body.classList.add('scroll-body');
})


document.getElementsByClassName("close")[0].addEventListener("click", function() {
    modal.style.display = "none";
    document.body.classList.remove('scroll-body');
})


window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove('scroll-body');
    }
})



// sliders 

$('.sliders-consiguelo-1').each(function(key, item) {
    var id = $(this).attr('id')
    var sliderId = '#' + id
    var appenArrowsClassName = '#' + id + 'slider__arrows';

    var $prev = $(item).siblings('.prev');
    var $next = $(item).siblings('.next');
    console.log(item)

    $(sliderId).slick({
        autoplay: false,
        autoplaySpeed: 3500,
        dots: true,
        infinite: true,
        prevArrow: $prev,
        nextArrow: $next,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 7000,
    })
})


$('.sliders-consiguelo').each(function(key, item) {
    var id = $(this).attr('id')
    var sliderId = '#' + id
    var appenArrowsClassName = '#' + id + 'slider__arrows';

    var $prev = $(item).siblings('.prev');
    var $next = $(item).siblings('.next');
    console.log(item)

    $(sliderId).slick({
        autoplay: false,
        autoplaySpeed: 3500,
        dots: true,
        infinite: true,
        prevArrow: $prev,
        nextArrow: $next,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplaySpeed: 7000,
        responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }
        ]
    })
})
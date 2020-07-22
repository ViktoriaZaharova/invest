$("body").on("click", ".btn-click-top", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});

// modal
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});

// отправка заявки с формы обратной связи на почту
$(document).ready(function () {

    $(".form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $(".form").trigger("reset");
        });
        return false;
    });

});
// end

//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});



$('[name=phone]').mask("+7(999) 999-99-99");

// slider
$('.auto-slider').slick({
    slidesToShow: 3,
    dots: true,
    speed: 300,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                centerMode: true,
                variableWidth: true,
                dots: false,
                appendArrows: '.auto-slider__nav'
            }
        }
    ]
});

$('.carpark-slider').slick({
    slidesToShow: 3,
    speed: 300,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                centerMode: true,
                variableWidth: true,
                dots: false,
                appendArrows: '.carpark-slider__nav'
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                centerMode: true,
                variableWidth: true,
                dots: false,
                appendArrows: '.carpark-slider__nav'
            }
        }
    ]
});


$('.auto-box').fancybox({
    thumbs          : false,
    arrows          : true,
    infobar: false,
    buttons: [
        "close"
    ],
});

$("body").on("click", ".btn-scroll-top", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});

var btn = $('.btn-scroll-top');
var mainHeight = $('main').height();

$(window).scroll(function() {
    if ($(window).scrollTop() > mainHeight) {
        btn.css('display', 'flex');
    } else {
        btn.css('display', 'none');
    }
});
btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});

$('.menu-close').click(function () {
   $('.mobile-menu').slideUp();
});

$('.btn-burger').click(function () {
    $('.mobile-menu').slideDown();
});

// активная ссылка меню
$('.menu li a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location == link) {
        $(this).addClass('current');
    }
});
// end

// Инициализация карты
ymaps.ready(init);

function init () {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map', {
        center: [68.883790, 33.079095],
        zoom: 15
    });

    // Создание своей метки
    var myPlacemark = new ymaps.Placemark(
        // Координаты метки
        [68.883790, 33.079095] , {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/location-map.svg',  // картинка иконки
            iconImageSize: [81, 113],                                      // размеры картинки
            iconImageOffset: [0, 0],// смещение картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);

    //Элементы управления
    myMap.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', { right: 5, top: 75 })
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}
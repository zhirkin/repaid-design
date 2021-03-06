// document.addEventListener('DOMContentLoaded', () => {
//   const modal = document.querySelector('.modal'),
//     modalBtn = document.querySelectorAll('[data-toggle="modal"]'),
//     closeBtn = document.querySelector('.modal__close');

//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   };

//   modalBtn.forEach(item => {
//     item.addEventListener('click', (event) => {
//       if(event.target === item) {
//         switchModal();
//       }
//     });
//   });
//   modal.addEventListener('click', (event)=> {
//     const target = event.target;
//     if(target === closeBtn) {
//       switchModal();
//     }
//     if(target === modal) {
//       switchModal();
//     }
//   });
//   document.addEventListener('keydown', (event)=> {
//     if(event.key === 'Escape') {
//       modal.classList.remove('modal--visible');
//     }
//   });
// });

$(document).ready(function () {
    const modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');
    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {

        modal.toggleClass('modal--visible');
    });
    const mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    const next = $('.swiper-button-next');
    const prev = $('.swiper-button-prev');
    const bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 23 + bullets.width() + 23);
    bullets.css('left', prev.width() + 22);

    (function (jq) {
        jq.autoScroll = function (ops) {
            ops = ops || {};
            ops.styleClass = ops.styleClass || 'button-up';
            var t = jq('<div class="' + ops.styleClass + '"></div>'),
                d = jq(ops.target || document);
            jq(ops.container || 'body').append(t);

            t.css({
                opacity: 0,
                position: 'absolute',
                top: 0,
                right: 0
            }).on('click', function () {
                jq('html,body').animate({
                    scrollTop: 0
                }, ops.scrollDuration || 1000);
            });

            d.scroll(function () {
                var sv = d.scrollTop();
                if (sv < 300) {
                    t.clearQueue().fadeOut(ops.hideDuration || 200);
                    return;
                }

                t.css('display', '').clearQueue().animate({
                    top: sv,
                    opacity: 0.8
                }, ops.showDuration || 500);
            });
        };
    })(jQuery);

    $.autoScroll({
        scrollDuration: 600,
        showDuration: 600,
        hideDuration: 300
    });

    new WOW().init();

    //Валидация формы
    $('.modal__form').validate({
        errorClass: "invalid",
        errorElement: "div",
        rules: {
            // Строчное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
            // Правило-объект (блок)
            userEmail: {
                required: true,
                email: true
            },
            policyCheckbox: "required",
        }, // сообщения
        errorPlacement: function (error, element) {
            if (element.attr("type") == "checkbox") {
                return element.next('label').append(error);
            }

            error.insertAfter($(element));
        },
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не длиннее пятнадцати букв"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
                required: "Обязательно укажите email",
                email: "Введите в формате name@domain.com"
            },
            policyCheckbox: "Согласие обязательно",
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                    const popUp = $('.modal-thanks');
                    popUp.addClass('modal-thanks--visible');
                    setTimeout(function () {
                        popUp.removeClass('modal-thanks--visible');
                    }, 5000);
                }
            });
        }
    });
    // маска для телефона
    $('[type=tel]').mask('+7(000)000-00-00');
    //Валидация формы
    $('.footer__form').validate({
        errorClass: "invalid",
        errorElement: "div",
        rules: {
            // Строчное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
            // Правило-объект (блок)
            userQuestion: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            policyCheckbox: "required",
        }, // сообщения
        errorPlacement: function (error, element) {
            if (element.attr("type") == "checkbox") {
                return element.next('label').append(error);
            }

            error.insertAfter($(element));
        },
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не длиннее пятнадцати букв"
            },
            userPhone: "Телефон обязателен",
            policyCheckbox: "Согласие обязательно",
            userQuestion: {
                required: "Обязательно задайте вопрос",
                minlength: "Вопрос не короче двух букв",
                maxlength: "Вопрос не длиннее пятнадцати букв"
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                }
            });
        }
    });
    // маска для телефона
    $('[type=tel]').mask('+7(000)000-00-00');
    //Валидация формы
    $('.control__form').validate({
        errorClass: "control-invalid",
        errorElement: "div",
        rules: {
            // Строчное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
            policyCheckbox: "required",
        }, // сообщения
        errorPlacement: function (error, element) {
            if (element.attr("type") == "checkbox") {
                return element.next('label').append(error);
            }

            error.insertAfter($(element));
        },
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не длиннее пятнадцати букв"
            },
            userPhone: "Телефон обязателен",
            policyCheckbox: "Согласие обязательно",
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                }
            });
        }
    });
    // маска для телефона
    $('[type=tel]').mask('+7(000)000-00-00');
    ymaps.ready(function () {
        const myMap = new ymaps.Map('map', {
                center: [47.244729, 39.723187],
                zoom: 17
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Наш офис',
                balloonContent: 'Вход со двора'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/location.png',
                // Размеры метки.
                iconImageSize: [32, 32],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            });
        myMap.geoObjects
            .add(myPlacemark);
    });
});
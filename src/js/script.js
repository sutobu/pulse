$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('ul.catalogue__tabs').on('click', 'li:not(.catalogue__onetab_active)', function() {
        $(this)
          .addClass('catalogue__onetab_active').siblings().removeClass('catalogue__onetab_active')
          .closest('div.container').find('div.catalogue__content').removeClass('catalogue__content_active').eq($(this).index()).addClass('catalogue__content_active');
      });

    function toggleSlide(item){
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalogue-item__content').eq(i).toggleClass('catalogue-item__content_active');
                $('.catalogue-item__list').eq(i).toggleClass('catalogue-item__list_active');
            })
        })
    };

    toggleSlide('.catalogue-item__link');
    toggleSlide('.catalogue-item__back');


    //modal

    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.button_mini').each(function(i){
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalogue-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    
    // $('#consultation-form').validate({});
    // $('#consultation form').validate({
    //     rules: {
    //         name: "required",
    //         phone: "required",
    //         email: {
    //           required: true,
    //           email: true
    //         }
    //     },
    //     messages: {
    //         name: "Будь-ласка впишіть Ваше ім'я",
    //         phone: "Будь-ласка впишіть Ваш номер телефону",
    //         email: {
    //           required: "Нам потрібен Ваш e-mail для контакту з вами",
    //           email: "Неправильний формат e-mail"
    //         }
    //     },
    // });
    // $('#order form').validate({});

    function valideForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                phone: "required",
                email: {
                  required: true,
                  email: true
                }
            },
            messages: {
                name: {
                    required: "Будь-ласка впишіть Ваше ім'я",
                    minlength: jQuery.validator.format("Мінімум {0} символа!")
                },
                phone: "Будь-ласка впишіть Ваш номер телефону",
                email: {
                  required: "Нам потрібен Ваш e-mail для контакту з вами",
                  email: "Неправильний формат e-mail"
                }
            },
        });
    }

    valideForms('#consultation form');
    valideForms('#consultation-form');
    valideForms('#order form');

    $('input[name=phone]').mask("+38 (999) 999-99-99");
});
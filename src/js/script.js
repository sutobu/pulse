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
});
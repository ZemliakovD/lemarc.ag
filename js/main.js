$(function(){

    $('.main-slider').slick(
        {
            prevArrow: '<button type="button" class="main-back"></button>',
            nextArrow: '<button type="button" class="main-next"></button>',
        }
    );



    $('.products-slider').slick(
        {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="products-back"></button>',
        nextArrow: '<button type="button" class="products-next"></button>',
        }
    );
});
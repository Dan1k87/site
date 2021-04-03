$(document).ready(function(){

	$('.main-slider').slick({
		accessibility: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		dots:true,
		arrows: false
	});

	$('.product-list-slider').slick({
		infinite: false,
		accessibility: true,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		rows: 2,
		dots: true,
		prevArrow: $('.product-slider-arrows__arrow_prev'),
		nextArrow: $('.product-slider-arrows__arrow_next'),
		responsive:[
			{
				breakpoint: 1070,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 510,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					rows: 1,
				}
			}
		]
	});


	$('.product-list-slider').find('.slick-dots').find('li').each(function(index){
		if($(this).hasClass('slick-active')){
			$('.product-slider-arrows__current').text(index + 1);
		}
	});
	$('.product-slider-arrows__total').text($('.product-list-slider').find('.slick-dots').find('li').length);

	$('.product-list-slider').on('afterChange', function(event, slick, currentSlide){
		$(this).find('.slick-dots').find('li').each(function(index){
			if($(this).hasClass('slick-active')){
				$('.product-slider-arrows__current').text(index + 1);
			}
		});
	});

});
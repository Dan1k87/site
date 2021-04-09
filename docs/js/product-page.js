$(document).ready(function(){

	$('.like-products').slick({
		accessibility: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		arrows: true,
		responsive:[
			{
				breakpoint: 760,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 510,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});
	
	$('.viewed-products').slick({
		accessibility: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		arrows: true,
		responsive:[
			{
				breakpoint: 760,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 510,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});

	$('.product-bigimages-slider').slick({
		accessibility: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		arrows: false,
		fade: true,
		asNavFor: '.product-small-images__list',
	});

	$('.product-small-images__list').slick({
		accessibility: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		arrows: false,
		centerMode: true,
		focusOnSelect: true,
		asNavFor: '.product-bigimages-slider',
	});

});
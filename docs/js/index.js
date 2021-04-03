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
		accessibility: false,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		rows: 2,
		slidesPerRow:1,
		dots: true,
		responsive:[
			{
				breakpoint: 1070,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

});
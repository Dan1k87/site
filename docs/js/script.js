
var $width = $(window).width();

//Задаем фоновое изображение для родительского блока из элемент img
$('.ibg').each(function(index){
	var imageUrl = $(this).find('img').attr('src');
	$(this).css('background-image', 'url('+ imageUrl +')');
});
///////////////////////////////////////////

//Показываем - скпываем форму входа в личный кабинет
$('.sub-menu__link_login').click(function(e){
	e.preventDefault();
	$('.login').toggleClass('login_active');
});
$('.login__close').click(function(){
	$('.login').toggleClass('login_active');
});
///////////////////////////////////////////

//Показываем - скрываем меню по клику на бургер
$('.menu__burger').click(function(){
	$(this).toggleClass('burger_active');
	$('.menu__box').toggleClass('menu__box_active');
	$('.wrap').toggleClass('wrap_of-hidden');
});
///////////////////////////////////////////

//Показываем - скрываем категории по клику на бургер
$('.categories-btn__burger').click(function(){
	$(this).toggleClass('burger_active');
	if($(this).hasClass('burger_active') && $width <= 960){
		$('.wrap').addClass('wrap_of-hidden');
	}else{
		$('.wrap').removeClass('wrap_of-hidden');
	}
	$('.categories__header').toggleClass('categories__header_active');
	$('.categories__body').toggleClass('categories__body_active');
	$('.categories__list').toggleClass('categories__list_active');
	$('.categories-btn').toggleClass('categories-btn_active');
});
///////////////////////////////////////////

//Показываем - скрываем сложенные категории при наведении на родительскую категорию
var subListItemDuration = $('.sub-list__item').css('transitionDuration').replace('s', '') / 2;
var timer;
if($width > 960){
	$('.categories-list__item_has-sub').hover(function(){
		clearTimeout(timer);
		$('.content__aside').removeClass('content__aside_active');
		$('.content__aside').addClass('content__aside_active');
		$(this).find('.sub-list__item').toggleClass('sub-list__item_active');
		$(this).find('.categories-list__sub-list').toggleClass('categories-list__sub-list_active');
	},function(){
		$(this).find('.sub-list__item').toggleClass('sub-list__item_active');
		$(this).find('.categories-list__sub-list').toggleClass('categories-list__sub-list_active');
		timer = setTimeout(function(){
			$('.content__aside').toggleClass('content__aside_active');
		}, subListItemDuration * 500);
	});
}else{
	$('.categories-list__item_has-sub').click(function(e){
		e.preventDefault();
		if($(this).hasClass('categories-list__item_active')){
			$(this).removeClass('categories-list__item_active');
			$(this).find('.categories-list__sub-list').toggleClass('categories-list__sub-list_active');
			$(this).find('.sub-list__item').toggleClass('sub-list__item_active');
			$('.categories__body').toggleClass('categories__body_top');
			return false;
		}
		$(this).toggleClass('categories-list__item_active');
		$(this).find('.categories-list__sub-list').toggleClass('categories-list__sub-list_active');
		$(this).find('.sub-list__item').toggleClass('sub-list__item_active');
		$('.categories__body').toggleClass('categories__body_top');
	});
}
///////////////////////////////////////////

//Перемещаем элементы в другие элементы при изменении ширины экрана
$(window).on('load resize', function() {
	$width = $(window).width();
	if($width <= 450){
		$('.menu__list').append($('.sub-menu'))
	}else{
		$('.header__sub-menu').append($('.sub-menu'));
	}
	if($width <= 760){
		$('.m-login').append($('.login'))
	}else{
		$('.sub-menu__link_login').parent('.sub-menu__item').append($('.login'));
	}
	if($width <= 960){
		$('.categories-mobile').append($('.categories'));
		$('.categories-btn__burger').removeClass('burger_active');
		$('.categories__header').removeClass('categories__header_active');
		$('.categories__body').removeClass('categories__body_active');
		$('.categories__list').removeClass('categories__list_active');
		$('.categories-btn').removeClass('categories-btn_active');
	}else{
		$('.aside').prepend($('.categories'));
	}
});
///////////////////////////////////////////

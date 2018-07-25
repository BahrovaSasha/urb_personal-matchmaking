$(document).ready(function(){
// 			$('.row.adwantages-content').slick({
// 				speed: 300,
// 				infinite: true,
// 				slidesToShow: 3,
// 				slidesToScroll: 1,
// 				prevArrow: '<span class="arrow left_arrow"><i class="fas fa-chevron-left"></i></span>',
// 				nextArrow: '<span class="arrow right_arrow"><i class="fas fa-chevron-right"></i></span>',
// 				appendArrows: '.adwantages'


$(function() {

});

$(function() {
	var header = $(".header-pm");
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 200) {
			header.addClass("fixed");
		} else {
			header.removeClass('fixed');
		}
	});
});

$('.adwantages-content').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	//asNavFor: '.ladies-video_slider',
	focusOnSelect: true,
	infinite: true,
	adaptiveHeight: true,
	appendArrows: '.adwantages-content',
	prevArrow: '<button type="button" class="adwantages-arrow left-arrow"><i class="fas fa-chevron-left"></i></button>',
	nextArrow: '<button type="button" class="adwantages-arrow right-arrow"><i class="fas fa-chevron-right"></i></button>',
	infinite: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

// ladies video section
$('.ladies-video_slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	//asNavFor: '.ladies-video_slider-nav'
});
$('.ladies-video_slider-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	//asNavFor: '.ladies-video_slider',
	focusOnSelect: true,
	infinite: true,
	adaptiveHeight: true,
	appendArrows: '.ladies-video_slider-nav',
	prevArrow: '<button type="button" class="ladies-video_arrow left-arrow"><i class="fas fa-chevron-left"></i></button>',
	nextArrow: '<button type="button" class="ladies-video_arrow right-arrow"><i class="fas fa-chevron-right"></i></button>',
	infinite: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});
});

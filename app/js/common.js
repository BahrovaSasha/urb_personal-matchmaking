$(function() {
	// $(document).ready(function(){
  //       $('.row.adwantages-content').slick({
  //         speed: 300,
	// 				infinite: true,
  // 				slidesToShow: 3,
  // 				slidesToScroll: 1,
  //         prevArrow: '<span class="arrow left_arrow"><i class="fas fa-chevron-left"></i></span>',
  //         nextArrow: '<span class="arrow right_arrow"><i class="fas fa-chevron-right"></i></span>',
  //         appendArrows: '.adwantages'
  //       });
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

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});

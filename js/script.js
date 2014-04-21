// reposition slide when windows resize
$(window).resize(function () {
	$("#slider").height($(window).height());
	//	$(".slide-h").css("padding-top", $(window).height() - 300);
	// affix the navbar after scoll below header
	$('#top-nav').affix({
		offset: {
			top: $("#slider").height() - 50
		}
	});
});
$(window).trigger('resize');

//Add Hover effect to menus
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn();
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut();
});

// Slide
$('.slider').glide({
	autoplay: 4000,
	arrowRightText: '<i class="fa fa-angle-right fa-3x"></i>',
	arrowLeftText: '<i class="fa fa-angle-left fa-3x"></i>'
});

$(document).ready(function() {
	
	$('.columns').mouseenter(function() {
		$(this).fadeTo('fast', 0.5);
	});

	$('.columns').mouseleave(function() {
		$(this).fadeTo('fast', 1);
	});

})
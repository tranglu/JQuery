//ready, bước đầu của js
$(function() {
	
	$('.mot-khoi p').slideUp();
	$('.mot-khoi h3').click(function(event) {
		//$('.mot-khoi p').slideUp();
		//$('.mot-khoi h3').removeClass('mau-vang');
		$(this).next().slideToggle();
		$(this).toggleClass('mau-vang');
	});
	
});

//ready, bước đầu của js
$(function() {
	
	$('.dang-ky').animate({opacity:0,marginLeft:-100});	
	$('.nut1').click(function(event) {
		event.preventDefault();
		$('.dang-nhap').animate({opacity:0,marginLeft:-100});
		$('.dang-ky').animate({opacity:1,marginLeft:800});
		console.log("nhấn nút 1 nè");	
	});
	$('.nut').click(function(event) {
		event.preventDefault();
		$('.dang-ky').animate({opacity:1,marginLeft:800});
		$('.dang-nhap').animate({opacity:0,marginLeft:-100});
		console.log("nhấn nút 2 nè");
	});
	
});

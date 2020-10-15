$(function() {
	$('.menu ul li:nth-child(1) a').on('click', function(event){
		event.preventDefault();
		 $('html,body').animate({scrollTop:$('.chapter1').offset().top},1300,"easeOutExpo");
	});
	$('.menu ul li:nth-child(2) a').on('click', function(event){
		event.preventDefault();
		 $('html,body').animate({scrollTop:$('.chapter2').offset().top},1300,"easeOutElastic");
		

	});
	$('.menu ul li:nth-child(3) a').on('click', function(event){
		event.preventDefault();
		 $('html,body').animate({scrollTop:$('.chapter3').offset().top},1300,"easeOutCubic");
	});
	$('.menu ul li:nth-child(4) a').on('click', function(event){
		event.preventDefault();
		 $('html,body').animate({scrollTop:$('.chapter4').offset().top},1300,"easeInQuart");
	});
	$('i').on('click', function(event){
		event.preventDefault();
		 $('html,body').animate({scrollTop:0},300);
	});
});
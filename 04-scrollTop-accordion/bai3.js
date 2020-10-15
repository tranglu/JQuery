$(function() {
	$('.mot-khoi').click(function(event){
		event.preventDefault();
		 $('html,body').animate({scrollTop:($(this).offset().top)},300);
	});
	$('i').click( function(event){
		event.preventDefault();
		 $('html,body').animate({scrollTop:0},300);
	});
});
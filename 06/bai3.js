$(function() {
TweenMax.staggerFrom($('.khung'),0.5,{top:100,opacity:0},0.3);
$('.noi-dung-them').slideUp(0);
$('.load-them').click(function(event){
	$('.noi-dung-them').slideDown();
	TweenMax.staggerFrom($('.noi-dung-them .khung'),0.5,{top:100,opacity:0},0.3);
});
});
se
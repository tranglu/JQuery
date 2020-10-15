//ready, bước đầu của js
$(function() {
	
	$('.mot-khoi .noi-dung-khoi').slideUp();
	$('.mot-khoi h3').click(function(event) {
		$(this).next().slideToggle(800);
		$(this).toggleClass('mau-vang');
	});
	//code cho phan phong to anh
	// $('.hinh-anh a').fancybox();
	$(".hinh-anh a[rel=example_group]").fancybox({
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
			});
});

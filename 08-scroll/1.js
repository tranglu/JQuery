$(function() {
	 new WOW().init();
	 // TweenMax.staggerFrom($('.khung-nho'),1,{right:300,opacity:1},0.3);
	 $("a.image-box").fancybox();
	 // $(".khung-nho a[rel=example_group]").fancybox({
		// 		'transitionIn'		: 'none',
		// 		'transitionOut'		: 'none',
		// 		'titlePosition' 	: 'over',
		// 		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
		// 			return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		// 		}
		// 	});
	 // di chuyển đổi màu menu
	$(window).scroll(function(event){
		var viTri=$('html,body').scrollTop();
		var viTriService=$('.service').offset().top;
		var viTriKhung=$('.khung').offset().top;
		if(viTri>viTriService){
			$('.navbar').addClass('bg-black');
		}
		else{
			$('.navbar').removeClass('bg-black');
		};

		if(viTri>viTriKhung){
			$('.navbar').removeClass('bg-black');
		}
	});
	//one page website
	$(function() {
	$('.collapse ul li.nav-item:nth-child(1) a').click( function(event){
		event.preventDefault();
		$('li.nav-item').removeClass('active');
		$(this).parent().addClass('active');
		 $('html,body').animate({scrollTop:$('.about').offset().top},1300);
	});
	$('.collapse ul li.nav-item:nth-child(2) a').click( function(event){
		event.preventDefault();
		$('li.nav-item').removeClass('active');
		$(this).parent().addClass('active');
		
		 $('html,body').animate({scrollTop:$('.service').offset().top+1},1300);
	});
	$('.collapse ul li.nav-item:nth-child(3) a').click( function(event){
		event.preventDefault();
		$('li.nav-item').removeClass('active');
		$(this).parent().addClass('active');
		 $('html,body').animate({scrollTop:$('.portfolio').offset().top},1300);
		 
	});
	$('.collapse ul li.nav-item:nth-child(4) a').click( function(event){
		event.preventDefault();
		$('li.nav-item').removeClass('active');
		$(this).parent().addClass('active');
		 $('html,body').animate({scrollTop:$('.contact').offset().top},1300);
	});
	$('i.truot-len').click(function(event){
		event.preventDefault();
		 $('html,body').animate({scrollTop:0},300);
	});
});
});
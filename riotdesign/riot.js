$(function() {
	$(window).scroll(function(event){
		var viTri=$('html,body').scrollTop();
		var viTri1=$('.hinhnen1').offset().top;
		var viTri2=$('.hinhnen2').offset().top;
		var viTri3=$('.hinhnen3').offset().top;
		var viTri4=$('.hinhnen4').offset().top;
		if(viTri>viTri1){
			$('.hinhnen1').addClass('zoom');
		}
		else if(viTri>viTri2){
			$('.hinhnen1').removeClass('zoom');
			$('.hinhnen2').addClass('zoom');
		}
		else if(viTri>viTri3){
			$('.hinhnen2').removeClass('zoom');
			$('.hinhnen3').addClass('zoom');
		}
		else if(viTri>viTri4){
			$('.hinhnen3').removeClass('zoom');
			$('.hinhnen4').addClass('zoom');
		}
		else{
			$('.hinhnen4').removeClass('zoom');
		};

		
	});
	$('button.navbar-toggler').click(function(event){
		$('.menu').addClass('xuat-hien');
		$('.noi-dung').addClass('giau-di');
	});
	$('button.btn.btn-link').click(function(event){
		$('.menu').removeClass('xuat-hien');
		$('.noi-dung').removeClass('giau-di');
	});;
	
});
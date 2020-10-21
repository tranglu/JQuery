$(function() {
       
       
           var chuyendong=1;
      $(window).scroll(function(event) {            	
      	var viTri = $('html,body').scrollTop();
        var viTriService = $('.service').offset().top - 600;
        var viTriFooter = $('footer').offset().top-100;      
          $(window).bind('mousewheel', function(event) {
              if (viTri > viTriService&&chuyendong==2) {
              TweenMax.fromTo($('.img-fluid'), 1, { scale: "1.2" },{ scale: "1" });             
              chuyendong=1;
              }             
             else {
              if (viTri > viTriService&&chuyendong==1) {
              	 TweenMax.fromTo($('.img-fluid'), 1, { scale: "1" },{ scale: "1.2" });
              chuyendong=2;
              console.log('có chạy2');
              };              
            }
          })
         
  //         $(window).bind('mousewheel', function(event) {
          	
  //         	  if (event.originalEvent.wheelDelta < 0) {
  //             if (viTri > viTriService) {
             
		// cd.to($('.img-fluid'), 0.5,{ scale:1.05 })
		// .to($('.img-fluid'), 0.5,{ scale:1.1 })
		// .to($('.img-fluid'), 0.5,{ scale:1.15 })
		// .to($('.img-fluid'), 0.5,{ scale:1.2 });
		
  //             };
  //             console.log('cuộn chuột xuống') ;
  //           };
  //           chuyendong=2
            
  //         });
          

      });
});
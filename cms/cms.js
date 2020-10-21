$(function() {
	//active li nav
   
	//nút i
    $(window).scroll(function(event) {
        var viTri = $('html,body').scrollTop();
        // var viTriTinMoi = $('.tin-moi').offset().top;
        if (viTri > 400) {
            $('i.scroll-top').addClass('xuat-hien');
        } else {
            $('i.scroll-top').removeClass('xuat-hien');
        };
    });
    $('i.scroll-top').click(function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 300);
    });

    //li trượt phải
    $(".list li").hover(function() {
        $(this).addClass('truot-sang');
    });
    $(".list li").mouseleave(function() {
        $(this).removeClass('truot-sang');
    });
    
//bg-overlay hiện ra
    $(".khoi-hinh").hover(function() {
        var mauDen = $(this).children().eq(1);
        $(mauDen).addClass('truot-len');
    });

    $(".khoi-hinh").mouseleave(function() {
        var mauDen = $(this).children().eq(1);
        $(mauDen).removeClass('truot-len');
    });

//
//$( "li" ).hover(
//   function() {
//     $( this ).append( $( "<span> ***</span>" ) );
//   }, function() {
//     $( this ).find( "span" ).last().remove();
//   }
// );
 
// $( "li.fade" ).hover(function() {
//   $( this ).fadeOut( 100 );
//   $( this ).fadeIn( 500 );
// });
//  $( "div" ).mousemove(function( event ) {
//   var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
//   var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
//   $( "span" ).first().text( "( event.pageX, event.pageY ) : " + pageCoords );
//   $( "span" ).last().text( "( event.clientX, event.clientY ) : " + clientCoords );
// });
});
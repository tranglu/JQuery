$(function() {
    var hieuUngDauTrang = new TimelineMax({onComplete: chay});
    hieuUngDauTrang
    	.to($('.nen'), 0.2, {opacity: 1})
        .from($('h2'), 0.5, { rotationZ: 100, opacity: 0 })
        .from($('h1'), 0.5, { y: 100, opacity: 0 },"+=1")
        .to($('h1'), 0.5, { y: -50})
        .to($('h1'), 0.2, { y: 0})
        .to($('h1'), 0.2, { y: -50})
        .to($('h1'), 0.2, { y: 0})
        .staggerTo($('.so'), 2, {rotateX:360, opacity: 1 }, 2, "+=1")
        .to($('.nen'), 0.2, {x: 1000, opacity: 0})
        .from($('.khung-to'), 0.2, {x: -1000, opacity: 1})
        .to($('.khung-to'), 0.2, {opacity: 1});

    cd = new TimelineMax({ paused: true });
    cd.staggerFrom($('.khung'), 0.5, { top: 100, opacity: 0 }, 0.3)
        .staggerTo($('.khung'), 0.5, { x: 1000, opacity: 0 }, 0.3, "+=2")
        .staggerTo($('.khung'), 0.5, { x: 0, opacity: 1 }, 0.3);
        function chay(){
        	cd.play();
        }
});
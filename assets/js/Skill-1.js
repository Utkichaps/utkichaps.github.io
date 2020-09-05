$(document).ready(function(){
  new WOW().init();
});
/*
var inView = false;

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#skills')) {
        if (inView) { return; }
        inView = true;
        new WOW().init();
    } else {
        inView = false;  
    }
});
*/


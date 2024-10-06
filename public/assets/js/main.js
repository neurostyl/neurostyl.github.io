
$(".lightninBox").lightninBox();
$(".jarallax").jarallax({
  speed: 0.5,
  imgWidth: 1366,
  imgHeight: 768,
});

// eslint-disable-next-line no-undef
$(document).ready(function () {
  /*
        var defaults = {
        containerID: 'toTop', // fading element id
        containerHoverID: 'toTopHover', // fading element hover id
        scrollSpeed: 1200,
        easingType: 'linear' 
        };
    */

  $().UItoTop({ easingType: "easeOutQuart" });
});

jQuery(document).ready(function($) {
    $(".scroll").click(function(event){		
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });
});

$(window).load(function(){
    $('.flexslider').flexslider({
      animation: "slide",
      start: function(slider){
        $('body').removeClass('loading');
      }
    });
  });

// https://stackoverflow.com/questions/9613594/scroll-event-firing-too-many-times-i-only-want-it-to-fire-a-maximum-of-say-on

var scrollTimer, lastScrollFire = 0;


//https://www.sitepoint.com/scroll-based-animations-jquery-css3/
animation_handler = function(){

  //checks position of window
  var vh = $(document).height();
  var window_top_position = $(document).scrollTop();
  var v_bottom_position = (window_top_position - vh);


  //Checks position of animating element
  var $right_element = $(".fade-right");
  var right_elementHeight = $right_element.outerHeight();
  var right_element_top_position = $right_element.offset().top;
  var right_element_bottom_position = (right_element_top_position + right_elementHeight);


  //if the 2 element come together then the animation class is inserted
  if((right_element_bottom_position >= window_top_position) && (right_element_top_position <= vh)){
    $right_element.addClass('fade-animation-right');
  } else {
    // $element.removeClass('fade-animation-right');
  }

  /*CHECKS LEFT ELEMENT POSITION*/
  var $left_element = $(".fade-left");
  var left_elementHeight = $left_element.outerHeight();
  var left_element_top_position = $left_element.offset().top;
  var left_element_bottom_position = (left_element_top_position + left_elementHeight);


  //if the 2 element come together then the animation class is inserted
  if((left_element_bottom_position >= window_top_position) && (left_element_top_position <= vh)){
    $left_element.addClass('fade-animation-left');
  } else {
    // $element.removeClass('fade-animation-right');
  }

}

$(window).on('scroll resize', function(){

  var minScrollTime= 400;
  var now = new Date().getTime();

  function processScroll(){
    console.log(new Date().getTime().toString());

    animation_handler();
  }

  if(!scrollTimer){
    if(now - lastScrollFire > (3*minScrollTime)){
      processScroll();
      lastScrollFireTime = now;
    }

    scrollTimer = setTimeout(function() {
      scrollTimer = null;
      lastScrollFireTime = new Date().getTime();
      processScroll();
    }, minScrollTime);
  }


});

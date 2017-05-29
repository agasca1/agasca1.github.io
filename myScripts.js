var mns = "main-nav-scrolled";
//var win_height = $(window).height();
//var nav_height = $(".main-nav").height();
//var win_width = $(window).width();


(function( $){
	$.fn.header_adjust = function( nav){
		var win_h = $(window).height();
		var	nav_h = $(".main-nav").height();
//true == nav means that nav does exsist(it's visible/should be) & therefore it's height should be taken into account
		if (win_h - nav_h > 950 || win_h > 950){ 
			this.height(950);
		}
		else if ( nav == true ){
			this.height(win_h - nav_h);
		}
		else{
			this.height(win_h);
		}
		
		return this;

	};
})(jQuery);


$( window ).scroll(function() {

	if( $(this).scrollTop() > $('header').height() + $('.main-nav').height() && $(window).width() > 430){
		$(".main-nav").addClass("main-nav-scrolled");

	} else if($(window).width() > 430){

		$(".main-nav").removeClass(mns);
	}
	//Here is where we take care of width 430: have the menu NOT stay when scrolling
	else if($(window).width() <= 430){
		//$(".main-nav").addClass("main-nav-scrolled");	//(Have it stay)
		$(".main-nav").hide();
		$(".cross").hide();
		$(".hamburger").show();

	}
	else {
		//$(".main-nav").removeClass(mns);
	}
});

$(window).resize(function(){
	

	if($(window).width() > 430){
		//so the height of header is the size of the window even when resized :D
		$("header").header_adjust(true);

		$(".cross").hide();
		$(".hamburger").hide();

		if($(".main-nav").is(":visible")){
			//so the header doesn't get stuck ontop when resized(mns is fixed postion)
			$(".main-nav").removeClass(mns); 
		}

		$(".main-nav").show();
	}
	else {
		$("header").header_adjust(false);

		if ($(".main-nav").is(":visible")&& !$(".hamburger").is(":visible")){
			$(".main-nav").hide();
		}
		$(".cross").hide();
		$(".hamburger").show();
		
	}
});

$(window).ready(function(){
	if($(window).width() > 430){
		$("header").header_adjust(true);


		$(".cross").hide();
		$(".hamburger").hide();
		$(".main-nav").show();
	}
	else{
		$("header").header_adjust(false);

		$(".cross").hide();
		$(".main-nav").hide();
		$(".hamburger").show();
	}	

	$(document).on("click", ".hamburger", function(event){
		$(".main-nav").slideToggle("slow", function() {
			$(".main-nav").addClass("main-nav-scrolled");
			$(".hamburger").hide();
			$(".cross").show();
		
		});
	});

	$(document).on("click", ".cross", function(event){
		$(".main-nav").slideToggle("slow", function(){
			$(".cross").hide();
			$(".hamburger").show();
		});
	});

});

/*
################### Some Code for timeline
@author Chris Coyier 
published: on march 27 3013
Code location: https://css-tricks.com/slide-in-as-you-scroll-down-boxes/

*/
(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).scroll(function(event) {
  
  $(".timeline-item").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});



var win = $(window);
var allMods = $(".timeline-item");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});
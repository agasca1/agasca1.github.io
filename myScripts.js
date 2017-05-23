var mns = "main-nav-scrolled";



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
		$("header").height($(window).height()- $(".main-nav").height());

		$(".cross").hide();
		$(".hamburger").hide();

		if($(".main-nav").is(":visible")){
			//so the header doesn't get stuck ontop when resized(mns is fixed postion)
			$(".main-nav").removeClass(mns); 
		}

		$(".main-nav").show();
	}
	else {
		$("header").height($(window).height());

		if ($(".main-nav").is(":visible")&& !$(".hamburger").is(":visible")){
			$(".main-nav").hide();
		}
		$(".cross").hide();
		$(".hamburger").show();
		
	}
});

$(window).ready(function(){
	if($(window).width()>430){
		$("header").height($(window).height()- $(".main-nav").height());


		$(".cross").hide();
		$(".hamburger").hide();
		$(".main-nav").show();
	}
	else{
		$("header").height($(window).height());

		$(".cross").hide();
		$(".main-nav").hide();
		$(".hamburger").show();

		$(".hamburger").click(function(){
			$(".main-nav").slideToggle("slow", function() {
				$(".main-nav").addClass("main-nav-scrolled");
				$(".hamburger").hide();
				$(".cross").show();
		
			});
		});

		$(".cross").click(function(){
			$(".main-nav").slideToggle("slow", function(){
				$(".cross").hide();
				$(".hamburger").show();
			});
		});
	}	
});



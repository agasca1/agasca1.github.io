var mn = $(".main-nav");
	mns = "main-nav-scrolled";
	hdr = $('header').height();

$(window).scroll(funtion() {
	if( $(this).scrollTop() > hdr ){
		mn.addClass(mns);
	} else{
		mn.removeClass(mns);

	}
});
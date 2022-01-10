if (typeof jQuery != 'undefined') { // check if jquery is loaded
	var sitewidth = 1050;
	$(document).ready(function() {
		// ************** MENU STICK ******************
		$(window).scroll(function(e){ 
			if ($(this).scrollTop() > $('#header_top').height()+1 && $('#container_header_menu').css('position') != 'fixed'){ 
				$('#container_header_menu').css({'position': 'fixed', 'top': '0px'});
				if ($(window).width() < sitewidth) {
					$('#container_header_menu').css({'width':'100%'});
				}
			}
			if ($(this).scrollTop() <= $('#header_top').height()+1 && $('#container_header_menu').css('position') != 'static'){ 
				$('#container_header_menu').css({'position': 'static', 'top': '0px'});
				if ($(window).width() < sitewidth) {
					$('#container_header_menu').css({'width':'auto'});
				}
			}
		});
		
		// ************* responsive menu *******************
		$('#header_mobile').click(function() {
			var topDist = $(window).scrollTop();
			var headMobDist = $('#header_mobile').offset().top+35;
			var newDist = headMobDist - topDist;
			if($('#content_menu').css('display') == 'none') {
				/*
				if (newDist) {
					$('#content_menu').css({'top':newDist+'px'});
				} else {
					$('#content_menu').css({'top':'35px'});
				}*/
				$('#content_menu').fadeIn();
			} else {
				$('#content_menu').fadeOut();
			}
		});
	});
}
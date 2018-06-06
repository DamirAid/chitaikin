$(function() {



$(".nav_blogs .tab").click(function() {
	$(".nav_blogs .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".nav_blogs .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".drop-down").click(function() {
		if ($(".drop-menu-main-sub").is(":visible")) {
			$(".drop-menu-main-sub").css("opacity", "1");
			$(".drop-menu-main-sub").fadeOut(600);
			$(".drop-menu-main-sub a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".drop-menu-main-sub").fadeIn(600);
			$(".drop-menu-main-sub a").addClass("fadeInUp animated");

		};

	});
			    $(document).mouseup(function () {

    	$(".drop-menu-main-sub").fadeOut(600);
			$(".drop-menu-main-sub a").addClass("fadeInUp animated");
    });




$(".top_blogs .tab").click(function() {
	$(".top_blogs .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".top_blogs .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});



	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});



	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};



	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	var owl =$(".slider");

$("#slider_container").owlCarousel({
      loop:true,
    responsive:{
        0:{
            items:1,
            nav:true   
        }
    },
    navText : ""

});



	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

});




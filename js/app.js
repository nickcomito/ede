// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).ready(function() {

	// Active states on input components
	$(document).on('click', '.input-component', function(e) {
		if ($(this).hasClass("active"))
			$(this).removeClass("active");
			$(this).addClass("active");
	});

	// Expand tooltips
	$(document).on('click', '.tip', function(e) {
		var tooltip = $(this).parent('.component-section').children(".tooltip-box");
		var tipHeight = tooltip.height();

		$(tooltip).css({"top":"-" + (tipHeight + 65) + "px"});
		$(tooltip).removeClass("inactive").fadeIn('fast');
		$(tooltip).addClass("active").fadeIn('fast');

		// Reposition the tooltip if it exceeds document bounds
		var tipOffset = tooltip.offset().top;
		//var docOffset = $(document).getBoundingClientRect().top;
		if (tipOffset < 0)
			$('body').css({"padding-top": (Math.abs(tipOffset) + 70) + "px"});
	});

	// Close tooltips by clicking anywhere in the document
	$('body').click(function() {
		var tooltip = $('.tooltip-box.active');
    tooltip.removeClass("active").fadeOut('fast');
    tooltip.addClass("inactive").fadeOut('fast');
    $('body').css("padding-top", "50px");
	});

	// Open a collapsed container
	$(document).on('click', '.advanced', function(e) {
		var collapsed = $(this).parents("div").children(".collapsed");
		$(collapsed).slideToggle('fast');
		$(this).toggleClass("active");
	});

	// Close an expanded container
	$(document).on('click', '.close', function(e) {
		var pContainer = $(this).parents(".collapsed");
		$(pContainer).slideToggle('fast');
		$(".advanced").removeClass("active");
	});
});
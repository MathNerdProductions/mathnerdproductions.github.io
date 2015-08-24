$(function(){
	
	$("video#spin").click(function(){
		
		$(this).get(0).playbackRate = 3;
		$(this).removeAttr("loop");
		$(this).on("ended", function(){
			
			$("video#spin").hide();
			$("video#explode").removeClass("hidden").show();
			$("video#explode").get(0).play();
			$("video#explode").delay(500).fadeOut(500, function(){
				$(this).hide();
				$("div.form").fadeIn(500);
			})
			
		});
		
	});
	
});
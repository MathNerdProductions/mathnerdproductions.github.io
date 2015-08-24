$(function(){
	
	$("video#spin").click(function(){
		
		$(this).get(0).playbackRate = 3;
		$(this).on("ended", function(){
			
			$("video#spin").hide();
			$("video#explode").show();
			$("video#explode").get(0).play();
			$("video#explode").delay(500).fadeOut(500, function(){
				$(this).hide();
				$("div.form").fadeIn(500);
			})
			
		});
		
	});
	
});
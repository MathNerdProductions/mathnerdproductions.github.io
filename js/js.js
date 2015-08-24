$(function(){
	
	$("video").click(function(){
		
		$(this).attr("src", "explode.mp4");
		$(this).removeAttr("loop").delay(1000).fadeOut(100, function(){
			$("div.form").fadeIn(300);
		});
		
	});
	
});
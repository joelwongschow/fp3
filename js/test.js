$(document).ready(function(){
	$(".top").mouseover(function() {
		$(".top").css("display", "none");
		$(".bottom").css("display", "block");
	});

	$(".top").mouseout(function() {
		$(".top").css("display", "block");
		$(".bottom").css("display", "none");
	});

})

$(document).ready(function() {

  $(".top").on({
    'mouseover' : function() {
      $(this).attr('src','http://media02.hongkiat.com/css3-code-slim/css3-markup.jpg');
    },
    mouseout : function() {
  $(this).attr('src','http://www.w3.org/html/logo/downloads/HTML5_Logo_512.png');
    }
  });
});

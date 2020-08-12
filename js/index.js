$(function(){
    // 横ナビ
    $(".btn-gnavi").on("click", function(){
		var rightVal = 0;
		if($(this).hasClass("open")) {
			rightVal = -300;
			$(this).removeClass("open");
		} else {
			$(this).addClass("open");
		}
		$(".menu-gnavi").stop().animate({
			right: rightVal
		}, 300);
    });

    $("#section01,#section02,#section03").on("mouseover", function(){
		if($(".btn-gnavi").hasClass("open")) {
			rightVal = -300;
			$(".btn-gnavi").removeClass("open");
		} 
		$(".menu-gnavi").stop().animate({
			right: rightVal
		}, 100);
    });
    
    $("h1").textillate({
        loop: false,
        in: {
            effect: 'fadeInDown',
            delay: 100
        }
    });
});
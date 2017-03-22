function banner(){	
	var bn_id = 0;
	var bn_id2= 1;
	var speed33=5000;
	var qhjg = 1;
    var MyMar33;
	$("#banner .d1").hide();
	$("#banner .d1").eq(0).fadeIn("slow");
	if($("#banner .d1").length>1)
	{
		$("#banner_id li").eq(0).addClass("nuw");
		function Marquee33(){
			bn_id2 = bn_id+1;
			if(bn_id2>$("#banner .d1").length-1)
			{
				bn_id2 = 0;
			}
			$("#banner .d1").eq(bn_id).css("z-index","2");
			$("#banner .d1").eq(bn_id).find(".scase1").animate({bottom:"-9999px"},800);
			$("#banner .d1").eq(bn_id).find(".scase2").animate({bottom:"-9999px"},1000);
			$("#banner .d1").eq(bn_id).find(".scase3").animate({bottom:"-9999px"},1200);
			$("#banner .d1").eq(bn_id).find(".sboss1").animate({bottom:"-9999px"},1400);
			$("#banner .d1").eq(bn_id).find(".stext1").animate({top:"-9999px"},1600);			
			$("#banner .d1").eq(bn_id).find(".sseven").animate({left:"-9999px"},800);
			$("#banner .d1").eq(bn_id).find(".sboss2").animate({right:"-9999px"},1000);
			$("#banner .d1").eq(bn_id).find(".stext2").animate({left:"-9999px"},1200);
			$("#banner .d1").eq(bn_id).find(".sprint").animate({left:"-9999px"},800);
			$("#banner .d1").eq(bn_id).find(".stext3").animate({right:"-9999px"},1000);
			$("#banner .d1").eq(bn_id).find(".sboss3").animate({bottom:"-9999px"},1200);			
			$("#banner .d1").eq(bn_id2).css("z-index","1");			
			$("#banner .d1").eq(bn_id2).find(".scase1").animate({bottom:"0px"},600);
			$("#banner .d1").eq(bn_id2).find(".scase2").animate({bottom:"0px"},800);
			$("#banner .d1").eq(bn_id2).find(".scase3").animate({bottom:"0px"},1000);
			$("#banner .d1").eq(bn_id2).find(".sboss1").animate({bottom:"0px"},1200);
			$("#banner .d1").eq(bn_id2).find(".stext1").animate({top:"80px"},1400);			
			$("#banner .d1").eq(bn_id2).find(".sseven").animate({left:"0px"},800);
			$("#banner .d1").eq(bn_id2).find(".sboss2").animate({right:"35px"},1000);
			$("#banner .d1").eq(bn_id2).find(".stext2").animate({left:"75px"},1200);
			$("#banner .d1").eq(bn_id2).find(".sprint").animate({left:"30px"},800);
			$("#banner .d1").eq(bn_id2).find(".stext3").animate({right:"33px"},1000);
			$("#banner .d1").eq(bn_id2).find(".sboss3").animate({bottom:"0px"},1200);			
			$("#banner .d1").eq(bn_id2).show();
			$("#banner .d1").eq(bn_id).fadeOut("slow");
			$("#banner_id li").removeClass("nuw");
			$("#banner_id li").eq(bn_id2).addClass("nuw");

			bn_id=bn_id2;
		};

		MyMar33=setInterval(Marquee33,speed33);
		
		$("#banner_id li").click(function(){
			var bn_id3 = $("#banner_id li").index(this);
			if(bn_id3!=bn_id&&qhjg==1)
			{
				qhjg = 0;
				$("#banner .d1").eq(bn_id).css("z-index","2");
				$("#banner .d1").eq(bn_id).find(".scase1").animate({bottom:"-9999px"},800);
				$("#banner .d1").eq(bn_id).find(".scase2").animate({bottom:"-9999px"},1000);
				$("#banner .d1").eq(bn_id).find(".scase3").animate({bottom:"-9999px"},1200);
				$("#banner .d1").eq(bn_id).find(".sboss1").animate({bottom:"-9999px"},1400);
				$("#banner .d1").eq(bn_id).find(".stext1").animate({top:"-9999px"},1600);			
				$("#banner .d1").eq(bn_id).find(".sseven").animate({left:"-9999px"},800);
				$("#banner .d1").eq(bn_id).find(".sboss2").animate({right:"-9999px"},1000);
				$("#banner .d1").eq(bn_id).find(".stext2").animate({left:"-9999px"},1200);
				$("#banner .d1").eq(bn_id).find(".sprint").animate({left:"-9999px"},800);
				$("#banner .d1").eq(bn_id).find(".stext3").animate({right:"-9999px"},1000);
				$("#banner .d1").eq(bn_id).find(".sboss3").animate({bottom:"-9999px"},1200);				
				$("#banner .d1").eq(bn_id3).css("z-index","1");
				$("#banner .d1").eq(bn_id3).find(".scase1").animate({bottom:"0px"},600);
				$("#banner .d1").eq(bn_id3).find(".scase2").animate({bottom:"0px"},800);
				$("#banner .d1").eq(bn_id3).find(".scase3").animate({bottom:"0px"},1000);
				$("#banner .d1").eq(bn_id3).find(".sboss1").animate({bottom:"0px"},1200);
				$("#banner .d1").eq(bn_id3).find(".stext1").animate({top:"80px"},1400);			
				$("#banner .d1").eq(bn_id3).find(".sseven").animate({left:"0px"},800);
				$("#banner .d1").eq(bn_id3).find(".sboss2").animate({right:"35px"},1000);
				$("#banner .d1").eq(bn_id3).find(".stext2").animate({left:"75px"},1200);
				$("#banner .d1").eq(bn_id3).find(".sprint").animate({left:"30px"},800);
				$("#banner .d1").eq(bn_id3).find(".stext3").animate({right:"33px"},1000);
				$("#banner .d1").eq(bn_id3).find(".sboss3").animate({bottom:"0px"},1200);				
				$("#banner .d1").eq(bn_id3).show();
				$("#banner .d1").eq(bn_id).fadeOut("slow",function(){qhjg = 1;});
				$("#banner_id li").removeClass("nuw");
				$("#banner_id li").eq(bn_id3).addClass("nuw");
				bn_id=bn_id3;
			}
		})
		$("#banner_id").hover(
			function(){
				clearInterval(MyMar33);
			}
			,
			function(){
				MyMar33=setInterval(Marquee33,speed33);
			}
		)	
	}
	else
	{
		$("#banner_id").hide();
	}
		
}
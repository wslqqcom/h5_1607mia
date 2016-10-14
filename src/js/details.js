
/********************	商品详情页数量计数器	*****************************/

window.onload=function()
{
	//数量框
	var xq_count=document.getElementById("xq_count");
	//按钮:增加
	var xq_add=document.getElementsByClassName("xq_add")[0];
	//按钮:减少
	var xq_reduce=document.getElementsByClassName("xq_reduce")[0];
	//默认值为1
	var i=1;
	//给  + 号一个点击事件
	xq_add.onclick=function(){
		//点击一次＋号，数量值加1
		xq_count.value=++i;
	}
	//给  - 号一个点击事件
	xq_reduce.onclick=function(){
		//判断当 值 <=0 时,不能 进行减法运算，反之可以
		if(xq_count.value<=0){
			return false;
		}else{
			xq_count.value=--i;
		}
	}
	
}




/*********************	jQuery 代   码	****************************/

$(document).ready(function(){
	
/******* 吸    顶    菜    单    *******/
	var _top =$(".r_xd").offset().top;
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop >= _top){
			$(".r_xd").css({"position":"fixed","top":0});
		}else{
			$(".r_xd").css({"position":"static"});
		}
		
	});
	


/*************** 详情       收起  展开 ***********************/	
	
	//1. 获取所有品牌  除了前6个li
	var $xq_li = $(".xiangxi li:gt(5)");
	//2.隐藏这些li
	$xq_li.hide();
	
	$(".xiangxi").css("height","100");
	
	$(".up_down").text("展开");
	//3.获取 
	var $up_down = $(".up_down");
	//点击
	$up_down.click(function(){
		//判断 $xq_li状态      显示/隐藏
		//如果是  显示/隐藏  状态，点击var $up_down后让其显示并改变 文字 和$(".xiangxi")的高度，反之
		if($xq_li.is(":hidden")){
			
			$xq_li.show();
			
			$(".xiangxi").css("height","200");
			
			$(".up_down").text("收起");
			
		}else{
			
			$xq_li.hide();
			
			$(".xiangxi").css("height","100");
			
			$(".up_down").text("展开");
		}
	});
	




/***************  tab 切 换    ***************/
	$(".spxq").addClass("changeColor")
	
	$(".myq").click(function(){
		$(this).addClass("changeColor").siblings().removeClass("changeColor")
		$(".miyaquan").show();
		$(".XQ_XQ").hide();
		$(".miyayoushi").hide();
		$(".wentizixun").hide();
		
	})
	$(".spxq").click(function(){
		$(this).addClass("changeColor").siblings().removeClass("changeColor")
		$(".XQ_XQ").show();
		$(".miyaquan").hide();	
		$(".miyayoushi").hide();
		$(".wentizixun").hide();
		
	})
	$(".adv").click(function(){
		$(this).addClass("changeColor").siblings().removeClass("changeColor")
		$(".miyayoushi").show();
		$(".miyaquan").hide();
		$(".XQ_XQ").hide();
		$(".wentizixun").hide();
	})
	$(".zx").click(function(){
		$(this).addClass("changeColor").siblings().removeClass("changeColor")
		$(".wentizixun").show();
		$(".miyayoushi").hide();
		$(".miyaquan").hide();
		$(".XQ_XQ").hide();
	});
	


/************** 鼠标滑过 底部的中间部分的  微信图标时，显示二维码  **********************/
	$("#ohover").mouseenter(function(){
		$("#toopli").show();
	});
	$("#ohover").mouseleave(function(){
		$("#toopli").hide()
	});
	


/**************** 鼠标滑过客服，显示号码  **********************/	
	$(".tel").mouseenter(function(){
		$("#tel").show()
	});
	$(".tel").mouseleave(function(){
		$("#tel").hide()
	});
	

/*************** 鼠标滑过 微信  显示二维码******************/
	$(".weixin").mouseenter(function(){
		$(".weixin_1").show()
	});
	$(".weixin").mouseleave(function(){
		$(".weixin_1").hide()
	});


/*****************点击.top 回到顶部****************/
	$(window).scroll(function(){
		$(".top").click(function(){
			$(document).scrollTop(0)
		});
		
	});




/**************滚动条滚动到 某一高度 显示  (左侧二维码    右侧图标) 并固定在屏幕上*********/
	$(window).scroll(function(){
		$(window).scrollTop(function(){
			if($(document).scrollTop()>=500)
			{
				$("#fixeLft").show(600);
				$("#fixeRight").show(600);
			}
			else{
				$("#fixeLft").hide(300);
				$("#fixeRight").hide(300);
			}
		});
	});



	var Arr1=[];
	var Arr2=[];
	var Arr3=[];
	var Arr4=[];
	$("#ADD").click(function(){
		var _price=$(this).parent().siblings(".price_box").find(".pbox_price").text();
		var _img=$(this).closest(".XQ_right").siblings(".XQ_left").find("img").attr("src");
		var _news=$(this).parent().siblings("p").find("#xq_introduce").text();
		var _count=$(this).parent().siblings(".xq_count_box").find("#xq_count").val();
		
		Arr1.push(_price)
		Arr2.push(_img)
		Arr3.push(_news)
		Arr4.push(_count)
		
		$.cookie("_price",Arr1)
		$.cookie("_img",Arr2)
		$.cookie("_news",Arr3)
		$.cookie("_count",Arr4)
		console.log($.cookie("_price"))
		console.log($.cookie("_img"))
		console.log($.cookie("_news"))
		console.log($.cookie("_count"))
	})
	
	
})





/**************************   首页   *******************************************/


$(document).ready(function(){
	
	//nav导航栏  鼠标滑过是下拉菜单
	$(".sec_box").on("mouseenter",function(){
		$(".sec_nav").fadeIn()
		
	});
	$(".sec_box").on("mouseleave",function(){
		$(".sec_nav").fadeOut()
	});	
	
	
	
	
	//轮播图
	$('.lbt').xcarousel({
		page:true,
		autoPlay:true,
		// buttons:false,
		type:'fade'
	});

	
	//鼠标滑过 底部的中间部分的  微信图标时，显示二维码
	$("#ohover").mouseenter(function(){
		$("#toopli").show();
	});
	$("#ohover").mouseleave(function(){
		$("#toopli").hide()
	});
	


//	鼠标滑过客服，显示号码
	$(".tel").mouseenter(function(){
		$("#tel").show()
	});
	$(".tel").mouseleave(function(){
		$("#tel").hide()
	});
	

// 鼠标滑过 微信  显示二维码
	$(".weixin").mouseenter(function(){
		$(".weixin_1").show()
	});
	$(".weixin").mouseleave(function(){
		$(".weixin_1").hide()
	});


//点击top 回到顶部
	$(window).scroll(function(){
		$(".top").click(function(){
$(document).scrollTop(0)
		})
		
	})




//滚动条滚动到 某一高度 显示  左侧二维码    右侧图标   并固定在屏幕上
	$(window).scroll(function(){
		$(window).scrollTop(function(){
			if($(document).scrollTop()>=500)
			{
				$("#fixeLft").show(600)
				$("#fixeRight").show(600)
			}
			else{
				$("#fixeLft").hide(300)
				$("#fixeRight").hide(300)
			}
		})
	})



	$("#nav .tit").slide({
		type:"menu",
		titCell:".mod_cate",
		targetCell:".mod_subcate",
		delayTime:0,
		triggerTime:10,
		defaultPlay:false,
		returnDefault:true
	});



	
	//获取焦点
	
	 var availableTags = [
      "火火兔",
      "欧舒丹",
      "保温杯",
      "触摸书",
      "纸尿裤",
      "奶瓶刷",
      "套装",
      "睡袋",
      "洗衣皂",
      "加热器",
      "除菌皂",
      "爽身粉",
      "婴儿润肤露"
    
    ];
    $( ".tags" ).autocomplete({
      source: availableTags
    });
	
})

	
	













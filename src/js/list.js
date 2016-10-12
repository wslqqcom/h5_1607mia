

$(document).ready(function(){
	
/*****************nav导航栏  鼠标滑过是下拉菜单*************/

	$(".sec_box").on("mouseenter",function(){
		$(".sec_nav").fadeIn()
		
	});
	$(".sec_box").on("mouseleave",function(){
		$(".sec_nav").fadeOut()
	});	
	
	
/************鼠标滑过 底部的中间部分的  微信图标时，显示二维码   *****************/

	$("#ohover").mouseenter(function(){
		$("#toopli").show();
	});
	$("#ohover").mouseleave(function(){
		$("#toopli").hide()
	});
	


/*****************	鼠标滑过客服，显示号码      ***********/

	$(".tel").mouseenter(function(){
		$("#tel").show()
	});
	$(".tel").mouseleave(function(){
		$("#tel").hide()
	});
	
	
	

/************** 鼠标滑过 微信  显示二维码    *************/
	$(".weixin").mouseenter(function(){
		$(".weixin_1").show()
	});
	$(".weixin").mouseleave(function(){
		$(".weixin_1").hide()
	});




/*********	点击top 回到顶部    ******************/

	$(window).scroll(function(){
		$(".top").click(function(){
			$(document).scrollTop(0)
		})
		
	})




/***********滚动条滚动到 某一高度 显示  左侧二维码    右侧图标   并固定在屏幕上**********/

	$(window).scroll(function(){
		$(window).scrollTop(function(){
			if($(document).scrollTop()>=500)
			{
				$("#fixeLft").show(600)		 // 显示左侧二维码
				$("#fixeRight").show(600)	 // 显示右侧图标
			}
			else{
				$("#fixeLft").hide(300)		//隐藏左侧二维码
				$("#fixeRight").hide(300)	//隐藏右侧图标
			}
		})
	});
	
	

		
/****************  多级菜单     **************/

	$("#nav .tit").slide({
		type:"menu",
		titCell:".mod_cate",
		targetCell:".mod_subcate",
		delayTime:0,
		triggerTime:10,
		defaultPlay:false,
		returnDefault:true
	});
	//鼠标离开多级菜单  多级菜单隐藏
	$(".tit ").mouseleave(function(){
		$(".tit").hide(600);
	});
	//鼠标进入   全部商品分类  显示多级菜单
	$(".mod_cate_hd ").mouseenter(function(){
		$(".tit").show(600);
	});
	



/********************* 收起 展开*******************/

	//1. 获取所有品牌  除了前两排品牌
	var $bigbox = $(".box li:gt(13)");
	
	//2.隐藏这些品牌
	$bigbox.hide();
	
	$(".for_age").hide();
	
	$(".place").hide();
	
	$(".box").css("height","200");
	
	//3.获取 更多 按钮
	var $morebtn = $(".more");
	//点击
	$morebtn.click(function(){
		
		if($bigbox.is(":hidden")){
			
			$bigbox.show();
			
			$(".for_age").show();
			
			$(".place").show();
			
			$(".box").css("height","460");
			
		}else{
			
			$bigbox.hide();
			
			$(".for_age").hide();
			
			$(".place").hide();
			
			$(".box").css("height","200");
		}
	});
		



/**********************吸顶菜单**********************/

	var _top =$("#xiding").offset().top;
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop >= _top){
			$("#xiding").css({"position":"fixed","top":0,"display":"block"});
		}else{
			$("#xiding").css({"position":"static","display":"none"});
		}
		
	});
				
		
/********************** JSON文件创建列表       懒加载    **********************/		
		
	var $list = $('#lieBiao');
	var $ul = $('<ul/>');
	$.ajaxSetup({
		url:'../js/list.json',
		success:function(res){
			console.log(res);

			// 生成一个ul
			$.each(res,function(idx,item){
				var $li = $('<li/>');
				$('<a/>').attr({href:item.url}).html('<img src="'+item.imgurl+'"/>').appendTo($li);
				$('<p/>').addClass('title').html(item.title).appendTo($li);

				// 计算折扣后的价格
				var price = (item.price*item.off).toFixed(2)
				$('<p/>').addClass('price').html( '<span>&yen;' + price + '</span><del>&yen;'+item.price.toFixed(2) + '</del>').appendTo($li);

				$li.appendTo($ul);
			});

			$list.append($ul);
		}
	});

	$.ajax();

	// 懒加载效果
	// 给window绑定scroll事件，当差不多滚动到底部是加载更多内容
	$(window).on('scroll',function(){
		// 获取滚动条滚动过的距离
		var scrollTop = $(window).scrollTop();

		// 当差不多滚动到底部是加载更多内容
		if(scrollTop >= $(document).height() - $(window).height() - 9800){
			$.ajax();
		}
	})
	


	

	
	
	
	
})	

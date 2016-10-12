


window.onload=function()
{
//	获取表格
	var cartTable=document.getElementById("cartTable");
//	获取每一行 rows是这个节点的所有tr元素
	var tr=cartTable.children[1].rows;
//   获取全选和单选框
	var checkInputs=document.getElementsByClassName("check");
	var checkAllInputs=document.getElementsByClassName("check-all");
	//多少件商品
	var selectedTotal=document.getElementById("selectedTotal");
	//价格
	var priceTotal=document.getElementById("priceTotal");
	//删除多行
	var deleteAll=document.getElementById("deleteAll");
	//计算
	function getTotal()
	{
		var seleted=0;
		var price=0;
		for(var i=0,len=tr.length;i<len;i++)
		{
			if( tr[i].getElementsByTagName("input")[0].checked )
			{
				seleted+=parseInt( tr[i].getElementsByTagName("input")[1].value );
				price+=parseFloat(tr[i].cells[4].innerHTML);
			}
		}
		selectedTotal.innerHTML=seleted;
		priceTotal.innerHTML=price.toFixed(2);
	}
	
	//小计
	function getSubTotal(tr)
	{
		var tds=tr.cells;
		var price=parseFloat(tds[2].innerHTML);
		var count=parseInt(tr.getElementsByTagName("input")[1].value);
		var SubTotal=parseFloat(price*count).toFixed(2);
		tds[4].innerHTML=SubTotal;
	}
	
	
	for(var i=0,len=checkInputs.length;i<len;i++)
	{
		checkInputs[i].onclick=function()
		{
			if(this.className==="check-all check")
			{
				for( j=0;j<checkInputs.length;j++)
				{
					checkInputs[j].checked=this.checked;
				}
			}
			if(this.checked==false)
			{
				for(var k=0;k<checkAllInputs.length;k++)
				{
					checkAllInputs[k].checked=false;
				}
			}
			getTotal();
		}
	}
	
	for(var i=0;i<tr.length;i++)
	{
		tr[i].onclick=function(e)
		{
			e=e||window.event;
			var el=e.srcElement;
			var cls=el.className;
			var input=this.getElementsByTagName("input")[1];
			var val=parseInt(input.value)
			var reduce=this.getElementsByTagName("span")[1];
			switch(cls)
			{
				case "add":
//					alert("add");
					input.value=val+1;
					reduce.innerHTML="-";
					getSubTotal(this)
					break;
				case "reduce":
//					alert("reduce");
					if(val>1)
					{
						input.value=val-1;
					}
					else if(input.value<=1)
					{
						reduce.innerHTML="";
					}
					getSubTotal(this);
					break;
				case "delete":
					var conf=confirm("官人要狠心将我删除吗？")
					if(conf)
					{
						this.parentNode.removeChild(this);
					}
					break;
				default:
					break;
			}
			getTotal()
		}
		
		tr[i].getElementsByTagName("input")[1].onkeyup=function()
		{
			var val=parseInt(this.value);
			var val=this.value;
			var tr=this.parentNode.parentNode
			var reduce=tr.getElementsByTagName("span")[1]
			if(isNaN(val)||val<1)
			{
				val=1;				
			}
			this.value=val;
			if(val<=1)
			{
				reduce.innerHTML="";
				
			}
			else{
				reduce.innerHTML="-";
			}
			getSubTotal(tr);
			getTotal();
		}
	}
	
	
	deleteAll.onclick=function()
	{
		var conf=confirm("官人要如此狠心吗？")
		if(conf)
		{
			for(var i=0;i<tr.length;i++)
			{
				var input=tr[i].getElementsByTagName("input")[0];
				if(input.checked)
				{
					tr[i].parentNode.removeChild(tr[i])
					i--;
				}
			}
		}
	}
	
	
	checkAllInputs[0].checked=true;
	checkAllInputs[0].onclick()
	
	
}





$(document).ready(function(){
	$(".addbuycaar").click(function(){
		$.cookie("one","../img/brand_21.jpg");
		$.cookie("details","德国原装Aptamil 婴儿配方奶粉pre段0~6M 800g*4罐 ");
		$.cookie("price","600");
	});
	var $one = $.cookie("one");
	var $details = $.cookie("details");
	var $price = $.cookie("price");
	
	$(".goods").html('<img src="'+$one+'"/>');//图片路径
	var $span=$("<span/>").html($details);  //商品信息
	$span.appendTo(".goods");
	
	$(".price").html($price);
	$(".subtotal").html($price);     //小计
	
	
	
	
	if($(".subtotal").text()==""){
		$("#cartTable").hide();
		$(".foot").hide();
		$(".Mybuycar .container").css({"color":"pink","font-size":"24px"}).html('您还没有为您可爱的宝宝挑选任何商品哦~<br />您可以去<a href="../index.html" > 首页</a> 挑选宝宝喜欢的商品');
	}else{
		$("#cartTable").show();
		$(".foot").show();
	}
	
	
	
	
	$(".L").click(function(){
		
		$(".UL1").css("opacity",5)
		$(".UL2").css("opacity",0)
	})
	$(".R").click(function(){
		
		
		$(".UL1").css("opacity",0)
		$(".UL2").css("opacity",5)
	})
	
	
	
	
	
	
	
})







//商品详情页数量计数器
window.onload=function()
{
	//数量框
	var xq_count=document.getElementById("xq_count");
	
	//增加按钮
	var xq_add=document.getElementsByClassName("xq_add")[0];
	//减少按钮
	var xq_reduce=document.getElementsByClassName("xq_reduce")[0];
	
	var i=1;
	
	xq_add.onclick=function(){
	 
		xq_count.value=++i
	}
	
	xq_reduce.onclick=function(){
			//判断当 值 <=0 时,不能 进行减法运算，反之可以
			if(xq_count.value<=0){
				return false;
			}else{
				xq_count.value=--i;
			}
	}
	
}







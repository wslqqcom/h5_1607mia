$(document).ready(function(){
//	var tbody=$("<tbody id='firsttbody'></tbody>")
	var price=$.cookie("price")
	var news=$.cookie("news")
	var img=$.cookie("img")
	
	var arr1=price.split(",");
	var arr2=news.split(",");
	var arr3=img.split(",");
	console.log(arr1);
	console.log(arr2);
	console.log(arr3);
		
	for(var i=0;i<arr1.length;i++)
 	{
	 	var tr=$("<tr/>")
	 	var td1=$("<td class='checkbox'></td>")
	 	var input1=$("<input class='check-one check' type='checkbox' />")
	 	input1.appendTo(td1)
	 	var td2=$("<td class='goods'></td>").html(arr3[i])
	 	var span2=$("<span/>").html(arr2[i])
	 	span2.appendTo(td2)
	 	var td3=$("<td class='price'></td>").html(arr1[i])
	 	var td4=$("<td class='count'></td>")
	 	var span4=$("<span class='reduce'></span>").html("-")
	 	var input2=$("<input class='count-input' type='text' value='1' />")
	 	var span5=$("<span class='add'></span>").html("+")
	 	span4.appendTo(td4)
	 	input2.appendTo(td4)
	 	span5.appendTo(td4)
	 	var td5=$("<td class='subtotal'></td>").html(arr1[i])
	 	var td6=$("<td class='operation'></td>")
	 	var span6=$("<span class='delete'>").html("删除")
	 	span6.appendTo(td6)
	 	td1.appendTo(tr)
	 	td2.appendTo(tr)
	 	td3.appendTo(tr)
	 	td4.appendTo(tr)
	 	td5.appendTo(tr)
	 	td6.appendTo(tr)
	 	tr.appendTo("#first_tbody")
 	}
	
	
//	tbody.appendTo("#cartTable")
	
	
	
	
})


//注册页面  验证码
//window.onload=function(){
//
//function getmima(){
//	var yzm_box = document.getElementsByClassName("yam_box")[0];
//	var yzmsx = document.getElementsByClassName("yzmsx")[0];
//	
//	
//	var yanzhengma = "0123456789zxcvbnmlkjhgfdsaqwertyuiopZXCVBNMLKJHGFDSAQWERTYUIOP";
//		var arr = "";
//		for( var i=0; i<4;i++){
//			arr=arr+yanzhengma[parseInt(Math.random()*62)]
//		}
//		yzm_box.innerHTML = arr;
//	
//}
//	console.log( getmima())
//	
//	yzmsx.onclick = function(){		
//		alert("fufuh")
//	}
//	
//
//	
//}
window.onload=function()
			{
				function yzm(){
					var suimima="0123456789zxcvbnmasdfghjklqwertyuiopZXCVBNMLKJHGFDSAQWERTYUIOP"
					var arr="";
					for(var i=0;i<4;i++)
					{
						arr+=suimima[parseInt(Math.random()*62)];
					}
					document.getElementsByClassName("yzm_box")[0].innerHTML=arr;
				}
				yzm()
				document.getElementsByClassName("yzmsx")[0].onclick=function(){
					yzm()
				}
			}


$(document).ready(function(){
	var ok1=false;
    var ok2=false;
    var ok3=false;
    var ok4=false;
    var $arr=["13344445555","13566667777","13788889999","18277872631","15676082635"];
    var cookiephone=$.cookie("username");
    $arr.push(cookiephone);
    console.log($arr);
    //验证密码
    $('input[name="password"]').focus(function(){
        $(this).next().text('密码应该为6-20位之间').removeClass('state1').addClass('state2');
    }).blur(function(){
        if($(this).val().length >= 6 && $(this).val().length <=20 && $(this).val()!=''){
            $(this).next().text('输入成功').removeClass('state1').addClass('state4');
            ok1=true;
        }else{
            $(this).next().text('密码应该为6-20位之间').removeClass('state1').addClass('state3');
        }
         
    });
	
	
    //验证确认密码
        $('input[name="password_2"]').focus(function(){
        $(this).next().text('请再次输入密码').removeClass('state1').addClass('state2');
    }).blur(function(){
        if($(this).val().length >= 6 && $(this).val().length <=20 && $(this).val()!='' && $(this).val() == $('input[name="password_2"]').val()){
            $(this).next().text('输入成功').removeClass('state1').addClass('state4');
            ok2=true;
        }else{
            $(this).next().text('两次输入密码不一致一致').removeClass('state1').addClass('state3');
        }
         
    });
    
    //验证手机号
     $('input[name="phone"]').focus(function(){
        $(this).next().text('请输入正确手机号').removeClass('state1').addClass('state2');
       
    }).blur(function(){
    	for(var i=0;i<$arr.length;i++){
      		if($('input[name="phone"]').val()==$arr[i]){
      	 		alert("此号码已被注册，请重新输入");
      	 		return false;
      		}
      	}
    	
        if($(this).val().length ==11 && $(this).val()!=''){
            $(this).next().text('输入成功').removeClass('state1').addClass('state4');
            ok3=true;
        }else{
            $(this).next().text('手机号输入错误').removeClass('state1').addClass('state3');
//          for(var i=0;i<$arr.length;i++){
//      		if($('input[name="phone"]').val()==$arr[i]){
//      	 		this.text("此号码已被注册，请重新输入");
//      	 		alert("此号码已被注册，请重新输入");
//      		}
//      	}
        }
         
    });
    
    //验证随机验证码
    $('input[name="yzm"]').focus(function(){
        $(this).next().text('输入右侧验证码').removeClass('state1').addClass('state2');
    }).blur(function(){
        if($(this).val().length >= 4 && $(this).val().length <=20 && $(this).val()!='' && $(this).val() == $('.yzm_box').text()){
            $(this).next().text('验证成功').removeClass('state1').addClass('state4');
            ok4=true;           
        }else{
            $(this).next().text('验证码输入错误').removeClass('state1').addClass('state3');
        }
         
    });
    
    $('#zhuce_btn').click(function(){
	    if(ok1 && ok2 && ok3 && ok4)
	    {
	    	alert("注册成功！即将为您跳转到登录页面")
//	    	$('#zhuce_form').submit()
	        $('#zhuce_form').submit(function(){
	        	//cookie 注册部分
	        	var _Myphone=$('input[name="phone"]').val();
	        	var _Mypassword=$('input[name="password"]').val();
	        
				$.cookie('username', _Myphone,{ expires: 7 , path: '/'}); 
				$.cookie('zhuce_password', _Mypassword,{ expires: 7, path: '/'});
	        });
	        
	         
	    }else
	    {
	        return false;
	        
	    }
	});
	
	
	
	
	
})

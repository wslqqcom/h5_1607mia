//登录验证
$(document).ready(function(){
	var Myusername=$.cookie('username');
    var Mypassword=$.cookie('zhuce_password')
	console.log(Myusername)
	console.log(Mypassword)
	var dl1=false;
    var dl2=false;
    
	$('input[name="input_sjh"]').focus(function(){
        $(this).next().text('手机号格式为11位').removeClass('state1').addClass('state2');
    }).blur(function(){
        if($(this).val().length ==11 && $(this).val()!=''){
            $(this).next().text('输入成功').removeClass('state1').addClass('state4');
            dl1=true;
        }else{
            $(this).next().text('手机号输入错误').removeClass('state1').addClass('state3');
        }
         
    });
    //验证密码
    $('input[name="input_dxyz"]').focus(function(){
        $(this).next().text('密码应该为6-20位之间').removeClass('state1').addClass('state2');
    }).blur(function(){
        if($(this).val().length >= 6 && $(this).val().length <=20 && $(this).val()!=''){
            $(this).next().text('输入成功').removeClass('state1').addClass('state4');
            dl2=true;
        }else{
            $(this).next().text('密码应该为6-20位之间').removeClass('state1').addClass('state3');
        }
         
    });
     $('#dl_btn').click(function(){
	    if(dl1 && dl2)
	    {
			if( $('input[name="input_sjh"]').val()==Myusername && $('input[name="input_dxyz"]').val()==Mypassword)
	        	{
	        		
	        		alert("登陆成功")
	        		 $('#dl_form').submit()
	        		
	        		
	        	}
	        else{
	        	alert("该用户名尚未注册")
	        }
	    }else
	    {
	    	alert("请完善登陆信息")
	        return false;
	       
	    }
	});
})
	
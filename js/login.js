require(["config"], function(){
	require(["jquery", "template", "load","cookie"], function(){
		//邮箱地址 必须由  大小写字母 或 数字  或下划线开头，其后可以跟上任意的 \w字符 和 中划线 加号 英文句号  @ 跟上任意的 \w字符 和 中划线 加号 英文句号.跟上任意的 \w字符 和 中划线 加号 英文句号
			var yes=false;
			$("#email").blur(function(e){
				var search_str = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				var email_val = $("#email").val();
				if(email_val.length<=0){
					$("#email").next().eq(0).text("邮箱不能为空").css("color","red")
					yes=false;
					return;
				}
				else if(!search_str.test(email_val)){ 
				    $("#email").next().eq(0).text("输入的邮箱格式有误").css("color","red")
				    yes=false;
				    return;
				}
				else{
					$("#email").next().eq(0).text("邮箱输入正确").css("color","green")
					yes=true;
				}
			});
			
			$("#password").blur(function(e){
			//密码可由字母、数字、特殊符号@组成，长度为6-16个字符
				var pwd= /^[A-Za-z0-9@#]{6,16}$/;
				var password_val = $("#password").val();
				if(password_val.length<=0){
					$("#password").next().eq(0).text("密码不能为空").css("color","red")
					yes=false;
					return;
				}
				else if(!pwd.test(password_val)){ 
				    $("#password").next().eq(0).text("输入的密码格式有误").css("color","red")
				    yes=false;
				    return;
				}
				else{
					$("#password").next().eq(0).text("密码输入正确").css("color","green")
					yes=true;
				} 
			});
		
			$("#btn").click(function(e){
				//判断上述两个框是否符合正则表达式
				if(yes) {
					//获取cookie
					$.cookie.json = true;
					var _userInfos = $.cookie("userInfos");
					var email_val = $("#email").val();
					var password_val = $("#password").val();
					
					var _yes = true;
					for(var i = 0 ; i <_userInfos.length; i++){
						if(_userInfos[i].email === email_val && _userInfos[i].pwd === password_val){		
						_yes = false;
						location.href = "../index.html?email="+email_val;
						}
					}
					if(_yes){
						console.log("登录失败");
						return;
					}
				}else{
					return;
				}
			});
	});
})
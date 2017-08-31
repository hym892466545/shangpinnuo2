require(["config"], function(){
	require(["jquery", "template", "load","cookie"], function(){
			var yes=false;
			$("#email").blur(function(e){
				//邮箱地址 必须由  大小写字母 或 数字  或下划线开头，其后可以跟上任意的 \w字符 和 中划线 加号 英文句号  @ 跟上任意的 \w字符 和 中划线 加号 英文句号.跟上任意的 \w字符 和 中划线 加号 英文句号
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
		
		$("#_password").blur(function(e){
			//确认密码
			var password_val = $("#password").val();
			var _password_val = $("#_password").val();
			if(_password_val.length<=0){
				$("#_password"	).next().eq(0).text("不能为空").css("color","red")
				yes=false;
				return;
			}else if( _password_val!== password_val){
				$("#_password").next().eq(0).text("密码输入不一致").css("color","red")
				yes=false;
				return;
			}else{
				$("#_password").next().eq(0).text("密码输入一致").css("color","green")
				yes=true;
			}
		});
		
		$("#btn").click(function(e){
			//判断复选框是否选中
			if($('#chk').is(':checked')&&yes) {
				var email_val = $("#email").val(); 
				var password_val = $("#password").val();
				var userInfo = {
					email: email_val,
					pwd: password_val
				}
				//保存cookie
				$.cookie.json = true;//自动转化
				var userInfos = $.cookie("userInfos") || [];
				// 查找当前选购商品的ID在数组中已选购商品元素中是否存在
				var index = isExist(userInfo.id, userInfos);
				if (index === -1) { // 不存在
					// 向数组中添加元素
					userInfos.push(userInfo);
				}
				// 将数组存回到 cookie 中
				$.cookie("userInfos", userInfos, {expires:10});
					location.href = "login.html"
			}else{
				return;
			}
		});
		
		function isExist(id, userInfos) {
				for (var i = 0, len = userInfos.length; i < len; i++) {
					if (userInfos[i].email == id)
						return i;
				}
				return -1;
			}
	});
});











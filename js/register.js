require(["config"], function(){
	require(["jquery", "template", "load"], function(){
		$("#email").blur(function(e){
			$(this).css({"display":"none"})
			console.log($(this))
			var _email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
			var _this = $(this).val();
			if(!(_this.test(_email))){
				$(this).val("aa")
				$(this).css({"display":"block"})
			}
		})
	});
})
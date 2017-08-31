define(["jquery", "cookie"], function($){
	$.ajax({
		type : 'get',
		url : "/html/include/header.html",
		success : function(data){
			$(data).appendTo(".header");
			var _url =location.search;
			var _username = _url.split("=").slice(1);
			if(_url){
				$(".nav").html(`欢迎你：${_username}`).css("color","white");
			}
		}
	});
	
	$.ajax({
		type : 'get',
		url : "/html/include/footer.html",
		success : function(data){
				$(data).appendTo(".footer");
		}
	});
});
require(["config"], function(){
	require(["jquery", "template", "load"], function($, template){
		$.getJSON("/mock/productsList.json", function(data){
			var html = template("product_list", data);
			$(html).appendTo(".content");
		});
	});
})
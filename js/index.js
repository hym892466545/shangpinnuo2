require(["config"], function(){
	require(["jquery", "template", "load"], function($, template){
		//轮播图插件
		require(["bootstrap"],function(){
			
		});
		//模板加入new商品
		$.getJSON("/mock/productsList.json", function(data){
			var html = template("product_list", data);
			$(html).appendTo(".content");
		});
		//模板加入sale商品
		$.getJSON("/mock/productsSale.json", function(data){
			var html = template("product_Sale", data);
			$(html).appendTo(".content1");
		});
	});
})
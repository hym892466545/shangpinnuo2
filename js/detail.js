require(["config"], function(){
	require(["jquery", "template", "load","cookie"], function($,template){
		$("#_back").click(function(){
			history.back(-1);
		})
		//模板加入推荐商品
		$.getJSON("/mock/tuijian.json", function(data){
			var html = template("tuijian", data);
			$(html).appendTo("._tuijian");
		});
		//加入购物车
		$("._productright_bottom a").click(function(){
			console.log("进入点击事件")
				// 将商品信息保存到对象中
				var product = {
					id :$("._id").html(),
					name : $("._productright_top").html(),
					price : $("._price").html(),
					imgSrc : $("._productleft img").attr("src"),
					amount : 1
				};
				// 判断在 cookie 中是否有已存在的购物车数组结构
				// 使用 jquery 的 cookie 插件操作 cookie
				$.cookie.json = true; // 自动转换
				var _products = $.cookie("products") || [];
				// 查找当前选购商品的ID在数组中已选购商品元素中是否存在
				var index = isExist(product.id, _products);
				if (index === -1) { // 不存在
					// 向数组中添加元素
					_products.push(product); 
				} else { // 存在，则修改数量
					_products[index].amount++;
				}
				// 将数组存回到 cookie 中
				$.cookie("products", _products, {expires:10});
			});

			// 查找指定id商品在 products 数组中是否已存在
			// 存在则返回在数组中的下标，否则返回-1
			function isExist(id, products) {
				for (var i = 0, len = products.length; i < len; i++) {
					if (products[i].id == id)
						return i;
				}

				return -1;
			}
	});
});
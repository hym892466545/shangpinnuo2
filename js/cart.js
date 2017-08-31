require(["config"], function(){
	require(["jquery", "template", "load","cookie"], function($,template){
		$(function(){
			// 页面打开，则读取 cookie 中已保存的购物车信息，展示到页面中
			$.cookie.json = true;
			var _products = $.cookie("products") || [];
			if (_products.length === 0) {
				alert("购物车为空，请选购商品....");
				location = "../index.html";
			}
			var data = {
				products : _products
			};
			var html = template("shop_cart", data);
			// 显示
			// $(".cart_body").append(html);
			$(html).appendTo(".cart_product");
			//删除cookie
			$('.delete').click(function(){
				$(this).parents('.shoppingcontent').remove()
				var _id = $(this).parents(".shoppingcontent").find(".prod_id").text();
				// 查找 _id 所表示商品在数组中的索引
				var index = isExist(_id, _products);
				// 删除数组 index 索引处元素
				_products.splice(index, 1);
				// 保存回 cookie 中
				$.cookie("products", _products, {expires:10});
				// 判断是否购物车为空
				if (_products.length === 0) {
					alert("购物车为空");
					location = "../index.html";
				}
			})
			
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
})
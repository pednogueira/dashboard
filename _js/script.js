
$.getJSON('json/sales_summary.php', function(data){
	var obj = data
	var trHTML;

	$.each(data, function(i, item){
		trHTML += "<div class='col2'><div class='box2'><p>"+i+"</p><span>R$ "+item+"</span></div></div>";
	});
	$('#inf_header').append(trHTML);
});

$.getJSON('json/vendas.php', function(data){

	var obj = data;
	// console.log(data);
	var trHTML;

	$.each(data, function(i, item){

		var total = "R$ " + item[3].toPrecision(5);

		trHTML += "<tr><td>"+item[0]+"</td><td>"+item[1]+"</td><td>"+item[2]+"</td><td>"+total+"</td></tr>"
		// console.log(trHTML);

	});
	$('#tbody_vendas').html(trHTML);
});


$('.todos').click(function(){

	var valor = $(this).val();

	$.getJSON('json/top_products.php', function(data){
		var empresas = data.marketplaces;
		var liHTML;

		if(valor == "submarino"){
			produtos = data.products.submarino;
		}else if(valor == "lojas_americanas"){
			produtos = data.products.lojas_americanas;
		}else if(valor == "shoptime"){
			produtos = data.products.shoptime;
		}else if(valor == "brasil_ctb2_w"){
			produtos = data.products.brasil_ctb2_w;
		}else{
			produtos = data.products.sou_barato;
		}

		console.log(this);

		$.each(produtos, function(i, item){
			console.log(item.name);

			var total = "R$ " + item.total_money.toPrecision(5);

			liHTML += "<tr><td>"+item.name+"</td><td>"+item.qtd_sold+"</td><td>"+total+"</td><td>"+item.sku+"</td><td>"+item.position+"</td></tr>";

		});
		$('#lojas tbody').html(liHTML);
	});

});






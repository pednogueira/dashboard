
$.getJSON('json/sales_summary.php', function(data){
	var obj = data
	console.log(data);
	var trHTML;

	$.each(data, function(i, item){
		trHTML += "<div class='col2'><div class='box2'><p>"+i+"</p><span>"+item+"</span></div></div>";
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
	$('#tbody_vendas').append(trHTML);
});

$.getJSON('json/top_products.php', function(data_produtos){

	var obj = data_produtos;
	console.log(obj);

});




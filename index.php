<!DOCTYPE html>
<html>
<head>
	<title>Dashboard</title>

	<!-- css -->	
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/grids.css">

</head>
<body>
	<div class="container">
		<header>
			<div class="col12">
				<!-- <img src="img/logo1.png"> -->
			</div>
		</header>
		<section class="header" id="header">
			<div class="col12 linha">
				<div id="inf_header">

				</div>
			</div>
		</section>
		<section>
			<article class="col8">
				<div class="box2">
					<h2>Histórico por preço <span>
						<a href=""><img src="img/btnbox.png"></a></span>
					</h2>
					<div class="grafico"  id="grafico1">
					</div>
				</div>
				<div class="box2">
					<nav class="nav_produtos">
						<ul>
							<li><a href="">teste</a></li>
							<li><a href="">teste</a></li>
							<li><a href="">teste</a></li>
							<li><a href="">teste</a></li>
							<li><a href="">teste</a></li>
						</ul>
					</nav>
					<div class="grafico">
						<table class="table">
							<thead>
								<tr>
									<th>Estado</th>
									<th>Cidade</th>
									<th>Venda</th>
									<th>Valor total</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Rio de Janeiro</td>
									<td>Petrópolis</td>
									<td>12</td>
									<td></td>
								</tr>
								<tr>
									<td>Rio de Janeiro</td>
									<td>Petrópolis</td>
									<td>12</td>
									<td>R$2.000,00</td>
								</tr>
								<tr>
									<td>Rio de Janeiro</td>
									<td>Petrópolis</td>
									<td>12</td>
									<td>R$2.000,00</td>
								</tr>
								<tr>
									<td>Rio de Janeiro</td>
									<td>Petrópolis</td>
									<td>12</td>
									<td>R$2.000,00</td>
								</tr>
								<tr>
									<td>Rio de Janeiro</td>
									<td>Petrópolis</td>
									<td>12</td>
									<td>R$2.000,00</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</article>
			<article class="col4 right">
				<div class="box2">
					<h2>Vendas por região<span>
						<a href=""><img src="img/btnbox.png"></a></span>
					</h2>
					<div class="box-table">
						<table class="table">
							<thead>
								<tr>
									<th>Estado</th>
									<th>Cidade</th>
									<th>Venda</th>
									<th>Valor total</th>
								</tr>
							</thead>
							<tbody  id="tbody_vendas">
							</tbody>
						</table>
					</div>
				</div>
			</article>
			<article class="col4 right">
				<div class="box2">
					<h2>Pedidos<span>
						<a href=""><img src="img/btnbox.png"></a></span>
					</h2>
					<div class="grafico"  id="grafico2">
					</div>
				</div>
			</article>
		</section>
	</div>
	<!-- javascript -->
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	<script type="text/javascript" src="_js/charts.js"></script>
	<script type="text/javascript" src="chart2.js"></script>

	<script   src="https://code.jquery.com/jquery-3.0.0.js"></script>
	<script type="text/javascript" src="_js/script.js"></script>
</body>
</html>
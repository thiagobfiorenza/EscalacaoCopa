<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
	<head>
		<title>Escalações da Seleção - Copa do Mundo África 2010</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf8" />
		<meta name="description" content="Copa do Mundo 2010" />
		<meta name="keywords" content="copa do mundo 2010, africa 2010, world cup 2010, dunga, seleção brasileira, brasil na copa, escalação do Brasil" />
		<link rel="stylesheet" type="text/css" href="_css/global.css" media="screen" />
	</head>
	<body>
		<label>Escolha o número de jogadores em cada posição.</label>

		<label for="zagueiros">Zagueiros:</label>
		<select id="zagueiros" name="zagueiros" onclick="somaPosicao(this)" onfocus="somaPosicao(this)" onblur="selecionaPosicao(this)">
			<option value="">--</option>
			<option value="3">3</option>
			<option value="2">2</option>
		</select>

		<label for="laterais">Laterais:</label>
		<select id="laterais" name="laterais" onclick="somaPosicao(this)" onfocus="somaPosicao(this)" onblur="selecionaPosicao(this)">
			<option value="">--</option>
			<option value="2">2</option>
			<option value="0">0</option>
		</select>

		<label for="volantes">Volantes:</label>
		<select id="volantes" name="volantes" onclick="somaPosicao(this)" onfocus="somaPosicao(this)" onblur="selecionaPosicao(this)">
			<option value="">--</option>
			<option value="3">3</option>
			<option value="2">2</option>
			<option value="1">1</option>
			<option value="0">0</option>
		</select>

		<label for="meias">Meias:</label>
		<select id="meias" name="meias" onclick="somaPosicao(this)" onfocus="somaPosicao(this)" onblur="selecionaPosicao(this)">
			<option value="">--</option>
			<option value="6">6</option>
			<option value="5">5</option>
			<option value="4">4</option>
			<option value="3">3</option>
			<option value="2">2</option>
			<option value="1">1</option>
		</select>

		<label for="atacantes">Atacantes:</label>
		<select id="atacantes" name="atacantes" onclick="somaPosicao(this)" onfocus="somaPosicao(this)" onblur="selecionaPosicao(this)">
			<option value="">--</option>
			<option value="3">3</option>
			<option value="2">2</option>
			<option value="1">1</option>
		</select>
		<p id="restante">Posições restantes: <span>10</span></p>
<?php include_once("formacoes.php"); ?>
		<script type="text/javascript" src="_js/jquery-1.4.2.min.js"></script>
		<script type="text/javascript" src="_js/global.js"></script>
	</body>
</html>

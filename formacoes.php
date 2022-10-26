<?php
	include_once("_cfg/dados.php");
	if(!empty($_POST)){
		$sql = ('
			INSERT INTO escalacoes (
				cod_goleiro,
				cod_lateral_esquerdo,
				cod_zagueiro_esquerdo,
				cod_zagueiro_direito,
				cod_lateral_direito,
				cod_volante_esquerdo,
				cod_volante_direito,
				cod_meia_esquerdo,
				cod_meia_direito,
				cod_atacante_esquerdo,
				cod_atacante_direito
			) VALUES (?,?,?,?,?,?,?,?,?,?,?)
		');
		$dados=array(
			$_POST['g'],
			$_POST['le'],
			$_POST['zce'],
			$_POST['zcd'],
			$_POST['ld'],
			$_POST['vce'],
			$_POST['vcd'],
			$_POST['mce'],
			$_POST['mcd'],
			$_POST['ace'],
			$_POST['acd']
		);
		$pre = $con->prepare($sql);
		erro($pre);
		$exe = $pre->execute($dados);
		erro($exe);

	}

	$sql = ('
		SELECT
			*
		FROM
			jogadores
		WHERE
			cod_posicao = ?
		ORDER BY
			ape_jogador
	');
	$dados_gol = array(1);
	$dados_zag = array(2);
	$dados_lae = array(3);
	$dados_lad = array(4);
	$dados_vol = array(5);
	$dados_mei = array(6);
	$dados_ata = array(7);

	$pre = $con->prepare($sql);
	$gol = $pre->execute($dados_gol);
	$zag = $pre->execute($dados_zag);
	$lae = $pre->execute($dados_lae);
	$lad = $pre->execute($dados_lad);
	$vol = $pre->execute($dados_vol);
	$mei = $pre->execute($dados_mei);
	$ata = $pre->execute($dados_ata);
?>
		<div id="campo">
			<form action="" method="post">
				<div class="atacante">
					<div id="atacante-centro-esquerdo">
						<select id="ace" name="ace" class="ata" onchange="selecionaJogador(this)">
							<option value="">Atacante Esq.</option>
<?php while($atacante = $ata->fetchRow()){ ?>
							<option value="<?php echo $atacante->cod_jogador; ?>" title="<?php echo $atacante->ape_jogador.' - '.$atacante->clu_jogador.' ('.$atacante->qtd_jogador.' conv.)'; ?>"><?php echo $atacante->ape_jogador; ?></option>
<?php } $ata->seek(); ?>
						</select>
					</div>

					<div id="atacante-centro-direito">
						<select id="acd" name="acd" class="ata" onchange="selecionaJogador(this)">
							<option value="">Atacante Dir.</option>
<?php while($atacante = $ata->fetchRow()){ ?>
							<option value="<?php echo $atacante->cod_jogador; ?>" title="<?php echo $atacante->ape_jogador.' - '.$atacante->clu_jogador.' ('.$atacante->qtd_jogador.' conv.)'; ?>"><?php echo $atacante->ape_jogador; ?></option>
<?php } $ata->free(); ?>
						</select>
					</div>
				</div>

				<div class="meia">
					<div id="meia-centro-esquerdo">
						<select id="mce" name="mce" class="mei" onchange="selecionaJogador(this)">
							<option value="">Meia Esq.</option>
<?php while($meia = $mei->fetchRow()){ ?>
							<option value="<?php echo $meia->cod_jogador; ?>" title="<?php echo $meia->ape_jogador.' - '.$meia->clu_jogador.' ('.$meia->qtd_jogador.' conv.)'; ?>"><?php echo $meia->ape_jogador; ?></option>
<?php } $mei->seek(); ?>
						</select>
					</div>

					<div id="meia-centro-direito">
						<select id="mcd" name="mcd" class="mei" onchange="selecionaJogador(this)">
							<option value="">Meia Dir.</option>
<?php while($meia = $mei->fetchRow()){ ?>
							<option value="<?php echo $meia->cod_jogador; ?>" title="<?php echo $meia->ape_jogador.' - '.$meia->clu_jogador.' ('.$meia->qtd_jogador.' conv.)'; ?>"><?php echo $meia->ape_jogador; ?></option>
<?php } $mei->seek(); ?>
						</select>
					</div>
				</div>

				<div class="volante">
					<div id="volante-centro-esquerdo">
						<select id="vce" name="vce" class="vol" onchange="selecionaJogador(this)">
							<option value="">Volante Esq.</option>
<?php while($volante = $vol->fetchRow()){ ?>
							<option value="<?php echo $volante->cod_jogador; ?>" title="<?php echo $volante->ape_jogador.' - '.$volante->clu_jogador.' ('.$volante->qtd_jogador.' conv.)'; ?>"><?php echo $volante->ape_jogador; ?></option>
<?php } $vol->seek(); ?>
						</select>
					</div>

					<div id="volante-centro-direito">
						<select id="vcd" name="vcd" class="vol" onchange="selecionaJogador(this)">
							<option value="">Volante Dir.</option>
<?php while($volante = $vol->fetchRow()){ ?>
							<option value="<?php echo $volante->cod_jogador; ?>" title="<?php echo $volante->ape_jogador.' - '.$volante->clu_jogador.' ('.$volante->qtd_jogador.' conv.)'; ?>"><?php echo $volante->ape_jogador; ?></option>
<?php } $vol->free(); ?>
						</select>
					</div>
				</div>

				<div class="lateral">
					<div id="lateral-esquerdo">
						<select id="le" name="le">
							<option value="">Lateral Esq.</option>
<?php while($lateral_esquerdo = $lae->fetchRow()){ ?>
							<option value="<?php echo $lateral_esquerdo->cod_jogador; ?>" title="<?php echo $lateral_esquerdo->ape_jogador.' - '.$lateral_esquerdo->clu_jogador.' ('.$lateral_esquerdo->qtd_jogador.' conv.)'; ?>"><?php echo $lateral_esquerdo->ape_jogador; ?></option>
<?php } $lae->free(); ?>
						</select>
					</div>

					<div id="lateral-direito">
						<select id="ld" name="ld">
							<option value="">Lateral Dir.</option>
<?php while($lateral_direito = $lad->fetchRow()){ ?>
							<option value="<?php echo $lateral_direito->cod_jogador; ?>" title="<?php echo $lateral_direito->ape_jogador.' - '.$lateral_direito->clu_jogador.' ('.$lateral_direito->qtd_jogador.' conv.)'; ?>"><?php echo $lateral_direito->ape_jogador; ?></option>
<?php } $lad->free(); ?>
						</select>
					</div>
				</div>

				<div class="zagueiro">
					<div id="zagueiro-centro-esquerdo">
						<select id="zce" name="zce" class="zag" onblur="selecionaJogador(this);">
							<option value="">Zagueiro Esq.</option>
<?php while($zagueiro = $zag->fetchRow()){ ?>
							<option value="<?php echo $zagueiro->cod_jogador; ?>" title="<?php echo $zagueiro->ape_jogador.' - '.$zagueiro->clu_jogador.' ('.$zagueiro->qtd_jogador.' conv.)'; ?>"><?php echo $zagueiro->ape_jogador;?></option>
<?php } $zag->seek(); ?>
						</select>
					</div>

					<div id="zagueiro-centro-direito">
						<select id="zcd" name="zcd" class="zag" onchange="selecionaJogador(this)">
							<option value="">Zagueiro Dir.</option>
<?php while($zagueiro = $zag->fetchRow()){ ?>
							<option value="<?php echo $zagueiro->cod_jogador; ?>" title="<?php echo $zagueiro->ape_jogador.' - '.$zagueiro->clu_jogador.' ('.$zagueiro->qtd_jogador.' conv.)'; ?>"><?php echo $zagueiro->ape_jogador;?></option>
<?php } $zag->free(); ?>
						</select>
					</div>
				</div>

				<div id="goleiro">
					<select id="g" name="g">
						<option value="">Goleiro</option>
<?php while($goleiro = $gol->fetchRow()){ ?>
						<option value="<?php echo $goleiro->cod_jogador; ?>" title="<?php echo $goleiro->ape_jogador.' - '.$goleiro->clu_jogador.' ('.$goleiro->qtd_jogador.' conv.)'; ?>"><?php echo $goleiro->ape_jogador; ?></option>
<?php } $gol->free(); ?>
					</select>
				</div>

				<input class="enviar" type="submit" value="Enviar titulares para a copa!" />
			</form>
		</div>

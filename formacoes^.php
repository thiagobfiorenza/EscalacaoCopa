<?php
	include_once("_cfg/dados.php");

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
			<div class="goleiro">
				<label>Goleiro</label>
				<select>
					<option value="">--</option>
<?php while($goleiro = $gol->fetchRow()){ ?>
					<option value="<?php echo $goleiro->cod_jogador; ?>"><?php echo $goleiro->ape_jogador.' - '.$goleiro->clu_jogador.' ('.$goleiro->qtd_jogador.' conv.)'; ?></option>
<?php } $gol->free(); ?>
				</select>
			</div>

			<div id="lateral-esquerdo" class="lateral">
				<label>Lateral Esquerdo</label>
				<select>
					<option value="">--</option>
<?php while($lateral_esquerdo = $lae->fetchRow()){ ?>
					<option value="<?php echo $lateral_esquerdo->cod_jogador; ?>"><?php echo $lateral_esquerdo->ape_jogador.' - '.$lateral_esquerdo->clu_jogador.' ('.$lateral_esquerdo->qtd_jogador.' conv.)'; ?></option>
<?php } $lae->free(); ?>
				</select>
			</div>

			<div id="zagueiro-centro-esquerdo" class="zagueiro">
				<label>Zagueiro Centro Esquerdo</label>
				<select id="zce" class="zag" onblur="selecionaJogador(this);">
					<option value="">--</option>
<?php while($zagueiro = $zag->fetchRow()){ ?>
					<option value="<?php echo $zagueiro->cod_jogador; ?>"><?php echo $zagueiro->ape_jogador.' - '.$zagueiro->clu_jogador.' ('.$zagueiro->qtd_jogador.' conv.)'; ?></option>
<?php } $zag->seek(); ?>
				</select>
			</div>

			<div id="zagueiro-centro" class="zagueiro">
				<label>Zagueiro Centro</label>
				<select id="zc" class="zag">
					<option value="">--</option>
<?php while($zagueiro = $zag->fetchRow()){ ?>
					<option value="<?php echo $zagueiro->cod_jogador; ?>"><?php echo $zagueiro->ape_jogador.' - '.$zagueiro->clu_jogador.' ('.$zagueiro->qtd_jogador.' conv.)'; ?></option>
<?php } $zag->seek(); ?>
				</select>
			</div>

			<div id="zagueiro-centro-direito" class="zagueiro">
				<label>Zagueiro Centro Direito</label>
				<select id="zcd" class="zag" onchange="selecionaJogador(this)">
					<option value="">--</option>
<?php while($zagueiro = $zag->fetchRow()){ ?>
					<option value="<?php echo $zagueiro->cod_jogador; ?>"><?php echo $zagueiro->ape_jogador.' - '.$zagueiro->clu_jogador.' ('.$zagueiro->qtd_jogador.' conv.)'; ?></option>
<?php } $zag->free(); ?>
				</select>
			</div>

			<div id="lateral-direito" class="lateral">
				<label>Lateral Direito</label>
				<select>
					<option value="">--</option>
<?php while($lateral_direito = $lad->fetchRow()){ ?>
					<option value="<?php echo $lateral_direito->cod_jogador; ?>"><?php echo $lateral_direito->ape_jogador.' - '.$lateral_direito->clu_jogador.' ('.$lateral_direito->qtd_jogador.' conv.)'; ?></option>
<?php } $lad->free(); ?>
				</select>
			</div>

			<div id="volante-centro-esquerdo" class="volante">
				<label>Volante Centro Esquerdo</label>
				<select id="vce" class="vol" onchange="selecionaJogador(this)">
					<option value="">--</option>
<?php while($volante = $vol->fetchRow()){ ?>
					<option value="<?php echo $volante->cod_jogador; ?>"><?php echo $volante->ape_jogador.' - '.$volante->clu_jogador.' ('.$volante->qtd_jogador.' conv.)'; ?></option>
<?php } $vol->seek(); ?>
				</select>
			</div>

			<div id="volante-centro" class="volante">
				<label>Volante Centro</label>
				<select id="vc" class="vol" onchange="selecionaJogador(this)">
					<option value="">--</option>
<?php while($volante = $vol->fetchRow()){ ?>
					<option value="<?php echo $volante->cod_jogador; ?>"><?php echo $volante->ape_jogador.' - '.$volante->clu_jogador.' ('.$volante->qtd_jogador.' conv.)'; ?></option>
<?php } $vol->seek(); ?>
				</select>
			</div>

			<div id="volante-centro-direito" class="volante">
				<label>Volante Centro Direito</label>
				<select id="vcd" class="vol" onchange="selecionaJogador(this)">
					<option value="">--</option>
<?php while($volante = $vol->fetchRow()){ ?>
					<option value="<?php echo $volante->cod_jogador; ?>"><?php echo $volante->ape_jogador.' - '.$volante->clu_jogador.' ('.$volante->qtd_jogador.' conv.)'; ?></option>
<?php } $vol->free(); ?>
				</select>
			</div>

			<div id="meia-esquerdo" class="meia">
				<label>Meia Esquerdo</label>
				<select id="me" class="mei" onchange="selecionaJogador(this)">
					<option value="">--</option>
<?php while($meia = $mei->fetchRow()){ ?>
					<option value="<?php echo $meia->cod_jogador; ?>"><?php echo $meia->ape_jogador.' - '.$meia->clu_jogador.' ('.$meia->qtd_jogador.' conv.)'; ?></option>
<?php } $mei->seek(); ?>
				</select>
			</div>

			<div id="meia-centro-esquerdo" class="meia">
				<label>Meia Centro Esquerdo</label>
				<select id="mce" class="mei" onchange="selecionaJogador(this)">
					<option value="">--</option>
<?php while($meia = $mei->fetchRow()){ ?>
					<option value="<?php echo $meia->cod_jogador; ?>"><?php echo $meia->ape_jogador.' - '.$meia->clu_jogador.' ('.$meia->qtd_jogador.' conv.)'; ?></option>
<?php } $mei->seek(); ?>
				</select>
			</div>

			<div id="meia-centro" class="meia">
				<label>Meia Centro</label>
				<select id="mc" class="mei" onchange="selecionaJogador(this)">
					<option value="">--</option>
<?php while($meia = $mei->fetchRow()){ ?>
					<option value="<?php echo $meia->cod_jogador; ?>"><?php echo $meia->ape_jogador.' - '.$meia->clu_jogador.' ('.$meia->qtd_jogador.' conv.)'; ?></option>
<?php } $mei->seek(); ?>
				</select>
			</div>

			<div id="meia-centro-direito" class="meia">
				<label>Meia Centro Direito</label>
				<select id="mcd" class="mei" onchange="selecionaJogador(this)">
					<option value="">--</option>
<?php while($meia = $mei->fetchRow()){ ?>
					<option value="<?php echo $meia->cod_jogador; ?>"><?php echo $meia->ape_jogador.' - '.$meia->clu_jogador.' ('.$meia->qtd_jogador.' conv.)'; ?></option>
<?php } $mei->seek(); ?>
				</select>
			</div>

			<div id="meia-direito" class="meia">
				<label>Meia Direito</label>
				<select id="md" class="mei" onchange="selecionaJogador(this)">
					<option value="">--</option>
<?php while($meia = $mei->fetchRow()){ ?>
					<option value="<?php echo $meia->cod_jogador; ?>"><?php echo $meia->ape_jogador.' - '.$meia->clu_jogador.' ('.$meia->qtd_jogador.' conv.)'; ?></option>
<?php } $mei->seek(); ?>
				</select>
			</div>

			<div id="meia-atacante-centro" class="meia">
				<label>Meia Atacante Centro</label>
				<select id="mac" class="mei" onchange="selecionaJogador(this)">
					<option value="">--</option>
<?php while($meia = $mei->fetchRow()){ ?>
					<option value="<?php echo $meia->cod_jogador; ?>"><?php echo $meia->ape_jogador.' - '.$meia->clu_jogador.' ('.$meia->qtd_jogador.' conv.)'; ?></option>
<?php } $mei->free(); ?>
				</select>
			</div>

			<div id="atacante-centro-esquerdo" class="atacante">
				<label>Atacante Centro Esquerdo</label>
				<select id="ace" class="ata" onchange="selecionaJogador(this)">
					<option value="">--</option>
<?php while($atacante = $ata->fetchRow()){ ?>
					<option value="<?php echo $atacante->cod_jogador; ?>"><?php echo $atacante->ape_jogador.' - '.$atacante->clu_jogador.' ('.$atacante->qtd_jogador.' conv.)'; ?></option>
<?php } $ata->seek(); ?>
				</select>
			</div>

			<div id="atacante-centro" class="atacante">
				<label>Atacante Centro</label>
				<select id="ac" class="ata" onchange="selecionaJogador(this)">
					<option value="">--</option>
<?php while($atacante = $ata->fetchRow()){ ?>
					<option value="<?php echo $atacante->cod_jogador; ?>"><?php echo $atacante->ape_jogador.' - '.$atacante->clu_jogador.' ('.$atacante->qtd_jogador.' conv.)'; ?></option>
<?php } $ata->seek(); ?>
				</select>
			</div>

			<div id="atacante-centro-direito" class="atacante">
				<label>Atacante Centro Direito</label>
				<select id="acd" class="ata" onchange="selecionaJogador(this)">
					<option value="">--</option>
<?php while($atacante = $ata->fetchRow()){ ?>
					<option value="<?php echo $atacante->cod_jogador; ?>"><?php echo $atacante->ape_jogador.' - '.$atacante->clu_jogador.' ('.$atacante->qtd_jogador.' conv.)'; ?></option>
<?php } $ata->free(); ?>
				</select>
			</div>
		</div>

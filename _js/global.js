var q = 0;
var qZ = 0;
var qL = 0;
var qV = 0;
var qM = 0;
var qA = 0;

var zce = 0;
var zc = 0;
var zcd = 0;

var vce = 0;
var vc = 0;
var vcd = 0;

var me = 0;
var mce = 0;
var mc = 0;
var mcd = 0;
var md = 0;
var mac = 0;

var ace = 0;
var ac = 0;
var acd = 0;

$(document).ready(function(){
	mostraJogadores();

	$('.zag').blur(function(){
		selecionaJogador(this);
	});
	$('.vol').blur(function(){
		selecionaJogador(this);
	});
	$('.mei').blur(function(){
		selecionaJogador(this);
	});
	$('.ata').blur(function(){
		selecionaJogador(this);
	});

});
function selecionaPosicao(ths){
	if(ths.id == 'zagueiros'){
		qZ = parseInt(ths.value);
	}else if(ths.id == 'laterais'){
		qL = parseInt(ths.value);
	}else if(ths.id == 'volantes'){
		qV = parseInt(ths.value);
	}else if(ths.id == 'meias'){
		qM = parseInt(ths.value);
	}else if(ths.id == 'atacantes'){
		qA = parseInt(ths.value);
	}
}

function somaPosicao(ths){
	soma = (qZ + qL + qV + qM + qA);
	q = soma - ths.value;
	if(soma > 0){
		$('#restante span').html(10 - soma);
	}else{
		$('#restante span').html(10);
	}

	if(q > 9){
		$('#volantes option:eq(3)').css('display', 'none');
		$('#volantes option:eq(3)').attr("disabled", true);

		$('#meias option:eq(6)').css('display', 'none');
		$('#meias option:eq(6)').attr("disabled", true);

		$('#atacantes option:eq(3)').css('display', 'none');
		$('#atacantes option:eq(3)').attr("disabled", true);
	}else{
		$('#volantes option:eq(3)').css('display', '');
		$('#volantes option:eq(3)').removeAttr("disabled");

		$('#meias option:eq(6)').css('display', '');
		$('#meias option:eq(6)').removeAttr("disabled");

		$('#atacantes option:eq(3)').css('display', '');
		$('#atacantes option:eq(3)').removeAttr("disabled");
	}
	if(q > 8){
		$('#zagueiros option:eq(2)').css('display', 'none');
		$('#zagueiros option:eq(2)').attr("disabled", true);

		$('#laterais option:eq(1)').css('display', 'none');
		$('#laterais option:eq(1)').attr("disabled", true);

		$('#volantes option:eq(2)').css('display', 'none');
		$('#volantes option:eq(2)').attr("disabled", true);

		$('#meias option:eq(5)').css('display', 'none');
		$('#meias option:eq(5)').attr("disabled", true);

		$('#atacantes option:eq(2)').css('display', 'none');
		$('#atacantes option:eq(2)').attr("disabled", true);
	}else{
		$('#zagueiros option:eq(2)').css('display', '');
		$('#zagueiros option:eq(2)').removeAttr("disabled");

		$('#laterais option:eq(1)').css('display', '');
		$('#laterais option:eq(1)').removeAttr("disabled");

		$('#volantes option:eq(2)').css('display', '');
		$('#volantes option:eq(2)').removeAttr("disabled");

		$('#meias option:eq(5)').css('display', '');
		$('#meias option:eq(5)').removeAttr("disabled");

		$('#atacantes option:eq(2)').css('display', '');
		$('#atacantes option:eq(2)').removeAttr("disabled");
	}
	if(q > 7){
		$('#zagueiros option:eq(1)').css('display', 'none');
		$('#zagueiros option:eq(1)').attr("disabled", true);

		$('#volantes option:eq(1)').css('display', 'none');
		$('#volantes option:eq(1)').attr("disabled", true);

		$('#meias option:eq(4)').css('display', 'none');
		$('#meias option:eq(4)').attr("disabled", true);

		$('#atacantes option:eq(1)').css('display', 'none');
		$('#atacantes option:eq(1)').attr("disabled", true);
	}else{
		$('#zagueiros option:eq(1)').css('display', '');
		$('#zagueiros option:eq(1)').removeAttr("disabled");

		$('#volantes option:eq(1)').css('display', '');
		$('#volantes option:eq(1)').removeAttr("disabled");

		$('#meias option:eq(4)').css('display', '');
		$('#meias option:eq(4)').removeAttr("disabled");

		$('#atacantes option:eq(1)').css('display', '');
		$('#atacantes option:eq(1)').removeAttr("disabled");
	}
	if(q > 6){
		$('#meias option:eq(3)').css('display', 'none');
		$('#meias option:eq(3)').attr("disabled", true);
	}else{
		$('#meias option:eq(3)').css('display', '');
		$('#meias option:eq(3)').removeAttr("disabled");
	}
	if(q > 5){
		$('#meias option:eq(2)').css('display', 'none');
		$('#meias option:eq(2)').attr("disabled", true);
	}else{
		$('#meias option:eq(2)').css('display', '');
		$('#meias option:eq(2)').removeAttr("disabled");
	}
	if(q > 4){
		$('#meias option:eq(1)').css('display', 'none');
		$('#meias option:eq(1)').attr("disabled", true);
	}else{
		$('#meias option:eq(1)').css('display', '');
		$('#meias option:eq(1)').removeAttr("disabled");
	}

	mostraJogadores();

}

function mostraJogadores(){
	if($('#zagueiros').val() < 2){
		$('#zagueiro-centro-esquerdo').css('display', 'none');
		$('#zagueiro-centro-esquerdo').attr("disabled", true);

		$('#zagueiro-centro').css('display', 'none');
		$('#zagueiro-centro').attr("disabled", true);

		$('#zagueiro-centro-direito').css('display', 'none');
		$('#zagueiro-centro-direito').attr("disabled", true);
	}
	if($('#zagueiros').val() >= 2){
		$('#zagueiro-centro-esquerdo').css('display', '');
		$('#zagueiro-centro-esquerdo').removeAttr("disabled");

		$('#zagueiro-centro').css('display', 'none');
		$('#zagueiro-centro').attr("disabled", true);

		$('#zagueiro-centro-direito').css('display', '');
		$('#zagueiro-centro-direito').removeAttr("disabled");
	}
	if($('#zagueiros').val() == '3'){
		$('#zagueiro-centro').css('display', '');
		$('#zagueiro-centro').removeAttr("disabled");
	}

	if($('#laterais').val() < 2){
		$('#lateral-esquerdo').css('display', 'none');
		$('#lateral-esquerdo').attr("disabled", true);

		$('#lateral-direito').css('display', 'none');
		$('#lateral-direito').attr("disabled", true);
	}
	if($('#laterais').val() == 2){
		$('#lateral-esquerdo').css('display', '');
		$('#lateral-esquerdo').removeAttr("disabled");

		$('#lateral-direito').css('display', '');
		$('#lateral-direito').removeAttr("disabled");
	}

	if($('#volantes').val() < 1){
		$('#volante-centro-esquerdo').css('display', 'none');
		$('#volante-centro-esquerdo').attr("disabled", true);

		$('#volante-centro').css('display', 'none');
		$('#volante-centro').attr("disabled", true);

		$('#volante-centro-direito').css('display', 'none');
		$('#volante-centro-direito').attr("disabled", true);
	}
	if($('#volantes').val() >= 1){
		$('#volante-centro-esquerdo').css('display', 'none');
		$('#volante-centro-esquerdo').attr("disabled", true);

		$('#volante-centro').css('display', '');
		$('#volante-centro').removeAttr("disabled");

		$('#volante-centro-direito').css('display', 'none');
		$('#volante-centro-direito').attr("disabled", true);
	}
	if($('#volantes').val() >= 2){
		$('#volante-centro-esquerdo').css('display', '');
		$('#volante-centro-esquerdo').removeAttr("disabled");

		$('#volante-centro').css('display', 'none');
		$('#volante-centro').attr("disabled", true);

		$('#volante-centro-direito').css('display', '');
		$('#volante-centro-direito').removeAttr("disabled");
	}
	if($('#volantes').val() == 3){
		$('#volante-centro').css('display', '');
		$('#volante-centro').removeAttr("disabled");
	}

	if($('#meias').val() < 1){
		$('#meia-esquerdo').css('display', 'none');
		$('#meia-esquerdo').attr("disabled", true);

		$('#meia-centro-esquerdo').css('display', 'none');
		$('#meia-centro-esquerdo').attr("disabled", true);

		$('#meia-centro').css('display', 'none');
		$('#meia-centro').attr("disabled", true);

		$('#meia-centro-direito').css('display', 'none');
		$('#meia-centro-direito').attr("disabled", true);

		$('#meia-direito').css('display', 'none');
		$('#meia-direito').attr("disabled", true);

		$('#meia-atacante-centro').css('display', 'none');
		$('#meia-atacante-centro').attr("disabled", true);
	}

	if($('#meias').val() >= 1){
		$('#meia-esquerdo').css('display', 'none');
		$('#meia-esquerdo').attr("disabled", true);

		$('#meia-centro-esquerdo').css('display', 'none');
		$('#meia-centro-esquerdo').attr("disabled", true);

		$('#meia-centro').css('display', 'none');
		$('#meia-centro').attr("disabled", true);

		$('#meia-centro-direito').css('display', 'none');
		$('#meia-centro-direito').attr("disabled", true);

		$('#meia-direito').css('display', 'none');
		$('#meia-direito').attr("disabled", true);

		$('#meia-atacante-centro').css('display', '');
		$('#meia-atacante-centro').removeAttr("disabled");
	}
	if($('#meias').val() >= 2){
		$('#meia-centro-esquerdo').css('display', '');
		$('#meia-centro-esquerdo').removeAttr("disabled");

		$('#meia-centro-direito').css('display', '');
		$('#meia-centro-direito').removeAttr("disabled");

		$('#meia-atacante-centro').css('display', 'none');
		$('#meia-atacante-centro').attr("disabled", true);
	}
	if($('#meias').val() >= 3){
		$('#meia-atacante-centro').css('display', '');
		$('#meia-atacante-centro').removeAttr("disabled");
	}
	if($('#meias').val() >= 4){
		$('#meia-esquerdo').css('display', '');
		$('#meia-esquerdo').removeAttr("disabled");

		$('#meia-direito').css('display', '');
		$('#meia-direito').removeAttr("disabled");

		$('#meia-atacante-centro').css('display', 'none');
		$('#meia-atacante-centro').attr("disabled", true);
	}
	if($('#meias').val() >= 5){
		$('#meia-atacante-centro').css('display', '');
		$('#meia-atacante-centro').removeAttr("disabled");
	}
	if($('#meias').val() == 6){
		$('#meia-centro').css('display', '');
		$('#meia-centro').removeAttr("disabled");
	}

	if($('#atacantes').val() < 1){
		$('#atacante-centro-esquerdo').css('display', 'none');
		$('#atacante-centro-esquerdo').attr("disabled", true);

		$('#atacante-centro').css('display', 'none');
		$('#atacante-centro').attr("disabled", true);

		$('#atacante-centro-direito').css('display', 'none');
		$('#atacante-centro-direito').attr("disabled", true);
	}

	if($('#atacantes').val() >= 1){
		$('#atacante-centro').css('display', '');
		$('#atacante-centro').removeAttr("disabled");
	}
	if($('#atacantes').val() >= 2){
		$('#atacante-centro-esquerdo').css('display', '');
		$('#atacante-centro-esquerdo').removeAttr("disabled");

		$('#atacante-centro').css('display', 'none');
		$('#atacante-centro').attr("disabled", true);

		$('#atacante-centro-direito').css('display', '');
		$('#atacante-centro-direito').removeAttr("disabled");
	}
	if($('#atacantes').val() == 3){
		$('#atacante-centro').css('display', '');
		$('#atacante-centro').removeAttr("disabled");
	}

}

function selecionaJogador(ths){
	if(ths.className == 'zag'){
		if(ths.id == 'zce'){
			zce = ths.value;
			$('#zc option').each(function(){
				if($(this).val() == zce || $(this).val() == zcd){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#zcd option').each(function(){
				if($(this).val() == zce || $(this).val() == zcd){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
		}
		if(ths.id == 'zc'){
			zc = ths.value;
			$('#zce option').each(function(){
				if($(this).val() == zc || $(this).val() == zcd){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#zcd option').each(function(){
				if($(this).val() == zce || $(this).val() == zc){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
		}
		if(ths.id == 'zcd'){
			zcd = ths.value;
			$('#zce option').each(function(){
				if($(this).val() == zc || $(this).val() == zcd){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#zc option').each(function(){
				if($(this).val() == zce || $(this).val() == zcd){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});

		}

	}

	if(ths.className == 'mei'){
		if(ths.id == 'me'){
			me = ths.value;
			$('#mce option').each(function(){
				if($(this).val() == me || $(this).val() == mc || $(this).val() == mcd || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#mc option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mcd || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#mcd option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mc || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#md option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mc || $(this).val() == mcd || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#mac option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mc || $(this).val() == mcd || $(this).val() == md){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
		}
		if(ths.id == 'mce'){
			mce = ths.value;
			$('#me option').each(function(){
				if($(this).val() == mce || $(this).val() == mc || $(this).val() == mcd || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#mc option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mcd || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#mcd option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mc || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#md option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mc || $(this).val() == mcd || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#mac option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mc || $(this).val() == mcd || $(this).val() == md){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
		}
		if(ths.id == 'mc'){
			mc = ths.value;
			$('#me option').each(function(){
				if($(this).val() == mce || $(this).val() == mc || $(this).val() == mcd || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#mce option').each(function(){
				if($(this).val() == me || $(this).val() == mc || $(this).val() == mcd || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#mcd option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mc || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#md option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mc || $(this).val() == mcd || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#mac option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mc || $(this).val() == mcd || $(this).val() == md){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
		}
		if(ths.id == 'mcd'){
			mcd = ths.value;
			$('#me option').each(function(){
				if($(this).val() == mce || $(this).val() == mc || $(this).val() == mcd || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#mce option').each(function(){
				if($(this).val() == me || $(this).val() == mc || $(this).val() == mcd || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#mc option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mcd || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#md option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mc || $(this).val() == mcd || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#mac option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mc || $(this).val() == mcd || $(this).val() == md){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
		}
		if(ths.id == 'md'){
			md = ths.value;
			$('#me option').each(function(){
				if($(this).val() == mce || $(this).val() == mc || $(this).val() == mcd || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#mce option').each(function(){
				if($(this).val() == me || $(this).val() == mc || $(this).val() == mcd || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#mc option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mcd || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#mcd option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mc || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#mac option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mc || $(this).val() == mcd || $(this).val() == md){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
		}
		if(ths.id == 'mac'){
			mac = ths.value;
			$('#me option').each(function(){
				if($(this).val() == mce || $(this).val() == mc || $(this).val() == mcd || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#mce option').each(function(){
				if($(this).val() == me || $(this).val() == mc || $(this).val() == mcd || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#mc option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mcd || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#mcd option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mc || $(this).val() == md || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#md option').each(function(){
				if($(this).val() == me || $(this).val() == mce || $(this).val() == mc || $(this).val() == mcd || $(this).val() == mac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
		}

	}

	if(ths.className == 'vol'){
		if(ths.id == 'vce'){
			vce = ths.value;
			$('#vc option').each(function(){
				if($(this).val() == vce || $(this).val() == vcd){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#vcd option').each(function(){
				if($(this).val() == vce || $(this).val() == vcd){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
		}
		if(ths.id == 'vc'){
			vc = ths.value;
			$('#vce option').each(function(){
				if($(this).val() == vc || $(this).val() == vcd){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#vcd option').each(function(){
				if($(this).val() == vce || $(this).val() == vc){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
		}
		if(ths.id == 'vcd'){
			vcd = ths.value;
			$('#vce option').each(function(){
				if($(this).val() == vc || $(this).val() == vcd){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#vc option').each(function(){
				if($(this).val() == vce || $(this).val() == vcd){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});

		}

	}

	if(ths.className == 'ata'){
		if(ths.id == 'ace'){
			ace = ths.value;
			$('#ac option').each(function(){
				if($(this).val() == ace || $(this).val() == acd){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#acd option').each(function(){
				if($(this).val() == ace || $(this).val() == acd){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
		}
		if(ths.id == 'ac'){
			ac = ths.value;
			$('#ace option').each(function(){
				if($(this).val() == ac || $(this).val() == acd){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#acd option').each(function(){
				if($(this).val() == ace || $(this).val() == ac){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
		}
		if(ths.id == 'acd'){
			acd = ths.value;
			$('#ace option').each(function(){
				if($(this).val() == ac || $(this).val() == acd){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});
			$('#ac option').each(function(){
				if($(this).val() == ace || $(this).val() == acd){
					$(this).css('display','none');
					$(this).attr("disabled", true);
				}else{
					$(this).css('display','');
					$(this).removeAttr("disabled");
				}
			});

		}

	}
}
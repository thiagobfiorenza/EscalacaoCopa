<?php
ini_set('include_path', 'C:/xampp/php/PEAR/');
define('dir', 'C:/xampp/htdocs/escalacao/');
define('url', 'http://localhost/escalacao/');
define('lnk', 'http://localhost/escalacao?q=');
require_once('C:/xampp/php/PEAR/MDB2.php');
require_once('./_cfg/conexao.php');

function erro($valor){
	if(PEAR::isError($valor)){
		die('<pre>'.$valor->getMessage().$valor->getUserInfo().'</pre>');
	}
}
?>

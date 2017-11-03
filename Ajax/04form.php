<?php
	$user = $_POST['user'];
	$psd = $_POST['psd'];
	if($user=='admin' && $psd=='admin'){	
		echo 'success';
	}else{	
		echo 'erro123';
	}
?>
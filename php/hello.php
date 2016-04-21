<?php
	header("Content-Type:text/html;charset=utf-8");
	
	$msg = json_decode(file_get_contents('php://input'),true);
	$succ='{"new_id":"modules"}';
	$err='{"ERROR":"账户名或密码错误"}';
	if($msg["name"] == '123@163.com' && $msg["pasw"] == '123'){
		echo $succ;
	}else{
		echo $err;
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Ertuğrul Özcan</title>
		<meta charset="utf-8"/>
		
		<!--jQuery-->
		<script src="js/jquery-2.1.4.min.js"></script>
		
		<!--Bootstrap-->
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<script src="js/bootstrap.min.js"></script>
		
		<!--CSS-->
		<link rel="stylesheet" type="text/css" href="css/fonts.css">
		<link rel="stylesheet" type="text/css" href="css/prettify.css">
		<link rel="stylesheet" type="text/css" title="Black" href="css/body.css">
		<link rel="alternate stylesheet" title="White" href="css/body_white.css">
		
		<!--JScripts-->
		<script src="js/navigateService.js"></script>
		<script src="js/prettify.js"></script>
		<script>
			function onLoad(params)
			{
				navigate('main.php');
			}
		</script>
	</head>
	
	<body onload="onLoad();">
		<?php require 'header.php'; ?>
		<?php require 'content.php'; ?>
		<?php require 'footer.php'; ?>
	</body>
</html>	
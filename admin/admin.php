<!DOCTYPE html>
<html>
	<head>
		<title>Ertuğrul Özcan</title>
		<meta charset="utf-8"/>
		
		<!--jQuery-->
		<script src="../js/jquery-2.1.4.min.js"></script>
		
		<!--Bootstrap-->
		<link href="../css/bootstrap.min.css" rel="stylesheet">
		<script src="../js/bootstrap.min.js"></script>
		
		<!--CSS-->
		<link rel="stylesheet" type="text/css" href="../css/fonts.css">
		<link rel="stylesheet" type="text/css" href="../css/prettify.css">
		<link rel="stylesheet" type="text/css" title="Black" href="../css/body.css">
		<link rel="alternate stylesheet" title="White" href="../css/body_white.css">
		
		<!--JScripts-->
		<script src="../js/navigateService.js"></script>
	</head>
	
	<body onload="navigate('common.php');">
		<div class="header">
			<div style="margin-left: 2%;">
				<maintitle>ertuğrul özcan</maintitle>
		        <br />
		        <subtitle>Kişisel Web Sitesi</subtitle>
			</div>
			
			<div class="menu">
				<a href="javascript:void(0);" class="selectedMenuItem" onclick="navigate('common.php'); doSelected(this);">Genel</a>
				<a href="javascript:void(0);" class="unselectedMenuItem" onclick="navigate('postmanagement.php'); doSelected(this);">Gönderiler</a>
				<a href="javascript:void(0);" class="unselectedMenuItem" onclick="navigate('settings.php'); doSelected(this);">Ayarlar</a>
			</div>
		</div>

		<div id="contentPanel" class="contentpanel" style="width: 96%; padding: 2%;">
			
		</div>

		<?php require 'footer.php'; ?>
	</body>
</html>	
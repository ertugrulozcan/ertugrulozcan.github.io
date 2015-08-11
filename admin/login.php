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
	</head>
	
	<body>
		<div class="header">
			<div style="margin-left: 2%;">
				<maintitle>ertuğrul özcan</maintitle>
		        <br />
		        <subtitle>Kişisel Web Sitesi</subtitle>
			</div>
			
			<div class="menu">
				<a href="javascript:void(0);" class="selectedMenuItem">Yönetim paneli</a>
			</div>
		</div>

		<div class="content">
			<table id="ContentTable" style="width: 96%; height: 100%; margin-left: 2%; margin-right: 2%; padding-top: 2%;">
				<td class="leftcolumn">
					<div class="leftpanel">
						
					</div>
				</td>
				
				<td class="centercolumn">
					<div id="contentPanel" class="contentpanel">
						<div class="panelBoxItem" style="width:30%;">
					        <table>
					            <tr>
									<h3>Giriş</h3>    
					            </tr>
					            <tr>
									<div>
										<form role="form" action="admin.php" method="post">
											<div class="form-group">
												<label for="username">Kullanıcı adı:</label>
												<input type="text" class="form-control" id="username">
											</div>
											<div class="form-group">
												<label for="password">Parola:</label>
												<input type="password" class="form-control" id="password">
											</div>
											<button type="button" class="btn btn-success">Giriş</button>
										</form>
									</div>
					            </tr>
					        </table>
					    </div>
					</div>
				</td>
				
				<td class="rightcolumn">
					<div class="rightpanel">
						
					</div>
				</td>
			</table>
		</div>

		<?php require 'footer.php'; ?>
	</body>
</html>	
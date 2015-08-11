<!-- WYSIWYG Editor -->
<script type="text/javascript" src="../js/tinymce/tinymce.min.js"></script>
<script type="text/javascript">
    tinymce.init({
        selector: "#TextEditor",
		theme: "modern",
		plugins: [
			"advlist autolink lists link image charmap print preview hr anchor pagebreak",
			"searchreplace wordcount visualblocks visualchars code fullscreen",
			"insertdatetime media nonbreaking save table contextmenu directionality",
			"emoticons template paste textcolor colorpicker textpattern imagetools"
			],
			toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
			toolbar2: "print preview media | forecolor backcolor emoticons",
			image_advtab: true
	});
</script>

<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST")
	{
		SendPost($_POST["title"], $_POST["author"], $_POST["content"]);
	}
	
	function SendPost($title, $author, $content)
	{
		// Veritabani bilgileri
		$servername = "localhost";
		$username = "root";
		$password = "DokuzBin716";
		$dbname = "ertugrulozcanDB";
		
		// Baglantinin olusturulmasi
		$conn = new mysqli($servername, $username, $password, $dbname);
		
		// Baglantiyi kontrol et
		if ($conn->connect_error)
		{
		    die("Veritabani baglanti hatasi: " . $conn->connect_error);
		} 
		
		// Insert sorgusu
		$sql = "INSERT INTO tPosts (title, author, content) VALUES ('" . 
				htmlspecialchars($title, ENT_QUOTES) . "', '" . 
				htmlspecialchars($author, ENT_QUOTES) . "', '" . 
				htmlspecialchars($content, ENT_QUOTES) . "')";
				
		if ($conn->query($sql) === TRUE)
		{
			echo "Yeni gönderi başarıyla oluşturuldu.";
		}
		else
		{
			echo "Hata: " . $sql . "<br>" . $conn->error;
		}
		
		// Baglantinin kapatilmasi
		$conn->close();
	}
?>
		
<div>
	<button type="button" class="btn btn-success btn-block" onclick="$('#NewPostPanel').slideToggle('slow');" style="margin-bottom: 1%;">Yeni gönderi oluştur</button>
	<div id="NewPostPanel" style="display: none; border:1px solid #444444; background-color:#151515; border-radius:5px; padding: 0 2% 1.5% 2%; margin-bottom: 1%;">
		<table>
	        <tr>
				<h3>Yeni gönderi</h3>    
	        </tr>
	        <tr>
				<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
					<div class="form-group">
						<label for="title">Başlık:</label>
						<input type="text" class="form-control" name="title">
					</div>
					<div class="form-group">
						<label for="author">Yazar:</label>
						<input type="text" class="form-control" name="author">
					</div>
	    			<div class="form-group">
	      				<label for="content">İçerik:</label>
	      				<textarea id="TextEditor" class="form-control" rows="8" name="content"></textarea>
	    			</div>
					
					</br>	
					<button id="CreateButton" type="submit" class="btn btn-success">Oluştur</button>
	  			</form>
			</tr>
		</table>
	</div>
	
	<div style="border:1px solid #444444; background-color:#151515; border-radius:5px; padding: 0 2% 1.5% 2%; margin-bottom: 1%;">
		<table>
	        <tr>
				<h3>Gönderiler</h3>    
	        </tr>
	        <tr>
				<table class="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Başlık</th>
							<th>Tarih</th>
							<th>Yazar</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<?php
							function test($param)
							{
								echo $param;
							}

							// Veritabanindan postlar cekilir ve ekranda listelenmek uzere html kodu uretilir
							// Veritabani bilgileri
							$servername = "localhost";
							$username = "root";
							$password = "DokuzBin716";
							$dbname = "ertugrulozcanDB";
							
							// Baglantinin olusturulmasi
							$conn = new mysqli($servername, $username, $password, $dbname);
							
							// Baglantiyi kontrol et
							if ($conn->connect_error)
							{
							    die("Veritabani baglanti hatasi: " . $conn->connect_error);
							} 
							
							// Select sorgusu
							$sql = "SELECT postID, title, date, content FROM tPosts";
							$result = $conn->query($sql);
							
							if ($result->num_rows > 0)
							{
							    while($row = $result->fetch_assoc())
								{
									$postID = htmlspecialchars_decode($row["postID"], ENT_QUOTES);
									$title = htmlspecialchars_decode($row["title"], ENT_QUOTES);
									$date = htmlspecialchars_decode($row["date"], ENT_QUOTES);
									$author = htmlspecialchars_decode($row["author"], ENT_QUOTES);
									
									echo	"<tr class=\"postListItem\">".
												"<td>" . ((!isset($postID) || trim($postID)==='') ? "???" : $postID) . "</td>".
												"<td>" . ((!isset($title) || trim($title)==='') ? "(Başlıksız)" : $title) . "</td>".
												"<td>" . ((!isset($date) || trim($date)==='') ? "???" : $date) . "</td>".
												"<td>" . ((!isset($author) || trim($author)==='') ? "(Yazar bilinmiyor)" : $author) . "</td>".
												"<td>" . 
													"<button type=\"button\" class=\"btn btn-primary btn-sm\" style=\"margin-right: 10px;\">Düzenle</button>" . 
													"<button type=\"button\" class=\"btn btn-danger btn-sm\" style=\"margin-right: 10px;\">Sil</button>" . 
												"</td>".
											"</tr>";
							    }
							}
							else
							{ }
							$conn->close();
						?>
					</tbody>
				</table>
			</tr>
		</table>
	</div>
</div>
<?php

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
        //echo "ID: " . $row["postID"] . "</br>" . "Başlık: " . $row["title"]. " - Tarih: " . $row["date"]. "</br> " . $row["content"]. "<br>";
        echo "<div class=\"panelBoxItem\">".
                "<table>". 
                    "<tr>".
                        "<table style=\"width: 100%;\">".
                            "<td>".
                                "<h3>" . htmlspecialchars_decode($row["title"], ENT_QUOTES) . "</h3>" .
                            "</td>".
                            "<td style=\"width: 5%;\">".
                                "<span style=\"font-size: 90%; opacity: 0.8;\">" . htmlspecialchars_decode($row["date"], ENT_QUOTES) . "</span>".
                            "</td>".
                        "</table>".
                    "</tr>".
                    "<tr>".
                        "<p>" . htmlspecialchars_decode($row["content"], ENT_QUOTES) . "</p>".
                    "</tr>".
                "</table>".
                "</br>".
                "<button type=\"button\" class=\"btn btn-success\">Devamını oku</button>".
            "</div>";
    }
}
else
{
    echo "Henüz hiç birşey yazılmamış.";
}
$conn->close();

?>
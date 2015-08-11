<script>
    function SwitchCSS(css_title)
    {
    	var i, link_tag;
    	for (i = 0, link_tag = document.getElementsByTagName("link"); i < link_tag.length; i++)
    	{
    		if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) && link_tag[i].title)
    		{
    			link_tag[i].disabled = true;
    			if (link_tag[i].title == css_title)
    			{
    				link_tag[i].disabled = false;
    			}
    		}
    	}
    }
</script>

<div class="footer">
    <table style="width: 100%;">
        <td>
            <div style="margin-left: 8%;">
                <div class="dropup" style="margin-top: 0;">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Tema
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a onclick="SwitchCSS('Black');">Siyah</a></li>
                        <li><a onclick="SwitchCSS('White');">Beyaz</a></li>
                    </ul>
                </div>
            </div>
        </td>
        
        <td>
            <div id="footerProfileCard">
                ertugrul.ozcan@bil.omu.edu.tr
                <br />
        		<?php
        			echo "Ahmet Ertuğrul Özcan | " . date("Y");
        		?>
                <p>
                    <div>
                        <a href="http://www.github.com/ertugrulozcan" target="_blank"><img src="assets/icons/github.png" width="30" border="0" alt="W3Schools" /></a>
                        <a href="https://www.linkedin.com/pub/ahmet-ertu%C4%9Frul-%C3%B6zcan/b9/7bb/992" target="_blank"><img src="assets/icons/linkedin.png" width="30" border="0" alt="W3Schools" /></a>
                        <a href="http://www.facebook.com/ahmetertugrul.ozcan" target="_blank"><img src="assets/icons/facebook.png" width="30" border="0" alt="W3Schools" /></a>
                        <a href="http://plus.google.com/112670926913970378391/posts" target="_blank"><img src="assets/icons/googleplus.png" width="30" border="0" alt="W3Schools" /></a>
                        <a href="http://www.twitter.com/ertugruIozcan" target="_blank"><img src="assets/icons/twitter.png" width="30" border="0" alt="W3Schools" /></a>
                    </div>
                </p>
            </div>
        </td>
    </table>
</div>
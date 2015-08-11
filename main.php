<div>
	<h1>Lorem ipsum H1</h1>
    <h2>Lorem ipsum H2</h2>
    <h3>Lorem ipsum H3</h3>
    <h4>Lorem ipsum H4</h4>
    <h5>Lorem ipsum H5</h5>
    <h6>Lorem ipsum H6</h6>
    
    </br>
    </br>
    
    <?php require 'posts.php'; ?>
    
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	
	<img src="assets/images/ambigram.png" width="200" />
    </br>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>

	<p>
		Kod örneği;
		<pre class="prettyprint">
using WeatherAPI.Common;
using Windows.Web.Http;
namespace HavaDurumu.WeatherAPI
{
    public class Weather : INotifyPropertyChanged
    {
        #region Sınıf üyeleri
        private int weatherID;
        /// summary
        /// WeatherAPI ID
        /// summary
        public int WeatherID
        {
            get { return weatherID; }
            set { weatherID = value; }
        }
                    
        #endregion
        public Weather()
        {
            int a = 0;
            string str = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
            this.Location = new Location();
            this.Temperature = new Temperature();
            this.TempMax = new Temperature();
            this.TempMin = new Temperature();
            this.Wind = new Wind();
        }
    }
}
		</pre>
	</p>
</div>

<script>
    prettyPrint();    
</script>
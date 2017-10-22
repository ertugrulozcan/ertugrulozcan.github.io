var LOCALIZATION_SERVICE_URL = "https://ertis.azurewebsites.net/api/localization/";

var currentDictionary = null;

function FetchLocalizationDictionary(culture)
{
	if (window.XMLHttpRequest) {
		// code for modern browsers
		xmlhttp = new XMLHttpRequest();
	}
	else {
		// code for old IE browsers
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	var httpReq = xmlhttp;
	httpReq.onreadystatechange = function () {
		if (this.readyState == 4) {
			if (this.status == 200) {
				SetCurrentDictionary(this.responseText);
			}
		}
	};

	httpReq.open("GET", LOCALIZATION_SERVICE_URL + culture, true);
	httpReq.setRequestHeader('Access-Control-Allow-Headers', '*');
	httpReq.setRequestHeader('Access-Control-Allow-Origin', '*');
	httpReq.setRequestHeader("Content-type", "application/json");
	httpReq.send();
}

function SetCurrentDictionary(dict)
{
	console.log("LocalizationDictionary : " + dict);

	currentDictionary = dict;
	BindStrings(currentDictionary.KeyValueDictionary);
}

function Localize(culture)
{
	console.log("Localize()");

	FetchLocalizationDictionary(culture);
}

function BindStrings(data) {
	console.log("Data : " + data);

	$.each(data, function (key, val) {
		try {
			document.getElementById(key).innerHTML = val;
			console.log(key + " : " + val);
		}
		catch (exc) {
			console.log("Hata : " + exc.message + "(key:" + key + ", value:" + val + ")");
		}
	});
	
	console.log("String veriler bind edildi.");
}
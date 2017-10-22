var LOCALIZATION_SERVICE_URL = "https://ertis.azurewebsites.net/api/localization/tr-TR";

function BindStrings(language)
{
	$.getJSON("./strings/" + language + ".json", function (data)
	{
		$.each(data, function (key, val)
		{
			try
			{
				document.getElementById(key).innerHTML = val;
				//console.log(key + " : " + val);
			}
			catch (exc)
			{
				console.log("Hata : " + exc.message + "(key:" + key + ", value:" + val + ")");
			}
		});
	})
	.done(function ()
	{
		console.log("Json verisi basariyla okundu.");
	})
	.fail(function (jqxhr, textStatus, error)
	{
		console.log("Json hatasi!");
		var errMessage = textStatus + ", " + error;
		console.log("Hata : " + errMessage);
	});

	console.log("String veriler bind edildi.");
}

function Localize(jsonData)
{
	console.log("Localize()");

	if (window.XMLHttpRequest)
	{
		// code for modern browsers
		xmlhttp = new XMLHttpRequest();
	}
	else
	{
		// code for old IE browsers
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	var httpReq = xmlhttp;
	httpReq.onreadystatechange = function ()
	{
		if (this.readyState == 4)
		{
			if (this.status == 200)
			{
				alert(this.responseText);
			}
		}
	};

	httpReq.open("GET", LOCALIZATION_SERVICE_URL, true);
	httpReq.setRequestHeader('Access-Control-Allow-Headers', '*');
	httpReq.setRequestHeader('Access-Control-Allow-Origin', '*');
	httpReq.setRequestHeader("Content-type", "application/json");
	httpReq.send();
}
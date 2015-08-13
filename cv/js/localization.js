function BindStrings(language)
{
	$.getJSON("./strings/" + language + ".json", function(data)
	{
		$.each(data, function(key, val)
		{
			document.getElementById(key).innerHTML = value;
			//console.log(key + " : " + val);
		});
	})
	.done(function()
	{
		console.log("Json verisi basariyla okundu.");
	})
	.fail(function(jqxhr, textStatus, error)
	{
		console.log("Json hatasi!");
		var errMessage = textStatus + ", " + error;
		console.log( "Hata : " + errMessage );
	});

	console.log("String veriler bind edildi.");
}
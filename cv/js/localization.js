function BindStrings(language)
{
	console.log("BindStrings();");

	$.getJSON("./strings/" + language + ".json", function(data)
	{
		$.each(data, function(key, val)
		{
			console.log(key + " : " + val);
		});
	});
}
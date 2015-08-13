function BindStrings(language)
{
	console.log("BindStrings() called.");

	$.getJSON("./strings/" + language + ".json", function(data)
	{
		console.log("data : " + data);

		$.each(data, function(key, val)
		{
			console.log(key + " : " + val);
		});
	});

	console.log("BindStrings() finished.");
}
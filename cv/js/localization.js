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
	})
	.done(function()
	{
		console.log("done();");
	})
	.fail(function(jqxhr, textStatus, error)
	{
		console.log("fail();");
		var errMessage = textStatus + ", " + error;
		console.log( "Request Failed: " + errMessage );
	})
	.always(function()
	{
		console.log("always();");
	});

	console.log("BindStrings() finished.");
}
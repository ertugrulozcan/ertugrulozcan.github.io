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
	.fail(function()
	{
		console.log("fail();");
	})
	.always(function()
	{
		console.log("always();");
	});

	console.log("BindStrings() finished.");
}
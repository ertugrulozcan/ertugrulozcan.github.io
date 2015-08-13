function BindStrings(language)
{
	//var json = ReadFromFile("/strings/" + language + ".json");

	$.getJSON("./strings/" + language + ".json", function(data)
	{
		$.each( data, function( key, val )
			{
				console.log(key + " : " + val);
			});
	});
}

function ReadFromFile(file)
{
	var reader = new FileReader();

	reader.onload = function(e)
	{
		var text = reader.result;
	}

	return reader.readAsText(file, 'utf-8');
}
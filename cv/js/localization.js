function BindStrings(language)
{
	//var json = ReadFromFile("/strings/" + language + ".json");

	$.getJSON("./strings/" + language + ".json", function(json)
	{
		alert(json);
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
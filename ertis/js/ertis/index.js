function IndexOnLoad()
{
	IncludePages();

	console.log("IndexOnLoad()");
}

function IncludePages()
{
	// SideBar
	$.get("sidebar.html", function (data) { $("#sidebar").html(data); });
}
function navigate(page)
{
	$("#contentPanel").load(page);
};

function doSelected(element)
{
	var menuItems = document.getElementsByClassName("selectedMenuItem");
	menuItems[0].className = 'unselectedMenuItem';
	element.className = 'selectedMenuItem';
};
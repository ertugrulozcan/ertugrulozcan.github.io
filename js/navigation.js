function navigate(page, menuitem)
{
    $("#ContentDiv").load(page);

    if (menuitem != null)
        doSelected(menuitem);
};

function doSelected(element)
{
    if (element.className == 'selected')
        return;

    // Eski selected elemanın unselected yapılması
    var menuItems = document.getElementsByClassName("selected");
    menuItems[0].className = 'unselected';

    // Yeni elemanın selected yapılması
    element.className = 'selected';
};
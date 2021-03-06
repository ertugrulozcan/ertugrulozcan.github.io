function IndexOnLoad() {
    if (!checkUserToken())
        return;

    IncludePages();

    console.log("IndexOnLoad()");
    console.log("LoginUser : " + session.user.card.fullName);
}

function IncludePages() {
    // SideBar
    $.get("sidebar.html", function(data) { $("#sidebar").html(data); });

    // HeaderBar
    $.get("header.html", function(data) { $("#headerbar").html(data); });

    // Dashboard
    $.get("dashboard.html", function(data) { $("#dashboard").html(data); });

    // Content
    $.get("content.html", function(data) { $("#content").html(data); });

    // Footer
    $.get("footer.html", function(data) { $("#footer").html(data); });

    // ChatBox
    $.get("chatbox.html", function(data) { $("#chatbox").html(data); });

    // RightSidebar
    $.get("rightsidebar.html", function(data) { $("#rightsidebar").html(data); });

    // BodyScripts
    $.get("bodyscripts.html", function(data) { $("#bodyscripts").html(data); });
}

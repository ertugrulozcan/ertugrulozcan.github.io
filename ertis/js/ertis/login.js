var SERVICE_URL = "https://ertis.azurewebsites.net/api/login";

function LoginOnLoad() {
    console.log("Test " + 1002);
    Localize("tr-TR");

    console.log("LoginOnLoad()");
    $("#progressRing").hide();
}

function LoginButtonClickHandler() {
    var username = $('#UsernameTextBox').val();
    var password = $('#PasswordBox').val();

    this.Login(username, password);

    return false; // prevent further bubbling of event
}

function Login(username, password) {
    console.log("Login()");

    SetErrorMessage("");
    disablePage();
    $("#progressRing").show();

    if (window.XMLHttpRequest) {
        // code for modern browsers
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for old IE browsers
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    var httpReq = xmlhttp;
    httpReq.onreadystatechange = function() {
        console.log("LoginResponse;\n" + this.responseText);

        if (!this.responseText)
            return;

        if (this.readyState == 0) {
            console.log("Request not initialized.");
            return;
        }

        if (this.readyState == 1) {
            console.log("Server connnection established.");
            return;
        }

        if (this.readyState == 2) {
            console.log("Request received.");
            return;
        }

        if (this.readyState == 3) {
            console.log("Request processing.");
            return;
        }

        if (this.readyState == 4) {
            if (this.status == 200) {
                console.log("Login success");

                CreateSession(username, this.responseText);
                window.location.assign("index.html");
            } else if (this.status == 401) {
                //showErrorMessage("Kullanıcı adı ya da şifre hatalı!");
                SetErrorMessage("UsernameOrPasswordIncorrect");

                console.log("Username or password is incorrect");
            } else {
                showErrorMessage(this.responseText);
                console.log("Login error;\n" + this.responseText);
            }
        }

        $("#progressRing").hide();
        enablePage();
    };

    httpReq.open("POST", SERVICE_URL, true);
    httpReq.setRequestHeader('Access-Control-Allow-Headers', '*');
    httpReq.setRequestHeader('Access-Control-Allow-Origin', '*');
    httpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpReq.send("username=" + username + "&password=" + password);

    console.log("Login request sent.");
}

function enablePage() {
    $("#inputsDiv").removeClass("disabledDiv");
    $("#buttonsDiv").removeClass("disabledDiv");
}

function disablePage() {
    $("#inputsDiv").addClass("disabledDiv");
    $("#buttonsDiv").addClass("disabledDiv");
}

function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function SetErrorMessage(messageLocKey) {
    if (messageLocKey) {
        $('#ErrorMessageTextBlock').attr("lockey", messageLocKey);

        var message = LocalizeKey(messageLocKey);
        $('#ErrorMessageTextBlock').text(message);
    } else {
        $('#ErrorMessageTextBlock').removeAttr("lockey");
        $('#ErrorMessageTextBlock').text("");
    }
}

function showMessage(message) {
    alert("Message\n" + message);
}

function showErrorMessage(message) {
    alert("Error\n" + message);
}

function IndeterminateProgressBar(progressbar) {
    $(progressbar).css({
        "padding-left": "0%",
        "padding-right": "90%"
    });

    $(progressbar).progressbar("option", "value", 100);

    $(progressbar).animate({
            paddingLeft: "90%",
            paddingRight: "0%"
        }, 1000, "linear",
        function() {
            IndeterminateProgressBar(progressbar);
        });
}

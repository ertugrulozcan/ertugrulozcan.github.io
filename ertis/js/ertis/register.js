var SERVICE_URL = "https://ertis.azurewebsites.net/api/account/register";

function RegisterOnLoad() {
    Localize("tr-TR");

    console.log("RegisterOnLoad()");
    $("#progressRing").hide();
}

function RegisterButtonClickHandler() {
    var name = $('#NameTextBox').val();
    var surname = $('#surnameTextBox').val();
    var birthdate = $('#birthDateBox').val();
    var phone = $('#phoneBox').val();
    var email = $('#emailBox').val();
    var password = $('#passwordBox').val();

    var user = {
        "card": {
            "name": name,
            "surname": surname,
            "birthDate": new Date(birthdate).toISOString().split('.')[0],
            "emailAddress": email,
            "phoneNumber": phone
        },
        "password": password
    }

    this.Register(user);
}

function Register(user) {
    console.log("Register()");

    $('#ErrorMessageTextBlock').text("");
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
        console.log("RegisterResponse;\n" + this.responseText);

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
                Login(user['username'], user['password']);
            } else {
                $('#ErrorMessageTextBlock').text(this.responseText);

                console.log("Login error;\n" + this.responseText);
            }
        }

        $("#progressRing").hide();
    };

    httpReq.open("POST", SERVICE_URL, true);
    httpReq.setRequestHeader('Access-Control-Allow-Headers', '*');
    httpReq.setRequestHeader('Access-Control-Allow-Origin', '*');
    httpReq.setRequestHeader("Content-type", "application/json");
    httpReq.send(JSON.stringify(user));

    console.log("Register request sent.");
    console.log(user);
}

function showMessage(message) {
    alert("Message\n" + message);
}

function showErrorMessage(message) {
    alert("Error\n" + message);
}
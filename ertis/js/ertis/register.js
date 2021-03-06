var SERVICE_URL = "https://ertis.azurewebsites.net/api/account/register";

function RegisterOnLoad() {
    Localize("tr-TR");

    console.log("RegisterOnLoad()");

    // Phone number format mask
    FixPhoneNumberStringFormat();

    // RegisterSuccessModalWindow
    SetRegisterSuccessModalWindow();

    $("#progressRing").hide();
}

function RegisterButtonClickHandler() {
    SetErrorMessage("");

    var name = $('#NameTextBox').val();
    var surname = $('#surnameTextBox').val();
    var birthdate = $('#birthDateBox').val();
    var phone = $('#phoneBox').val();
    var email = $('#emailBox').val();
    var password = $('#passwordBox').val();
    var repassword = $('#confirmPassword').val();

    if (!$.trim(name)) {
        SetErrorMessage("FillTheRequiredFields");
        return false;
    }

    if (!$.trim(surname)) {
        SetErrorMessage("FillTheRequiredFields");
        return false;
    }

    if (password != repassword) {
        SetErrorMessage("PasswordsDoNotMatch");
        return false;
    }

    var birthDateStr;
    var timestamp = Date.parse(birthdate);
    if (isNaN(timestamp) == false) {
        birthDateStr = new Date(birthdate).toISOString().split('.')[0];
    }

    var user = {
        "card": {
            "name": name,
            "surname": surname,
            "birthDate": birthDateStr,
            "emailAddress": email,
            "phoneNumber": phone
        },
        "password": password
    }

    this.Register(user);
    return false; // prevent further bubbling of event
}

function Register(user) {
    console.log("Register()");

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
        //console.log("RegisterResponse;\n" + this.responseText);

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
            var response = JSON.parse(this.responseText);

            if (this.status == 200 && response.statusCode == 200) {
                $('#RegisterSuccessModalWindow').modal({ backdrop: "static" });
            } else if (response.statusCode == 409) {
                SetErrorMessage("EmailAddressAlreadyExist");
            } else {
                //$('#ErrorMessageTextBlock').text(this.responseText);
                alert(this.responseText);
                console.log("Login error;\n" + this.responseText);
            }
        }

        $("#progressRing").hide();
        enablePage();
    };

    httpReq.open("POST", SERVICE_URL, true);
    httpReq.setRequestHeader('Access-Control-Allow-Headers', '*');
    httpReq.setRequestHeader('Access-Control-Allow-Origin', '*');
    httpReq.setRequestHeader("Content-type", "application/json");
    httpReq.send(JSON.stringify(user));

    console.log("Register request sent.");
    //console.log(user);
}

function enablePage() {
    $("#inputsDiv").removeClass("disabledDiv");
    $("#buttonsDiv").removeClass("disabledDiv");
}

function disablePage() {
    $("#inputsDiv").addClass("disabledDiv");
    $("#buttonsDiv").addClass("disabledDiv");
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

function FixPhoneNumberStringFormat() {
    $("#phoneBox").mask("999 999 9999");

    $("#phoneBox").on("blur", function() {
        if (!$("#phoneBox").val())
            $("#phoneBox").text("0");
    });
}

function SetRegisterSuccessModalWindow() {
    $("#RegisterSuccessModalWindow").on('hide.bs.modal', function() {
        Reload();
    });
}

function showMessage(message) {
    alert("Message\n" + message);
}

function showErrorMessage(message) {
    alert("Error\n" + message);
}

function Reload() {
    location.reload(true);
}

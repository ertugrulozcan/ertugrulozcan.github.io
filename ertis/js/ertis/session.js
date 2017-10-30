//
// Session
//
var session;

// Sample User Data;
/*
{
    "id": 1014,
    "card": {
        "name": "Ismet Acar",
        "surname": "Dogan",
        "fullName": "Ismet Acar Dogan",
        "birthDate": "1991-03-12T00:00:00",
        "joinDate": "2017-10-29T22:13:38",
        "emailAddress": "ismetacar@projectertis.com",
        "phoneNumber": "534 611 8505"
    },
    "userRole": 0
}
*/

function CreateSession(username, loginResponse) {
    var response = JSON.parse(loginResponse);

    session = {
        token: response.access_token,
        expire: response.expires_in,
        userID: response.user_id,
        user: undefined
    };

    createCookie("access_token", JSON.stringify(this.responseText), 1);
    createCookie("username", username, 1);
}

function checkUserToken() {
    if (document.cookie.indexOf("access_token") == -1) {
        location.href = "/ertis/login.html";
        return false;
    }

    return true;
}

function GetUser(userID) {
    if (window.XMLHttpRequest) {
        // code for modern browsers
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for old IE browsers
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    var httpReq = xmlhttp;
    httpReq.onreadystatechange = function() {
        if (!this.responseText)
            return;

        if (this.readyState == 4) {
            if (this.status == 200) {
                session.user = JSON.parse(this.responseText);

                console.log("LoginUser : " + session.card.fullName);
            }
        }
    };

    httpReq.open("GET", "http://ertis.azurewebsites.net/api/users/" + userID, true);
    httpReq.setRequestHeader('Access-Control-Allow-Headers', '*');
    httpReq.setRequestHeader('Access-Control-Allow-Origin', '*');
    httpReq.setRequestHeader("Content-type", "application/json");
    httpReq.setRequestHeader("Authorization", "Bearer " + session.token);
    httpReq.send();
}

//
// Session
//
var session;

function CreateSession(loginResponse) {
    console.log(loginResponse);

    session = JSON.parse(loginResponse);

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

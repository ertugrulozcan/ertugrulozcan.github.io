function checkUserToken() {
	if (document.cookie.indexOf("access_token") == -1) {
		location.href = "/login.html";
		return false;
	}

	return true;
}
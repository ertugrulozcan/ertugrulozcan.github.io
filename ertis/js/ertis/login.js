var SERVICE_URL = "http://ertis.azurewebsites.net/api/login";

function LoginButtonClickHandler()
{
	var username = $('#usernameTextField').val();
	var password = $('#passwordTextField').val();

	this.Login(username, password);
}

function Login(username, password)
{
	console.log("Login()");

	var httpReq = new XMLHttpRequest();
	httpReq.onreadystatechange = function ()
	{
		console.log("LoginResponse;\n" + this.responseText);

		if (!this.responseText)
			return;
		
		if (this.readyState == 4)
		{
			if (this.status == 200)
			{
				showMessage(this.responseText);
				console.log("Login success");
			}
			else if (this.status == 401)
			{
				showErrorMessage("Kullanıcı adı ya da şifre hatalı!");
				console.log("Username or password is incorrect");
			}
			else
			{
				showErrorMessage(this.responseText);
				console.log("Login error;\n" + this.responseText);
			}
		}
	};

	httpReq.open("POST", SERVICE_URL, true);
	httpReq.setRequestHeader('Access-Control-Allow-Headers', '*');
	httpReq.setRequestHeader('Access-Control-Allow-Origin', '*');
	httpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpReq.send("username=" + username + "&password=" + password);

	console.log("Login request sent.");
}

function showMessage(message)
{
	alert("Message\n" + message);
}

function showErrorMessage(message)
{
	alert("Error\n" + message);
}
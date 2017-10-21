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

	if (window.XMLHttpRequest)
	{
		// code for modern browsers
		xmlhttp = new XMLHttpRequest();
	}
	else
	{
		// code for old IE browsers
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	var httpReq = xmlhttp;
	httpReq.onreadystatechange = function ()
	{
		console.log("LoginResponse;\n" + this.responseText);

		if (!this.responseText)
			return;
		
		if (this.readyState == 0)
		{
			console.log("Request not initialized.");
			return;
		}

		if (this.readyState == 1)
		{
			console.log("Server connnection established.");
			return;
		}

		if (this.readyState == 2)
		{
			console.log("Request received.");
			return;
		}

		if (this.readyState == 3)
		{
			console.log("Request processing.");
			return;
		}
		
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
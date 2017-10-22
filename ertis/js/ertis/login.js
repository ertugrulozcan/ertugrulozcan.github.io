var SERVICE_URL = "https://ertis.azurewebsites.net/api/login";

function LoginButtonClickHandler()
{
	var username = $('#UsernameTextBox').val();
	var password = $('#PasswordBox').val();

	this.Login(username, password);
}

function Login(username, password)
{
	console.log("Login()");

	$('#ErrorMessageTextBlock').text("");
	$("#progressBar").show();
	$("#progressBar").progressbar({
		value: 100
	});
	IndeterminateProgressBar($("#progressBar"));
	
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
				//showErrorMessage("Kullanıcı adı ya da şifre hatalı!");
				$('#ErrorMessageTextBlock').text("Kullanıcı adı ya da şifre hatalı!");

				console.log("Username or password is incorrect");
			}
			else
			{
				showErrorMessage(this.responseText);
				console.log("Login error;\n" + this.responseText);
			}
		}

		$("#progressBar").hide();
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

function IndeterminateProgressBar(progressbar)
{
	$(progressbar).css(
	{
		"padding-left": "0%",
		"padding-right": "90%"
	});
	
	$(progressbar).progressbar("option", "value", 100);
	
	$(progressbar).animate(
	{
		paddingLeft: "90%",
		paddingRight: "0%"
	}, 1000, "linear",
	function () {
		IndeterminateProgressBar(progressbar);
	});
}
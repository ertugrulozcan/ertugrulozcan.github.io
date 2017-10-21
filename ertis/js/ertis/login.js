var SERVICE_URL = "http://ertis.azurewebsites.net/api/login";

function LoginButtonClickHandler()
{
	var username = $('#usernameTextField').val();
	var password = $('#passwordTextField').val();

	this.Login(username, password);
}

function Login(username, password)
{
	var httpReq = new XMLHttpRequest();
	httpReq.onreadystatechange = function ()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			showMessage(this.responseText);
		}
		else
		{
			showErrorMessage(this.responseText);
		}	
	};

	httpReq.open("POST", SERVICE_URL, true);
	httpReq.setRequestHeader('Access-Control-Allow-Headers', '*');
	httpReq.setRequestHeader('Access-Control-Allow-Origin', '*');
	httpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpReq.send("username=" + username + "&password=" + password);
}

function LoginWithAjax(username, password)
{
	$.ajax(
	{	
		type: "POST",
		url: SERVICE_URL,
		data: $.param(
		{
			"username": username,
			"password": password
		}),
		headers:
		{
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		success: function (data)
		{
			//alert(data);
			if (data.msg != null)
			{
				showMessage(data.msg);
			}
			else
			{
				showErrorMessage("Response data is null");
			}
		},
		error: function (data)
		{
			showErrorMessage(data);
		},
		crossDomain: true,
		dataType: 'jsonp',
	});
}

function showMessage(message)
{
	alert("Message\n" + message);
}

function showErrorMessage(message)
{
	alert("Error\n" + message);
}

// http://astroturf.azurewebsites.net/api/login
// callback = jQuery32105316654096257596_1508621026662
// username = ertugrul.ozcan % 40projectertis.com
// password =.Abcd1234!
// _ = 1508621026663
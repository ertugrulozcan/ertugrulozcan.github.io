var SERVICE_URL = "http://astroturf.azurewebsites.net/api/login";

function LoginButtonClickHandler()
{
	var username = $('#usernameTextField').val();
	var password = $('#passwordTextField').val();

	this.Login(username, password);
}

function Login(username, password)
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
	
	function showMessage(message)
	{
		alert("Message\n" + message);
	}

	function showErrorMessage(message)
	{
		alert("Error\n" + message);
	}
}
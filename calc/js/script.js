var degreeType = 'Degree';

function buttonclick(c)
{
    if ($("#EquationSpan").val() == "0")
        $("#EquationSpan").val(c);
    else
        $("#EquationSpan").val($("#EquationSpan").val() + c);
}

function del()
{
    var equ = $("#EquationSpan").val();
    if (equ)
        $("#EquationSpan").val(equ.substring(0, equ.length - 1));
    
    if (!$("#EquationSpan").val())
        $("#EquationSpan").val("0");
}

function clear()
{
    $("#ResultSpan").val("0");
    $("#EquationSpan").val("0");
}

function degreeTypeChanged(degreeType)
{
    if(degreeType == 'Degree')
    {
        $('DegreeTypeSelectedSpan').val('Derece');
        degreeType = 'Degree';
    }
    else if (degreeType == 'Radian')
    {
        $('DegreeTypeSelectedSpan').val('Radyan');
        degreeType = 'Radian';
    }
    else if (degreeType == 'Grad')
    {
        $('DegreeTypeSelectedSpan').val('Grad');
        degreeType = 'Grad';
    }
}

function exe()
{
    var parameter = { equation: $('#EquationSpan').val(), degreeType: this.degreeType }

    $.ajax({
        url: "https://hesapmakinesi.azurewebsites.net/CalculatorService.svc/Execute",
        data: JSON.stringify(parameter),
        method: "Execute",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Content-type",
                                 "application/json; charset=utf-8");
        },
        success: function (data)
        {
            alert("Sonuç : " + data.Result);
        },
        error: function (x, e)
        {
            if (x.status == 0) {
                alert('Hata: Bağlı değilsiniz. Lütfen ağ bağlantınızı kontrol ediniz. \n(You are offline!! Please Check Your Network)');
            } else if (x.status == 404) {
                alert('Hata: URL bulunamadı. \n(Requested URL not found)');
            } else if (x.status == 500) {
                alert('Hata: İç sunucu hatası. \n(Internal Server Error)');
            } else if (e == 'parsererror') {
                alert('Hata: JSON serialize hatası. \n(Parsing JSON Request failed)');
            } else if (e == 'timeout') {
                alert('Hata: İste zaman aşımına uğradı. \n(Request Time out)');
            } else {
                alert('Bilinmeyen hata! \n(Unknown error)' + x.responseText);
            }
        }
    });
}
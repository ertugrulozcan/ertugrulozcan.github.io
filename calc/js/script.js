var degreeType = "degree";

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
    if(degreeType == "degree")
    {
        document.getElementById('DegreeTypeSelectedSpan').innerText = 'Derece';
        degreeType = 'degree';
    }
    else if (degreeType == "radian")
    {
        document.getElementById('DegreeTypeSelectedSpan').innerText = 'Radyan';
        degreeType = 'radian';
    }
    else if (degreeType == "grad")
    {
        document.getElementById('DegreeTypeSelectedSpan').innerText = 'Grad';
        degreeType = 'grad';
    }
}

function exe()
{
    var parameter = { equation: $("#EquationSpan").val(), degreeType: this.degreeType }

    $.ajax({
        url: "http://hesapmakinesi.azurewebsites.net/CalculatorService.svc/Execute",
        data: JSON.stringify(parameter),
        type: "POST",
        dataType: "text",
        contentType: "application/json; charset=utf-8",
        success: function (data)
        {
            alert("Sonuç : " + data.Result);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown)
        {
            alert("Servis hatası : " + textStatus);
        }
    });
}
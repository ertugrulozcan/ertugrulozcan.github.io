var degreeType = "degree";

function buttonclick(c)
{
    if (document.getElementById('EquationSpan').innerText == "0")
        document.getElementById('EquationSpan').innerText = c;
    else
        document.getElementById('EquationSpan').innerText += c;
}

function del()
{
    var equ = document.getElementById('EquationSpan').innerText;
    if (equ)
        document.getElementById('EquationSpan').innerText = equ.substring(0, equ.length - 1);
    
    if (!document.getElementById('EquationSpan').innerText)
        document.getElementById('EquationSpan').innerText = "0";
}

function clear()
{
    document.getElementById('ResultSpan').innerText = "0";
    document.getElementById('EquationSpan').innerText = "0";
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
    var equation =
        {
            equationString: document.getElementById('EquationSpan'),
            degreeType: this.degreeType
        };

    /*
    * Bu noktada denklem hesaplanmak üzere bir wcf servisine gönderilir. Dönen sonuç ekrana yazdırılır.
    */
}
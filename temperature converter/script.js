document.getElementById('converter').onclick= tempconvert;

document.getElementById('clear').onclick= clearFrom;

function tempconvert()
{
    var fahrenheit=document.getElementById("fahrenheit").value;

    var celsius=document.getElementById("celsius").value;

    if(fahrenheit != '')
    {
            celsius=(parseFloat(fahrenheit) -32) / 1.8;
    }
    else
    {
        fahrenheit=(parseFloat(celsius) *1.8) + 32;
    }
    document.getElementById('fahrenheit').value=parseFloat(fahrenheit).toFixed(1);

    document.getElementById('celsius').value=parseFloat(celsius).toFixed(1);
}
function clearFrom()
{
    document.getElementById('fahrenheit').value='';

    document.getElementById('celsius').value='';
}
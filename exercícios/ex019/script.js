function mostrar(){
    var numero = parseInt(window.document.getElementById('inumero').value);
    var tabuada = "<h2>Tabuada do " + numero + "</h2>";


    for(var i = 1;i <= 10;i++){
        var resultado = numero * i;
        tabuada += numero + "x" + i + "=" + resultado + "<br>"
    }
    document.getElementById("resultado").innerHTML = tabuada;
}

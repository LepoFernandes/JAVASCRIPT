function mostrar(){
    var numero = document.getElementById('inumero')
    var tabuada = "<h2>Tabuada do " + numero.value + "</h2>";


    for(var i = 1;i <= 10;i++){
        number = Number(numero.value)
        var resultado = number * i;
        tabuada += number + "x" + i + "=" + resultado + "<br>"
    }
    
    
    document.getElementById("resultado").innerHTML = tabuada;
}

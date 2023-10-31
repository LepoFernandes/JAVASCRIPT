function calcular(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var resultadoDiv = document.getElementById('resultadoDiv')

    if(inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0){
       resultadoDiv.innerHTML = 'Erro! Complete os dados ao lado.'
    } else {
        resultadoDiv.innerHTML = 'Fazendo a contagem:'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if( i < f){//contagem crescente
            for(var c=i ; c <= f ; c+=p ){
            resultadoDiv.innerHTML += `${c} 👉`
            } 
        } else {
            // contagem regressiva
            for(var c = i; c>= f; c-=p){
            resultadoDiv.innerHTML += `${c} 👉`
            }
        }    
    }
}

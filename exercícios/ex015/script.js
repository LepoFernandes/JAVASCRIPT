function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if(fano.ariaValueMax.length == 0 || fano.value > ano){
        window.alert('Erro, verifique os dados e envie novamente!')
    } else {
        window.alert('Tudo ok!')
    }
}









function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Erro, verifique os dados e envie novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', './src/homem-criança.jpg')
            } else if ( idade < 30){
                //jovem
                img.setAttribute('src', './src/homem-jovem.jpg')
            } else if ( idade < 50){
                //adulto
                img.setAttribute('src', './src/homem-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', './src/homem-idoso.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', './src/mulher-criança.jpg')
            } else if ( idade < 30){
                //jovem
                img.setAttribute('src', './src/mulher-jovem.jpg')
            } else if ( idade < 50){
                //adulto  
                img.setAttribute('src', './src/mulher-adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', './src/mulher-idosa.jpg')
            }
        }

        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}









function carregar(){
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.` 
   
    if(hora >= 0 && hora < 12){
        img.src = 'src/manhã.jpg'
        document.body.style.background = '#FFD4B2'
    } else if(hora >= 12 && hora <= 18){
        img.src = 'src/tarde.jpg'
        document.body.style.background = '#4D2A3A'
    } else {
        img.src = 'src/noite.jpg'
        document.body.style.background = '#392C47'
    }
}

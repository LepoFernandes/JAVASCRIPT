var n = [];
function enviar(){
 
   var valores = window.document.getElementById('num')  
   var tab = window.document.getElementById('tabnum')
   if(valores.value.length == 0 || valores.value.length >100 ){
   } else {
      var numero = Number(valores.value)
   } if( numero >= 1 && numero <= 100){
      n.push(numero); // adicionando o valor de n
      var item = document.createElement('option')
      item.text = `Valor ${numero} adicionado!`
      item.value = `tab${numero}`
      tabnum.appendChild(item)   
   } else {
      window.alert('Erro! digite algum número válido.')
   }
}   
function finalizar(){ 
   
   
   
   
   
   var div = window.document.getElementById('res')
   div.innerHTML = `Ao todo, temos ${n.length} elementos cadastrados.`

}




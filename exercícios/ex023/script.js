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
      num.focus()
      num.value=''
   } else {
      window.alert('Erro! digite algum número válido.')
      
   }
}   
function finalizar(){ 
   var div = window.document.getElementById('res') 
   if (n.length === 0) {
      div.innerHTML = 'Nenhum valor cadastrado.';
  } else {
      // Inicialize as variáveis para o maior e menor valores
      var maiorValor = n[0];
      var menorValor = n[0];
      var somaValores = 0;
      // Encontre o maior e o menor valor e calcule a soma
      for (var i = 0; i < n.length; i++) {
          if (n[i] > maiorValor) {
              maiorValor = n[i];
          }
          if (n[i] < menorValor) {
              menorValor = n[i];
          }
          somaValores += n[i];
      }
      // Calcule a média dos valores
      var mediaValores = somaValores / n.length;
      // Exiba as informações na div 'res'
      div.innerHTML = `Ao todo, temos ${n.length} elementos cadastrados.<br>`;
      div.innerHTML += `O maior valor é: ${maiorValor}<br>`;
      div.innerHTML += `O menor valor é: ${menorValor}<br>`;
      div.innerHTML += `A soma dos valores é: ${somaValores}<br>`;
      div.innerHTML += `A média dos valores é: ${mediaValores.toFixed(2)}`;
  }
}
   
   
   
   
   





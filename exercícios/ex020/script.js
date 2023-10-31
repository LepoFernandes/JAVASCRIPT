var num = [5,8,2,9,3]
num.push(7) //adicionar na ultima posição
num.sort() // colocar em ordem crescente
console.log(`Nosso vetor é o ${num}`) //mostrar o vetor normal
console.log(`O tamanho comprimento do vetor é ${num.length}`) //mostrar a quantidade de elementos
console.log(`O primeiro elemento do nosso vetor é ${num[0]}`) //mostrar um elemento isolado
var pos = num.indexOf(8) // procurar a posição do valor 8
if(pos == -1){
    console.log('O valor não foi encontrado') //quando não encontra o valor é -1
} else {
    console.log(`O valor esta na posição ${pos}`) //mostrando a posição
}



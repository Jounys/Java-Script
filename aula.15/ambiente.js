let num = [5, 8, 2, 9, 3]
num.push(1) // Para adicionar um valor sempre na ultima posição
num.sort()  // Para colocar em ordem
console.log(num) // Exibindo todos os valores
console.log(`O vetor tem ${num.length} posições`) // Contandos as posições
console.log(`O primeiro  valor é ${num[4]}`) // Exibindo especificamente um valor  

let pos = num.indexOf(8) // Para localizar um valor
if (pos == -1){
    console.log('O valor não foi encontado!')
}else {
    console.log(`O valor 8 está na posção ${pos}`)
}

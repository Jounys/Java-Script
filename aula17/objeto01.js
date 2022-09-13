let amigo = {nome: 'João',
sexo:'M',
peso: '53.2',
 engordar(p=0){
    console.log('engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
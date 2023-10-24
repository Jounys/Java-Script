var idade = 12
console.log(`Você tem ${idade} anos`)
if (idade < 16){
    console.log('Não Vota')
}else if(/*idade >= 16 && */idade < 18){
        console.log('Voto opcional')
    }else if(/*idade >= 18 && */idade < 65){
            console.log('Voto Obrigatório')
        }else{
            console.log('Isento de Votar')
        }

// As funções comentadas já estão implicita sem ser necessaria
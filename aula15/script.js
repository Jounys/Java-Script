function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                // Criança
                img.setAttribute('src', 'imagens/criançaH.png')
            } else if (idade < 20) {
                // Adolescente
                img.setAttribute('src', 'imagens/adolescenteH.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adultoH.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosoH.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                // Criança
                img.setAttribute('src', 'imagens/criançaM.png')
            } else if (idade < 20) {
                // Adolescente
                img.setAttribute('src', 'imagens/adolescenteM.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/adultoM.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosoM.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        img.style.padding = '10px'
        res.appendChild(img)
    }
}

function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var paz = document.getElementById('paz')
    var data = new Date()
    var hora = data.getHours() 
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos} horas`
    if (hora >= 5 && hora < 12) {
        // BOM DIA!
        document.body.style.background = '#b66104'
        img.src = 'imagens/manha.png'
        paz.innerHTML = 'Bom dia!'
    }else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        document.body.style.background = '#c9971'
        img.src = 'imagens/tarde.png'
        paz.innerHTML = 'Boa tarde!'
    } else if(hora >= 19 && hora <= 0) {
        // BOA NOITE!
        document.body.style.background = '#3f291b'
        img.src = 'imagens/noite.png'
        paz.innerHTML = 'Boa noite!'
    } else {
        // BOA MADRUGADA
        document.body.style.background = '#332E30'
        img.src = 'imagens/madrugada.png'
        paz.innerHTML = 'Boa madrugada!'
    }
}

function iniciarRelogio(){
    let intervalo = 1000
    setInterval(carregar, intervalo)
}

window.addEventListener('load', iniciarRelogio)
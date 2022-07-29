function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var paz = document.getElementById('paz')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        document.body.style.background = '#b66104'
        img.src = 'manha.png'
        paz.innerHTML = 'BOM DIA!'
    }else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        document.body.style.background = '#c9971'
        img.src = 'tarde.png'
        paz.innerHTML = 'BOA TARDE!'
    } else {
        // BOA NOITE!
        document.body.style.background = '#3f291b'
        img.src = 'noite.png'
        paz.innerHTML = 'BOA NOITE!'
    }
}

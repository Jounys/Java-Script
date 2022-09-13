function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor digite um número!')
    } else {
        let n = Number(num.value) 
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option') // Parte do HTML
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`                      // útil para outras linguagens
            tab.appendChild(item)                       // Parte do HTML 
            c++
        }
    }
    
}
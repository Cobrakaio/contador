function contar() {
    var inicio = document.getElementById('textIni')
    var fim = document.getElementById('textFim')
    var passo = document.getElementById('textPas')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Numero inválido, tente novamente.')
    } else {
        res.innerHTML = `Contando: `
        let contInicio = Number(inicio.value)
        let contFim = Number(fim.value)
        let contPasso = Number(passo.value)
        if (contPasso <= 0) {
            window.alert(`Passo inválido, será considerado PASSO 1`)
            contPasso = 1
        } else {

            if (contInicio < contFim) {
                //CONTAGEM CRESCENTE
                for (let c = contInicio; c <= contFim; c += contPasso) {
                    res.innerHTML += `${c} \u{1F449}`
                }
                //CONTAGEM DECRESCENTE
            } else {
                for (let c = contInicio; c >= contFim; c -= contPasso) {
                    res.innerHTML += `${c} \u{1F449}`
                }
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}

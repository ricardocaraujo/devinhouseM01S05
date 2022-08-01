function atualizaHorario () {
    setInterval(() => {
        console.log(new Date().toLocaleTimeString("pt-BR"))
    }, 2000)
}

atualizaHorario()
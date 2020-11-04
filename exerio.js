class rio {
    constructor(nome, nivel, poluido){
        this.nome = nome
        this.nivel = nivel
        this.poluido = poluido
    }
    chover = (x) => {
        this.nivel += x
    }
    ensolarar = (x) => {
        if (this.nivel - x >+ 0){
            this.nivel -= x
        }
        else {
            console.log(`Não pe possivel deixar o nivel do rio abaixo de zero`)
        }
        this.nivel -= x
    }
    limpar = () => {
        this.poluido = false
    }
    sujar = () => {
        this.poluido = true
    }
    mostra = () => {
        // nao aparece valor boleano para o usuario
        let aux = this.poluido ? "Sujo" : "Limpo"
        console.log(`Nome: ${this.nome} Nivel: ${this.nivel} está ${this.aux}`)
    }
}

let rio1 = new rio("Rio Tapajós", 20, false)
rio1.chover(3)
rio1.sujar()
rio1.mostra()
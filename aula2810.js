// criando a classe
class Aluno {

    constructor(numeroAluno, nome, idade, p1, p2){
        this.numeroAluno = numeroAluno
        this.nome = nome
        this.idade = idade
        this.p1 = p1
        this.p2 = p2
    }
    notaFinal = () => {
        return(this.p1 + this.p2) / 2
    }
    mostra = () => {
        console.log(` Numero ${this.numeroAluno}, nome ${this.nome}, idade: ${this.idade}, Nota Final: ${this.notaFinal}`)
    }

    passou = () => {
        if (this.notaFinal() >= 6){
            return ` ${this.nome} Foi aprovado`
        }
        else {
            return `${this.nome} Foi reprovado`
        }
    }
}

// criando a instanciando objetos
let aluno1 = new Aluno(111, "Lorena", 20, 6, 8)
aluno1.mostra()
console.log(alunos.passou())

let a = Number(prompt("Informe numero do aluno 2"))
let b = prompt("Informe o nome do aluno 2")
let c = Number(prompt("Informe idade do aluno 2"))
let d = Number(prompt("Informe nota 1 do aluno 2"))
let e = Number(prompt("Informe nota 2 do aluno 2"))

let aluno2 = new Aluno(222, "Pedro", 19, 5, 4)
aluno2.mostra()


let aluno3 = new Aluno(333, "Vinicius", 18, 7, 8)
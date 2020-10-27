// vamos programar orientando a objetos

// criando uma calsse chamada veiculo
class Veiculo {

     // método construtor
     constructor(marca, modelo, cor, ano){
         this.marca = marca  // this representa o objeto sendo criado
         this.modelo = modelo
         this.cor = cor
         this.ano = ano
         this.motor = motor // true (ligado) ou false (Desligado)
         this.velocidade = velocidade
     }

     mostra =() =>{
        let status = (this.motor) ? "Ligado" : "Desligado" 
        console.log(`Marca: ${this.marca} , Modelo: ${this.modelo} , Cor: ${this.cor} , Ano: ${this.ano} Vel: ${this.velocidade} e Motor: ${status}`)  // this representa o objeto que chama o metodo
        

     }
     // ligar o carro
     ligar = () => {
         this.motor = true
        
     }
     // desligar o carro
     desligar = () => {
         this.motor = false
     }
     // aumentar a velocidade em x unidades
     acelerar = (x) => {
         this.velocidade = this.velocidade + x 
     }
     //diminuir a velocidade
     frear = (x) => {
         this.velocidade - this.velocidade - x
     }

}

// cria um objeto da classe veiculo
let objeto1 = new Veiculo("GH", "Onyx", "Prata", "2014", false) // this representa objeto1
objeto1.ligar()
objeto1.acelerar(80)
objeto1.frear(50)
objeto1.mostra() // this representa 

// cria um outro bjeto da classe Veiculo
let objeto2 = new Veiculo("FIAT", "Palio", "Azul", "2013", true) // this representa objeto2
objeto2.ligar()
objeto2.acelerar(70)
objeto2.frear(40)
objeto2.mostra()

// cria mais um objeto da classe veiculo
let objeto3 = new Veiculo("HYUNDAI", "I30", "Preto", "2015". true) // this representa o objeto3
objeto3.ligar()
objeto3.acelerar(60)
objeto3.frear(30)
objeto3.mostra()

// cria outro um objeto da classe veiculo
let objeto4 = new Veiculo("Volks", "Gol", "Branco", "2016", true)
objeto4.ligar()
objeto4.acelerar(50)
objeto4.frear(20)
objeto4.mostra()
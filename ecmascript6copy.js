// a nossa função pode ser uma variavel 
// estamos criando uma variável do tipo função
var cadastra = (vet) => {
    // criando o objeto
    // let objeto = new Object()
    // objeto.codigo = Number(prompt('Informe o código'))
    // objeto.aro = Number(prompt('Informe o aro da bicicleta'))
    // objeto.modelo = prompt('Informe o modelo da bicicleta')
    // objeto.marca = prompt('Informe a marca da bicicleta')
    // objeto.valor = Number(prompt('Informe o valor da bicicleta'))
    // objeto.ano = prompt('Informe o ano de fabricação')
    vet.push(
        {
            codigo: Number(prompt('Informe o código')),
            aro: Number(prompt('Informe o aro da bicicleta')),
            modelo: prompt('Informe o modelo da bicicleta'),
            marca: prompt('Informe a marca da bicicleta'),
            valor: Number(prompt('Informe o valor da bicicleta')),
            ano: Number(prompt('Informe o ano de fabricação'))
        }
        )
        // se for a primeira bicicleta, vet[0].codigo
        // se for a segunda bicicleta, vet[1].codigo
        console.log(`Bicicleta ${vet[vet.length-1].codigo} inserida com sucesso`)
}

var codigo // escopo global
var busca = (vet) => {
    codigo = prompt('Informe o código da bicicleta')
    // retorna o primeiro que achar
    let bike = vet.find( (objeto)  => {
        return objeto.codigo == codigo
    }) // faz um for e verifica se encontra o desejado
    console.log(bike) 
}

var soma = (vet)  => {
    let resultado = vet.reduce( (total, objeto) =>  
                {total + objeto.valor}, 0)//faz um for e soma os valores das bikes - inicia a soma com 0
    console.log(`A soma dos valores é${resultado}`)
}

// a bike 0 tem valor 10 - a bike 1 tem valor 20 - a bike 2 tem valor 30
// soma2(0, bike0) -> 10
// soma2(10, bike1) -> 30
// soma2(30, bike2) -> 60

let marca
var buscaMarca = (vet) => {
    marca = prompt('Informe a marca')
    // retorna todos que encontrar 
    let novas = vet.filter((objeto) => {
        marca == objeto.marca
    })
    console.log(novas)
}

var soma3 = (vet) => {
    let novo = vet.map((objeto) => {
        objeto.aro = objeto.aro + 3
         objeto
    })
    console.log(novo)
}

let maisVelha = (vet) => {
    let achou = vet[0].idade
    vet.forEach( (objeto) =>{
        if (objeto.ano < achou){
            achou = objeto.ano
        }
    })
    console.log(achou)
}

var vetor = []
cadastra(vetor)
cadastra(vetor)
cadastra(vetor)
busca(vetor)
soma(vetor)
buscaMarca(vetor)
soma3(vetor)
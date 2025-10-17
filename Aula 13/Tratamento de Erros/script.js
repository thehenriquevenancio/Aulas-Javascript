//Erro de Sintaxe

// const if = 0;
// let while = "palavra";

// if(numero > 2) {
//     console.log(numero)

// Erro de tempo de execução

// const pessoa = {
//     nome : "Henrique",
//     idade : 24
// }

// console.log(pessoa.endereço)

// console.log(50)

//Erro de Lógica

// function multiplicacao(a, b) {
//     return a ** b;
// }

// let resultado = multiplicacao(10, 20);
// console.log(resultado)

let nome = "Uva";
try {
    let nomeMaisculo = nome.toUpperCase();
    console.log(nomeMaisculo);
} catch(erro) {
    console.error("A variável deve ser do tipo String")
    console.error(erro.name)
    console.error(erro.message)
    console.error(erro.stack)
} finally {
    console.log("Fim da execução do programa!")
}


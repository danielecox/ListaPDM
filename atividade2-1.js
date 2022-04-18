
/*1. Escreva funções que implementam as quatro operações aritméticas. Todas elas devem
receber dois valores numéricos como parâmetro e devolver o valor de sua respectiva
operação. Faça a implementação usando a palavra function para todas elas.*/

function soma(a, b) {
    return a + b;
} 

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b == 0) {
        console.log("Não é possível dividir por zero");
    }
    return a / b;
}
console.log(soma(1,7))
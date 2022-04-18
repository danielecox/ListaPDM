/*2. Refaça o exercício 1 usando arrow functions.*/

 const soma = (a, b) => a + b; 

export const subtracao = (a, b) => a - b;

export const multiplicacao = (a, b)  => a * b;

export const divisao = (a, b) => {
    if (b == 0) {
        console.log("Não é possível dividir por zero");
    }
    return a / b;
}
/*3. Crie um objeto JSON que abriga todas as operações do exercício 2. */
const soma = (a, b) => a + b; 

const subtracao = (a, b) => a - b;

const multiplicacao = (a, b)  => a * b;

const divisao = (a, b) => {
    if (b == 0) {
        console.log("Não é possível dividir por zero");
    }
    return a / b;
}

 const calculadora = {
    soma: soma,
    subtracao: subtracao,
    multiplicacao: multiplicacao,
    divisao: divisao,
}

console.log(calculadora.soma(10,5));
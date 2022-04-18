// 4. Escreva um script que apresenta as seguintes operações para o usuário:
// 1- Soma
// 2- Subtração
// 3-Multiplicação
// 4- Divisão
// 5- Sair
// O programa deve ficar em loop até que o usuário digite 5. Se o usuário digitar uma opção
// inválida, o programa deve informá-lo disso e mostrar o menu de opções novamente. Use
// o objeto JSON do exercício 4 para realizar as operações aritméticas.

// import { calculadora } from "./atividade2-3"

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


calculadora.ligada = true;

while (calculadora.ligada) {
    operacao = prompt(`SELECIONE UMA OPÇÃO:
        1 - SOMA
        2 - SUBTRACAO
        3 - MULTIPLICACAO
        4 - DIVISAO
        5 - SAIR`)

    switch (operacao) {
        case '1':
            var a = parseFloat(prompt('Informe um valor para A: A + B'));
            var b = parseFloat(prompt('Informe um valor para B: A + B'));
            if (isNaN(a) || isNaN(b)){
                alert('Numero informado invalido!')
            }
            else{
                resultado = calculadora.soma(a, b);
                alert('O resultado da soma é: ' + resultado)
            }
            break;
        case '2':
            var a = parseFloat(prompt('Informe um valor para A: A - B'));
            var b = parseFloat(prompt('Informe um valor para B: A - B'));
            if (isNaN(a) || isNaN(b)){
                alert('Numero informado invalido!')
            }
            else{
                resultado = calculadora.subtracao(a, b);
                alert('O resultado da subtração é: ' + resultado)
            }
            break;
        case '3':
            var a = parseFloat(prompt('Informe um valor para A: A * B'));
            var b = parseFloat(prompt('Informe um valor para B: A * B'));
            if (isNaN(a) || isNaN(b)){
                alert('Numero informado invalido!')
            }
            else{
                resultado = calculadora.multiplicacao(a, b);
                alert('O resultado da multiplicação é: ' + resultado)
            }
            break;
        case '4':
            var a = parseFloat(prompt('Informe um valor para A: A / B'));
            var b = parseFloat(prompt('Informe um valor para B: A / B'));
            if (isNaN(a) || isNaN(b)){
                alert('Numero informado invalido!')
            }
            else{
                resultado = calculadora.divisao(a, b);
                alert('O resultado da divisão é: ' + resultado)
            }
            break;
        case '5':
            calculadora.ligada = false
            break;
        default:
            alert("Digite uma opção valida!")
    }
}

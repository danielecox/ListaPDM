/*5. O serviço Current weather data pode ser encontrado no link a seguir. Observe que ele
não é o mesmo utilizado em aula.
https://openweathermap.org/current
Faça um programa que, utilizando promises e as funções then/catch, exibe a temperatura
atual (atributo chamado  temp). O programa deve ser um loop que exibe as seguintes
opções para o usuário:
1- Digitar latitude e longitude
2- Sair
O programa fica em loop até que o usuário digite 2. Ao digitar 1, o usuário deve
informar   os   valores   de   latitude   e   longitude   da   localização   da   qual   deseja   saber   a
temperatura atual. Use um arquivo .env e o pacote dotenv para configurar uma variável
de ambiente que indica qual unidade de medida  de temperatura  deve ser utilizada:
Kelvin, Fahrenheit ou Celsius. Lembre-se de armazenar a chave de API no arquivo .env
e de tomar o cuidado de não armazená-lo no sistema de controle de versão.*/

var temperatura = {
    ligada: true
}


while (temperatura.ligada) {
    operacao = prompt(`SELECIONE UMA OPÇÃO:
    1 - Digitar latitude e longitude
    2 - Sair`)

    switch (operacao) {
        case '1':
            var latitude = parseFloat(prompt('Informe um valor para a latitude'));
            var longitude = parseFloat(prompt('Informe um valor para a longitude'));
            if (isNaN(latitude) || isNaN(longitude)) {
                alert('Numero informado invalido!')
            }
            else{
                const fetchTask = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}&units=${process.env.UNITS}`,)
                .then(resp => {
                    resp.json()
                        .then(x => {
                            console.log(`\nTEMPERATURA: ${x.main.temp}ºC\n`)
                            main();
                        });
                })
                .catch(err => console.log('Erro inesperado'))
            }
            break;
        case '2':
            temperatura.ligada = false
            break;
        default:
            alert("Digite uma opção valida!")
    }
}
